import { chromium } from 'playwright';

const OUT = '/tmp/claude-0/-home-user-main-mmmm/27b776b9-fcc2-5508-a63f-1fe74110b9d9/scratchpad';
const BASE = 'http://localhost:3456';

async function shot(page, url, name, opts = {}) {
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  if (opts.scroll) {
    await page.evaluate(async (px) => {
      window.scrollBy(0, px);
      await new Promise(r => setTimeout(r, 500));
    }, opts.scroll);
  }
  await page.screenshot({ path: `${OUT}/${name}.png`, fullPage: opts.fullPage ?? false });
  console.log(`  ✓ ${name}`);
}

const browser = await chromium.launch({
  executablePath: '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  args: ['--no-sandbox']
});

const desktop = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const dp = await desktop.newPage();
await shot(dp, BASE, 'home-desktop-hero');
await shot(dp, BASE, 'home-desktop-full', { fullPage: true });
await shot(dp, `${BASE}/catalog`, 'catalog-desktop');
await shot(dp, `${BASE}/product/whey`, 'product-desktop');
await shot(dp, `${BASE}/about`, 'about-desktop');

const mobile = await browser.newContext({ viewport: { width: 390, height: 844 } });
const mp = await mobile.newPage();
await shot(mp, BASE, 'home-mobile');
await shot(mp, `${BASE}/catalog`, 'catalog-mobile');
await shot(mp, `${BASE}/product/whey`, 'product-mobile');

await browser.close();
console.log('Done');
