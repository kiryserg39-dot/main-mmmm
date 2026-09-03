/**
 * Скрипт для скачивания реальных фото продуктов с ruslabnutrition.ru
 * Запустить локально: node scripts/download-product-images.mjs
 *
 * Требуется: Node.js 18+, npx playwright install chromium
 */
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const OUT = join(__dirname, '..', 'public', 'images', 'products');

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const productPages = [
  { slug: 'whey', url: 'https://ruslabnutrition.ru/product/%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%B8%D0%BD-%D1%81%D1%8B%D0%B2%D0%BE%D1%80%D0%BE%D1%82%D0%BE%D1%87%D0%BD%D1%8B%D0%B9-whey-100-pure%D0%B1%D0%B5%D0%BB%D0%BA%D0%BE%D0%B2%D1%8B%D0%B9-%D0%BA%D0%BE%D0%BA/' },
  { slug: 'whey-diet', url: 'https://ruslabnutrition.ru/product/whey-diet/' },
  { slug: 'super-power-whey', url: 'https://ruslabnutrition.ru/product/super-power-whey-1000%D0%B3%D0%B2%D0%BA%D1%83%D1%81%D1%8B-%D0%B2%D0%B0%D0%BD%D0%B8%D0%BB%D1%8C%D0%BA%D0%BB%D1%83%D0%B1%D0%BD%D0%B8%D0%BA%D0%B0%D1%88%D0%BE%D0%BA%D0%BE%D0%BB%D0%B0%D0%B4/' },
  { slug: 'mega-power', url: 'https://ruslabnutrition.ru/product-category/gejnery/' },
  { slug: 'vegan-protein', url: 'https://ruslabnutrition.ru/product/sunflower-protein-%D0%BF%D1%80%D0%BE%D1%82%D0%B5%D0%B8%D0%BD-%D0%BF%D0%BE%D0%B4%D1%81%D0%BE%D0%BB%D0%BD%D0%B5%D1%87%D0%BD%D1%8B%D0%B9%D1%80%D0%B0%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D1%8B/' },
  { slug: 'multi-protein', url: 'https://ruslabnutrition.ru/product/multi-protein/' },
];

const categoryPages = [
  { url: 'https://ruslabnutrition.ru/product-category/proteiny/', cat: 'protein' },
  { url: 'https://ruslabnutrition.ru/product-category/gejnery/', cat: 'gainers' },
  { url: 'https://ruslabnutrition.ru/product-category/aminokisloty/', cat: 'aminoacids' },
  { url: 'https://ruslabnutrition.ru/product-category/zhiroszhigateli/', cat: 'fat-burners' },
  { url: 'https://ruslabnutrition.ru/product-category/funkcionalnoe-pitanie/', cat: 'functional' },
];

async function downloadImage(page, imgUrl, filename) {
  try {
    const resp = await page.request.get(imgUrl);
    if (resp.ok()) {
      const buf = await resp.body();
      const ext = imgUrl.match(/\.(jpe?g|png|webp)/i)?.[1] || 'jpg';
      const path = join(OUT, `${filename}.${ext}`);
      writeFileSync(path, buf);
      console.log(`  ✓ ${filename}.${ext} (${(buf.length / 1024).toFixed(0)}KB)`);
      return true;
    }
  } catch (e) {
    console.log(`  ✗ ${filename}: ${e.message}`);
  }
  return false;
}

console.log('Запуск скачивания изображений RusLabNutrition...\n');

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext();
const page = await ctx.newPage();

console.log('=== Страницы продуктов ===');
for (const { slug, url } of productPages) {
  console.log(`\n${slug}:`);
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });

    const mainImg = await page.evaluate(() => {
      const wooImg = document.querySelector('.woocommerce-product-gallery__image img');
      if (wooImg) return wooImg.src;
      const mainImg = document.querySelector('.product .wp-post-image');
      if (mainImg) return mainImg.src;
      const anyProductImg = document.querySelector('.product img[src*="upload"]');
      if (anyProductImg) return anyProductImg.src;
      return null;
    });

    if (mainImg) {
      await downloadImage(page, mainImg, slug);
    } else {
      console.log(`  ✗ Главное изображение не найдено`);
    }

    const galleryImgs = await page.evaluate(() => {
      return Array.from(
        document.querySelectorAll('.woocommerce-product-gallery__image a, .woocommerce-product-gallery .flex-control-thumbs img')
      ).map(el => el.href || el.src).filter(Boolean);
    });

    for (let i = 0; i < galleryImgs.length && i < 3; i++) {
      await downloadImage(page, galleryImgs[i], `${slug}-${i + 1}`);
    }
  } catch (e) {
    console.log(`  ✗ Ошибка: ${e.message}`);
  }
}

console.log('\n\n=== Каталог (все товары) ===');
try {
  await page.goto('https://ruslabnutrition.ru/shop/', { waitUntil: 'networkidle', timeout: 15000 });

  const allProducts = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('.products .product')).map(el => {
      const img = el.querySelector('img');
      const link = el.querySelector('a');
      const title = el.querySelector('.woocommerce-loop-product__title');
      return {
        src: img?.src,
        title: title?.textContent?.trim(),
        href: link?.href,
      };
    }).filter(p => p.src);
  });

  console.log(`Найдено ${allProducts.length} товаров`);
  for (const p of allProducts) {
    const slug = p.href ? new URL(p.href).pathname.split('/').filter(Boolean).pop() : null;
    if (slug && p.src) {
      await downloadImage(page, p.src, slug);
    }
  }
} catch (e) {
  console.log(`  ✗ Ошибка каталога: ${e.message}`);
}

await browser.close();
console.log('\n✅ Готово! Изображения сохранены в public/images/products/');
console.log('Далее замени SVG-заглушки на скачанные фото в src/data/products.ts');
