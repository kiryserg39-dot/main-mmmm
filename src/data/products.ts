import { Product } from "@/types/catalog";
import { F } from "@/data/flavors";

const r = (id: string, author: string, rating: number, text: string, date: string, verified = true) => ({
  id,
  author,
  rating,
  text,
  date,
  verified,
});

export const products: Product[] = [
  {
    id: "whey",
    slug: "whey",
    name: "Whey",
    line: "RusLab Nutrition",
    category: "protein",
    tags: ["bestseller", "inulin"],
    shortDescription:
      "Сывороточный концентрат для роста и восстановления мышц с натуральным пребиотиком инулином.",
    description:
      "Whey — базовый сывороточный протеин RusLab Nutrition с полным аминокислотным профилем. Быстро усваивается, поддерживает восстановление после тренировки и рост мышечной массы. В составе — натуральный пребиотик инулин, который заботится о пищеварении и помогает усваивать белок без дискомфорта.",
    composition:
      "Концентрат сывороточного белка (WPC-80), какао (в шоколадных вкусах), инулин цикория, ароматизатор натуральный, подсластитель (сукралоза), загуститель (гуаровая камедь), лецитин соевый.",
    usage:
      "1–2 мерные ложки (30–60 г) смешать с 200–300 мл воды или молока в шейкере. Принимать 1–3 раза в день: утром, после тренировки и/или перед сном.",
    nutrition: { perServingGrams: 30, calories: 117, protein: 24, fat: 1.8, carbs: 3.2, inulin: 2 },
    flavors: [F.vanilla, F.chocolate, F.strawberry, F.pinacolada, F.cappuccino, F.melon, F.cookies],
    sizes: [
      { id: "900", label: "900 г", grams: 900, price: 1790, oldPrice: 2090, servings: 30, sku: "RL-WHEY-900", inStock: true },
      { id: "1800", label: "1800 г", grams: 1800, price: 3190, oldPrice: 3690, servings: 60, sku: "RL-WHEY-1800", inStock: true },
    ],
    images: ["/images/products/whey.svg"],
    model3d: { kind: "can", labelColor: "#B4FF39", capColor: "#14161a" },
    rating: 4.8,
    reviewsCount: 214,
    reviews: [
      r("1", "Максим", 5, "Беру уже третью банку, вкус клубника со сливками — топ. Живот не крутит, в отличие от других протеинов.", "2026-06-02"),
      r("2", "Ирина", 5, "Растворяется отлично, без комков. Инулин — реально работает, заметила по пищеварению.", "2026-05-14"),
    ],
  },
  {
    id: "whey-diet",
    slug: "whey-diet",
    name: "Whey Diet",
    line: "RusLab Nutrition",
    category: "protein",
    tags: ["inulin"],
    shortDescription: "Протеин для похудения с пониженным содержанием углеводов и L-карнитином в составе.",
    description:
      "Whey Diet создан для тех, кто хочет сохранить мышцы на сушке или диете. Минимум углеводов и жиров, L-карнитин в составе помогает использовать жировые запасы как источник энергии, а инулин поддерживает чувство сытости и здоровое пищеварение.",
    composition:
      "Концентрат и изолят сывороточного белка, L-карнитин тартрат, инулин цикория, ароматизатор натуральный, подсластитель (сукралоза), CLA (конъюгированная линолевая кислота).",
    usage: "1 мерная ложка (30 г) на 250 мл воды. Принимать 1–2 раза в день вместо приёма пищи или перекуса.",
    nutrition: { perServingGrams: 30, calories: 104, protein: 25, fat: 0.9, carbs: 1.6, inulin: 3 },
    flavors: [F.vanilla, F.strawberry, F.chocolate, F.melon],
    sizes: [
      { id: "900", label: "900 г", grams: 900, price: 1990, servings: 30, sku: "RL-WHEYD-900", inStock: true },
    ],
    images: ["/images/products/whey-diet.svg"],
    model3d: { kind: "can", labelColor: "#B4FF39", capColor: "#0f0f10" },
    rating: 4.7,
    reviewsCount: 96,
    reviews: [
      r("1", "Светлана", 5, "На сушке спасение — сытный, вкусный, углеводов почти нет.", "2026-04-22"),
    ],
  },
  {
    id: "super-power-whey",
    slug: "super-power-whey",
    name: "Super Power Whey",
    line: "RusLab Nutrition",
    category: "protein",
    tags: ["bestseller", "inulin"],
    shortDescription: "Усиленная формула сывороточного протеина с повышенным содержанием белка на порцию.",
    description:
      "Super Power Whey — протеин для тех, кому нужен максимум белка на грамм продукта. Подходит для интенсивных силовых тренировок и периодов набора мышечной массы. Формула дополнена инулином для комфортного пищеварения.",
    composition:
      "Концентрат сывороточного белка (WPC-80), изолят сывороточного белка, инулин цикория, витаминно-минеральный премикс, ароматизатор натуральный, подсластитель (сукралоза).",
    usage: "2 мерные ложки (40 г) на 300 мл воды или молока. 1–2 раза в день.",
    nutrition: { perServingGrams: 40, calories: 156, protein: 33, fat: 2.1, carbs: 3.8, inulin: 2.5 },
    flavors: [F.chocolate, F.vanilla, F.cappuccino, F.hazelnut, F.strawberry],
    sizes: [
      { id: "900", label: "900 г", grams: 900, price: 1890, servings: 22, sku: "RL-SPW-900", inStock: true },
      { id: "1800", label: "1800 г", grams: 1800, price: 3390, servings: 45, sku: "RL-SPW-1800", inStock: true },
    ],
    images: ["/images/products/super-power-whey.svg"],
    model3d: { kind: "can", labelColor: "#FF5B1F", capColor: "#14161a" },
    rating: 4.9,
    reviewsCount: 178,
    reviews: [
      r("1", "Дмитрий", 5, "Вкус капучино огонь, по составу — реально много белка на порцию, не разбавленный.", "2026-07-01"),
    ],
  },
  {
    id: "mega-power",
    slug: "mega-power",
    name: "Mega Power",
    line: "RusLab Nutrition",
    category: "protein",
    tags: ["inulin"],
    shortDescription: "Многокомпонентный протеин из четырёх видов белка для длительного питания мышц.",
    description:
      "Mega Power сочетает сывороточный, яичный, соевый и казеиновый белок — быстрые и медленные фракции обеспечивают питание мышц на протяжении нескольких часов. Отличный вариант на день и перед сном.",
    composition:
      "Концентрат сывороточного белка, мицеллярный казеин, изолят соевого белка, яичный альбумин, инулин цикория, ароматизатор натуральный, подсластитель.",
    usage: "1–2 мерные ложки (35 г) на 250–300 мл воды или молока, в течение дня и перед сном.",
    nutrition: { perServingGrams: 35, calories: 138, protein: 27, fat: 2.4, carbs: 4.1, inulin: 2 },
    flavors: [F.chocolate, F.vanilla, F.strawberry, F.cookies],
    sizes: [
      { id: "900", label: "900 г", grams: 900, price: 1850, servings: 25, sku: "RL-MP-900", inStock: true },
    ],
    images: ["/images/products/mega-power.svg"],
    model3d: { kind: "can", labelColor: "#B4FF39", capColor: "#1c1f24" },
    rating: 4.6,
    reviewsCount: 88,
    reviews: [
      r("1", "Алексей", 4, "Хорошо насыщает, беру на ночь вместо казеина отдельного.", "2026-03-11"),
    ],
  },
  {
    id: "giant-mass",
    slug: "giant-mass",
    name: "Giant Mass",
    line: "RusLab Nutrition",
    category: "gainers",
    tags: ["bestseller", "inulin"],
    shortDescription: "Высококалорийный гейнер для набора мышечной массы с комплексом сложных углеводов.",
    description:
      "Giant Mass — это белково-углеводный комплекс для эктоморфов и всех, кому сложно набрать вес. Сложные углеводы дают длительную энергию, белок питает мышцы, а инулин помогает избежать тяжести после большой порции.",
    composition:
      "Мальтодекстрин, концентрат сывороточного белка, овсяная мука, инулин цикория, витаминно-минеральный комплекс, ароматизатор натуральный.",
    usage: "2–3 мерные ложки (100–150 г) на 400–500 мл воды или молока, 1–2 раза в день между приёмами пищи.",
    nutrition: { perServingGrams: 150, calories: 570, protein: 28, fat: 4, carbs: 98, inulin: 4 },
    flavors: [F.chocolate, F.vanilla, F.banana, F.strawberry, F.cappuccino],
    sizes: [
      { id: "1500", label: "1500 г", grams: 1500, price: 1690, servings: 10, sku: "RL-GM-1500", inStock: true },
      { id: "3000", label: "3000 г", grams: 3000, price: 2790, oldPrice: 3190, servings: 20, sku: "RL-GM-3000", inStock: true },
    ],
    images: ["/images/products/giant-mass.svg"],
    model3d: { kind: "pouch", labelColor: "#FF5B1F", capColor: "#14161a" },
    rating: 4.7,
    reviewsCount: 132,
    reviews: [
      r("1", "Роман", 5, "За два месяца +6 кг, силовые тоже растут. Вкус банан очень достоверный.", "2026-06-19"),
    ],
  },
  {
    id: "female",
    slug: "female",
    name: "Female",
    line: "RusLab Nutrition",
    category: "for-women",
    tags: ["for-women", "inulin"],
    shortDescription: "Протеин для девушек с лёгкой текстурой, коллагеном и пониженной калорийностью.",
    description:
      "Female разработан с учётом женской физиологии: облегчённая формула, коллаген для кожи и суставов, минимум калорий на порцию. Помогает поддерживать мышцы в тонусе на фоне тренировок и следить за фигурой без чувства тяжести.",
    composition:
      "Изолят сывороточного белка, гидролизат коллагена, инулин цикория, L-карнитин, витамин C, ароматизатор натуральный, подсластитель.",
    usage: "1 мерная ложка (25 г) на 200 мл воды или растительного молока. 1–2 раза в день.",
    nutrition: { perServingGrams: 25, calories: 92, protein: 20, fat: 0.6, carbs: 1.8, inulin: 2 },
    flavors: [F.strawberry, F.vanilla, F.pinacolada, F.melon],
    sizes: [
      { id: "600", label: "600 г", grams: 600, price: 1690, servings: 24, sku: "RL-FEM-600", inStock: true },
    ],
    images: ["/images/products/female.svg"],
    model3d: { kind: "jar", labelColor: "#FF5FA0", capColor: "#14161a" },
    rating: 4.9,
    reviewsCount: 156,
    reviews: [
      r("1", "Анна", 5, "Наконец протеин, который не пучит и приятный на вкус. Пина колада — любимый.", "2026-07-08"),
      r("2", "Кристина", 5, "Кожа и правда стала лучше, плюс тело в тонусе держится.", "2026-05-30"),
    ],
  },
  {
    id: "collagen-c",
    slug: "collagen-vitamin-c",
    name: "Коллаген с витамином C",
    line: "RusLab Nutrition",
    category: "for-women",
    tags: ["for-women"],
    shortDescription: "Гидролизованный коллаген с витамином C для кожи, суставов и связок.",
    description:
      "Гидролизованный коллаген с добавлением витамина C, который необходим для естественного синтеза собственного коллагена в организме. Поддержка кожи, волос, ногтей, суставов и связок при регулярных тренировках.",
    composition: "Гидролизат коллагена (рыбный), витамин C (аскорбиновая кислота), ароматизатор натуральный, подсластитель.",
    usage: "1 мерная ложка (10 г) на 150–200 мл воды или сока, 1 раз в день.",
    nutrition: { perServingGrams: 10, calories: 36, protein: 9, fat: 0, carbs: 0.2 },
    flavors: [F.neutral, F.citrus, F.berry],
    sizes: [
      { id: "300", label: "300 г", grams: 300, price: 1290, servings: 30, sku: "RL-COLL-300", inStock: true },
    ],
    images: ["/images/products/collagen.svg"],
    model3d: { kind: "jar", labelColor: "#FF5FA0", capColor: "#1c1f24" },
    rating: 4.8,
    reviewsCount: 74,
    reviews: [
      r("1", "Ольга", 5, "Пью месяц, ногти стали крепче. Вкус цитрус приятный, не приторный.", "2026-04-02"),
    ],
  },
  {
    id: "bcaa",
    slug: "bcaa-2-1-1",
    name: "BCAA 2:1:1",
    line: "RusLab Nutrition",
    category: "aminoacids",
    tags: ["bestseller"],
    shortDescription: "Аминокислоты с разветвлённой цепью в классическом соотношении для защиты мышц.",
    description:
      "BCAA 2:1:1 — лейцин, изолейцин и валин в оптимальной пропорции. Замедляют разрушение мышечной ткани во время интенсивных тренировок, ускоряют восстановление и снижают ощущение усталости.",
    composition: "L-лейцин, L-изолейцин, L-валин, лимонная кислота, ароматизатор натуральный, подсластитель, краситель натуральный.",
    usage: "1 мерная ложка (7 г) на 300 мл воды до, во время или после тренировки.",
    nutrition: { perServingGrams: 7, calories: 27, protein: 7, fat: 0, carbs: 0 },
    flavors: [F.greenapple, F.cola, F.berry, F.citrus, F.melon],
    sizes: [
      { id: "300", label: "300 г", grams: 300, price: 990, servings: 42, sku: "RL-BCAA-300", inStock: true },
      { id: "500", label: "500 г", grams: 500, price: 1490, servings: 71, sku: "RL-BCAA-500", inStock: true },
    ],
    images: ["/images/products/bcaa.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#14161a" },
    rating: 4.7,
    reviewsCount: 121,
    reviews: [
      r("1", "Никита", 5, "Зелёное яблоко — идеальный вкус, пью на каждой тренировке.", "2026-06-27"),
    ],
  },
  {
    id: "creatine",
    slug: "creatine-monohydrate",
    name: "Creatine Monohydrate",
    line: "RusLab Nutrition",
    category: "aminoacids",
    tags: ["bestseller"],
    shortDescription: "Чистый моногидрат креатина для роста силы, мощности и мышечного объёма.",
    description:
      "Один из самых изученных и эффективных видов спортивного питания. Повышает силовые показатели, взрывную мощность и способствует росту мышечной массы за счёт удержания воды в мышечных клетках.",
    composition: "Креатин моногидрат 100%.",
    usage: "5 г (1 мерная ложка) на 200 мл воды или сока, 1 раз в день, вне зависимости от тренировки.",
    nutrition: { perServingGrams: 5, calories: 0, protein: 0, fat: 0, carbs: 0 },
    flavors: [F.neutral],
    sizes: [
      { id: "300", label: "300 г", grams: 300, price: 790, servings: 60, sku: "RL-CREA-300", inStock: true },
      { id: "500", label: "500 г", grams: 500, price: 1090, servings: 100, sku: "RL-CREA-500", inStock: true },
    ],
    images: ["/images/products/creatine.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#0f0f10" },
    rating: 4.9,
    reviewsCount: 203,
    reviews: [
      r("1", "Егор", 5, "Классика, работает так как должна. Растворяется хорошо, без песка.", "2026-05-05"),
    ],
  },
  {
    id: "l-carnitine",
    slug: "l-carnitine",
    name: "L-Carnitine",
    line: "RusLab Nutrition",
    category: "fat-burners",
    tags: [],
    shortDescription: "Жидкий L-карнитин для повышения энергии и эффективного использования жировых запасов.",
    description:
      "L-карнитин помогает транспортировать жирные кислоты в митохондрии клеток, где они используются как источник энергии. Особенно эффективен при кардионагрузках и в период похудения.",
    composition: "L-карнитин тартрат, вода питьевая, лимонная кислота, ароматизатор натуральный, подсластитель.",
    usage: "1 флакон (25 мл) за 30–40 минут до тренировки или кардио.",
    nutrition: { perServingGrams: 25, calories: 8, protein: 0, fat: 0, carbs: 0.2 },
    flavors: [F.citrus, F.berry, F.melon],
    sizes: [
      { id: "7x25", label: "7 флаконов × 25 мл", grams: 175, price: 890, servings: 7, sku: "RL-LCAR-7", inStock: true },
      { id: "20x25", label: "20 флаконов × 25 мл", grams: 500, price: 2190, servings: 20, sku: "RL-LCAR-20", inStock: true },
    ],
    images: ["/images/products/l-carnitine.svg"],
    model3d: { kind: "bottle", labelColor: "#FF5B1F", capColor: "#14161a" },
    rating: 4.5,
    reviewsCount: 67,
    reviews: [
      r("1", "Виктория", 4, "Беру перед бегом, стало легче бежать длинные дистанции.", "2026-04-18"),
    ],
  },
  {
    id: "l-glutamine",
    slug: "l-glutamine",
    name: "L-Glutamine",
    line: "RusLab Nutrition",
    category: "aminoacids",
    tags: [],
    shortDescription: "Глютамин для восстановления мышц и поддержки иммунитета при высоких нагрузках.",
    description:
      "L-глютамин — самая распространённая аминокислота в мышцах. Поддерживает восстановление после интенсивных тренировок, помогает сохранить мышечную массу и укрепляет иммунную систему.",
    composition: "L-глютамин 100%.",
    usage: "5 г на 200 мл воды, утром натощак и после тренировки.",
    nutrition: { perServingGrams: 5, calories: 0, protein: 5, fat: 0, carbs: 0 },
    flavors: [F.neutral, F.citrus],
    sizes: [
      { id: "300", label: "300 г", grams: 300, price: 890, servings: 60, sku: "RL-GLUT-300", inStock: true },
    ],
    images: ["/images/products/l-glutamine.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#1c1f24" },
    rating: 4.6,
    reviewsCount: 52,
    reviews: [
      r("1", "Павел", 5, "Реже болею с тех пор как начал принимать регулярно.", "2026-03-29"),
    ],
  },
  {
    id: "aakg",
    slug: "aakg",
    name: "AAKG",
    line: "RusLab Nutrition",
    category: "aminoacids",
    tags: ["new"],
    shortDescription: "Аргинин альфа-кетоглутарат для пампа, выносливости и питания мышц кислородом.",
    description:
      "AAKG повышает выработку оксида азота, расширяет сосуды и улучшает приток крови к мышцам — тот самый эффект «памп» на тренировке. Улучшает выносливость и питание мышц кислородом и нутриентами.",
    composition: "Аргинин альфа-кетоглутарат (AAKG), лимонная кислота, ароматизатор натуральный, подсластитель.",
    usage: "1 мерная ложка (5 г) на 250 мл воды за 20–30 минут до тренировки.",
    nutrition: { perServingGrams: 5, calories: 4, protein: 0, fat: 0, carbs: 0.5 },
    flavors: [F.greenapple, F.citrus, F.cola],
    sizes: [
      { id: "300", label: "300 г", grams: 300, price: 950, servings: 60, sku: "RL-AAKG-300", inStock: true },
    ],
    images: ["/images/products/aakg.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#14161a" },
    rating: 4.6,
    reviewsCount: 38,
    reviews: [
      r("1", "Артём", 5, "Памп ощутимый уже с середины тренировки. Кола на вкус необычно, но заходит.", "2026-07-15"),
    ],
  },
  {
    id: "vegan-protein",
    slug: "vegan-protein",
    name: "Vegan Protein",
    line: "RusLab Nutrition",
    category: "vegan",
    tags: ["vegan", "inulin"],
    shortDescription: "Растительный протеин на горохе и рисе с полным аминокислотным профилем.",
    description:
      "100% растительный протеин на основе горохового и рисового белка — вместе они формируют полноценный аминокислотный профиль, сопоставимый с животным белком. Подходит веганам, вегетарианцам и всем, кто хочет снизить долю животных продуктов в рационе.",
    composition:
      "Изолят горохового белка, рисовый протеин, инулин цикория, какао (в шоколадном вкусе), ароматизатор натуральный, подсластитель (стевия).",
    usage: "1–2 мерные ложки (30–60 г) на 250–300 мл воды или растительного молока.",
    nutrition: { perServingGrams: 30, calories: 112, protein: 22, fat: 2, carbs: 3, inulin: 2.5 },
    flavors: [F.chocolate, F.vanilla, F.banana],
    sizes: [
      { id: "900", label: "900 г", grams: 900, price: 1990, servings: 30, sku: "RL-VEG-900", inStock: true },
    ],
    images: ["/images/products/vegan-protein.svg"],
    model3d: { kind: "can", labelColor: "#B4FF39", capColor: "#14161a" },
    rating: 4.7,
    reviewsCount: 44,
    reviews: [
      r("1", "Юлия", 5, "Наконец растительный протеин без песочной текстуры. Шоколад очень достойный.", "2026-06-10"),
    ],
  },
  {
    id: "inulin-fiber",
    slug: "inulin-fiber",
    name: "Inulin Fiber",
    line: "RusLab Nutrition",
    category: "functional",
    tags: ["inulin", "vegan"],
    shortDescription: "Чистый пребиотик инулин — фирменная добавка RusLab для здорового пищеварения.",
    description:
      "Тот самый инулин, который RusLab Nutrition добавляет во все свои протеины — здесь в чистом виде. Натуральный растворимый пребиотик из корня цикория питает полезную микрофлору кишечника, улучшает усвоение белка и снижает нагрузку на пищеварение.",
    composition: "Инулин цикория (растворимая клетчатка) 100%.",
    usage: "5–10 г (1–2 ложки) добавлять в протеин, смузи, каши или напитки 1–2 раза в день.",
    nutrition: { perServingGrams: 5, calories: 10, protein: 0, fat: 0, carbs: 5, inulin: 5 },
    flavors: [F.neutral],
    sizes: [
      { id: "400", label: "400 г", grams: 400, price: 590, servings: 80, sku: "RL-INU-400", inStock: true },
    ],
    images: ["/images/products/inulin.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#1c1f24" },
    rating: 4.8,
    reviewsCount: 29,
    reviews: [
      r("1", "Марина", 5, "Добавляю в любой протеин — пищеварение стало заметно лучше.", "2026-05-22"),
    ],
  },
  {
    id: "fat-burner-complex",
    slug: "fat-burner-complex",
    name: "Fat Burner Complex",
    line: "RusLab Nutrition",
    category: "fat-burners",
    tags: ["new"],
    shortDescription: "Термогенный комплекс с экстрактом зелёного чая, L-карнитином и кофеином.",
    description:
      "Комплексный жиросжигатель для активных тренировок и работы над рельефом: термогенные компоненты повышают расход энергии, кофеин даёт бодрость и фокус, а L-карнитин помогает использовать жир как топливо.",
    composition:
      "L-карнитин тартрат, экстракт зелёного чая, кофеин безводный, экстракт гуараны, хром пиколинат, оболочка капсулы (желатин).",
    usage: "2 капсулы утром и 2 капсулы за 30 минут до тренировки. Не принимать после 16:00.",
    nutrition: { perServingGrams: 2, calories: 2, protein: 0, fat: 0, carbs: 0 },
    flavors: [F.neutral],
    sizes: [
      { id: "90caps", label: "90 капсул", grams: 90, price: 1190, servings: 45, sku: "RL-FBC-90", inStock: true },
    ],
    images: ["/images/products/fat-burner.svg"],
    model3d: { kind: "jar", labelColor: "#FF5B1F", capColor: "#0f0f10" },
    rating: 4.4,
    reviewsCount: 31,
    reviews: [
      r("1", "Сергей", 4, "Энергии на тренировке больше, но кофеина многовато для вечера — беру утром.", "2026-04-09"),
    ],
  },
  {
    id: "omega-3",
    slug: "omega-3",
    name: "Omega-3",
    line: "RusLab Nutrition",
    category: "functional",
    tags: [],
    shortDescription: "Рыбий жир высокой степени очистки для сердца, суставов и восстановления.",
    description:
      "Омега-3 полиненасыщенные жирные кислоты поддерживают работу сердечно-сосудистой системы, суставов и способствуют снижению воспалительных процессов после интенсивных тренировок.",
    composition: "Рыбий жир (концентрат ЭПК/ДГК), желатиновая капсула, антиокислитель (витамин E).",
    usage: "1–2 капсулы во время еды, 1–2 раза в день.",
    nutrition: { perServingGrams: 1, calories: 9, protein: 0, fat: 1, carbs: 0 },
    flavors: [F.neutral],
    sizes: [
      { id: "90caps", label: "90 капсул", grams: 90, price: 690, servings: 90, sku: "RL-OM3-90", inStock: true },
    ],
    images: ["/images/products/omega-3.svg"],
    model3d: { kind: "jar", labelColor: "#B4FF39", capColor: "#14161a" },
    rating: 4.7,
    reviewsCount: 22,
    reviews: [
      r("1", "Татьяна", 5, "Без рыбного привкуса, суставы после бега стали меньше беспокоить.", "2026-02-17"),
    ],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getBestsellers() {
  return products.filter((p) => p.tags.includes("bestseller"));
}

export function getRelated(product: Product, limit = 4) {
  return products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, limit)
    .concat(products.filter((p) => p.id !== product.id && p.category !== product.category).slice(0, Math.max(0, limit - 1)))
    .slice(0, limit);
}

export function minPrice(product: Product) {
  return Math.min(...product.sizes.map((s) => s.price));
}
