/**
 * Owner file. Change the store name, tagline, products, hours, and contact here.
 * Photos live in /public/images — swap the file, or point `image` at a new path.
 */

export type CategoryId =
  | "vapes"
  | "glass"
  | "papers"
  | "accessories"
  | "cigars"
  | "hookah";

export type Product = {
  id: string;
  name: string;
  category: CategoryId;
  price: string;
  blurb: string;
  detail: string;
  image: string;
  featured?: boolean;
};

export type Category = {
  id: CategoryId;
  name: string;
  blurb: string;
  image: string;
};

export const store = {
  name: "Emerald Market & Smoke",
  tagline: "The counter, kept well.",
  lede: "Vapes, glass, papers, and the pieces staff will talk you through. This page is a shelf — nothing is sold online.",
  cityLine: "Seattle, Washington",
  ageNote: "21+ only. ID checked at the counter. Nothing on this page is for sale.",
  phoneDisplay: "(253) 555-0148",
  phoneHref: "tel:+12535550148",
  email: "hello@emberandoak.example",
  address: {
    line1: "9823 15th Ave SW, Suite A",
    city: "Seattle",
    region: "WA",
    postal: "98106",
  },
  geo: { lat: 47.5144, lng: -122.3543 },
  hours: [
    { days: "Monday – Thursday", time: "10:00 – 9:00" },
    { days: "Friday – Saturday", time: "10:00 – 10:00" },
    { days: "Sunday", time: "11:00 – 7:00" },
  ],
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
  about: [
    "Emerald Market & Smoke is a counter at 9823 15th Ave SW. The shelf is short on purpose: devices we can set up, glass you can look through before it leaves, papers and wraps, and the small tools that go with them.",
    "If a card says ask in store, the price moves with what came in that week. Stock is what is physically here. We do not take orders, holds, or payments on this site.",
  ],
};

export const categories: Category[] = [
  {
    id: "vapes",
    name: "Vapes",
    blurb: "Pods, refillable kits, and house liquid with the strength on the shelf tag.",
    image: "/images/mod.jpg",
  },
  {
    id: "glass",
    name: "Glass",
    blurb: "Bubblers and beakers you can check in the light at the counter.",
    image: "/images/beaker.jpg",
  },
  {
    id: "papers",
    name: "Papers",
    blurb: "Unprinted sheets and leaf wraps. No flavored novelty packs.",
    image: "/images/papers.jpg",
  },
  {
    id: "accessories",
    name: "Accessories",
    blurb: "Grinders, torches, trays, and jars that close.",
    image: "/images/grinder.jpg",
  },
  {
    id: "cigars",
    name: "Cigars",
    blurb: "A short unbanded selection. Ask what the humidor is holding.",
    image: "/images/cigars.jpg",
  },
  {
    id: "hookah",
    name: "Hookah",
    blurb: "Small bases and hoses. Coals stay behind the counter.",
    image: "/images/hookah.jpg",
  },
];

export const products: Product[] = [
  {
    id: "cove-pod",
    name: "Cove Pod",
    category: "vapes",
    price: "$32",
    blurb: "A closed pod with a tighter draw than a cloud.",
    detail:
      "Staff will check the pod and the charge before it leaves. We do not ship devices.",
    image: "/images/pod.jpg",
    featured: true,
  },
  {
    id: "kiln-kit",
    name: "Kiln Kit",
    category: "vapes",
    price: "$78",
    blurb: "Refillable mod and tank. We can coil it here.",
    detail:
      "Bring it back for a coil if you bought it at this counter. Parts vary by what is in the drawer.",
    image: "/images/mod.jpg",
  },
  {
    id: "amber-30",
    name: "Amber 30 ml",
    category: "vapes",
    price: "Ask in store",
    blurb: "House liquid in an unlabeled bottle.",
    detail:
      "Nicotine strength is written on the shelf tag, not on this site. Flavor names change with the batch.",
    image: "/images/liquid.jpg",
  },
  {
    id: "honey-bubbler",
    name: "Honey Bubbler",
    category: "glass",
    price: "$54",
    blurb: "Short piece, honey tint, easy to see through.",
    detail:
      "One of the pieces usually in the front case. If this exact one sells, the next is similar, not identical.",
    image: "/images/bubbler.jpg",
    featured: true,
  },
  {
    id: "river-beaker",
    name: "River Beaker",
    category: "glass",
    price: "Ask in store",
    blurb: "Taller scientific shape. Price follows the piece.",
    detail:
      "Height and joint size are on the tag in the case. We do not quote glass online.",
    image: "/images/beaker.jpg",
  },
  {
    id: "cream-papers",
    name: "Cream Papers",
    category: "papers",
    price: "$4",
    blurb: "Unbleached, unprinted, fifty leaves.",
    detail: "A plain pack. Tips are in the accessory tray if you want them.",
    image: "/images/papers.jpg",
    featured: true,
  },
  {
    id: "leaf-wraps",
    name: "Leaf Wraps",
    category: "papers",
    price: "$7",
    blurb: "Tobacco-leaf wraps, nothing printed on the pack.",
    detail: "Sold by the pouch. Ask which cut is in this week.",
    image: "/images/wraps.jpg",
  },
  {
    id: "four-mill",
    name: "Four-Piece Mill",
    category: "accessories",
    price: "$36",
    blurb: "Brushed metal grinder. Nothing engraved.",
    detail: "Four parts, a standard thread. We keep a couple of sizes behind the counter.",
    image: "/images/grinder.jpg",
    featured: true,
  },
  {
    id: "pocket-torch",
    name: "Pocket Torch",
    category: "accessories",
    price: "$18",
    blurb: "Slim torch. Butane is sold separately.",
    detail: "Refill at the counter if you already own one. We do not mail butane.",
    image: "/images/torch.jpg",
  },
  {
    id: "counter-kit",
    name: "Counter Kit",
    category: "accessories",
    price: "$16",
    blurb: "Tray, poker, and a glass tip.",
    detail: "The small set we keep next to the papers. Contents can shift by the week.",
    image: "/images/tray.jpg",
  },
  {
    id: "lid-jar",
    name: "Lid Jar",
    category: "accessories",
    price: "$24",
    blurb: "A jar that closes, with a wood lid.",
    detail: "For storage at home. Not a smell-proof promise — ask to test the seal.",
    image: "/images/jar.jpg",
  },
  {
    id: "night-three",
    name: "Night Three",
    category: "cigars",
    price: "Ask in store",
    blurb: "Three unbanded cigars from the humidor.",
    detail:
      "We do not list brands here. If you know what you want, say it at the counter and we will tell you if it is in.",
    image: "/images/cigars.jpg",
  },
  {
    id: "ember-base",
    name: "Ember Base",
    category: "hookah",
    price: "Ask in store",
    blurb: "Smoked-glass base, matte stem, one hose.",
    detail: "Coals, tongs, and foil are a separate ask. Setups stay in the shop until you are ready to carry one.",
    image: "/images/hookah.jpg",
  },
];

export const chapters = [
  {
    kicker: "Vapes",
    title: "Set up before you leave.",
    image: "/images/liquid.jpg",
    alt: "Unlabeled amber bottles on a dark stone counter",
  },
  {
    kicker: "Glass",
    title: "Held in the hand, not a thumbnail.",
    image: "/images/beaker.jpg",
    alt: "A clear glass beaker on a charcoal background",
  },
  {
    kicker: "The counter",
    title: "Papers, cigars, and the small tools.",
    image: "/images/papers.jpg",
    alt: "A stack of unprinted cream rolling papers",
  },
] as const;

const dayToRow: Record<string, string> = {
  Monday: "Monday – Thursday",
  Tuesday: "Monday – Thursday",
  Wednesday: "Monday – Thursday",
  Thursday: "Monday – Thursday",
  Friday: "Friday – Saturday",
  Saturday: "Friday – Saturday",
  Sunday: "Sunday",
};

export function categoryName(id: CategoryId) {
  return categories.find((category) => category.id === id)?.name ?? id;
}

export function productsIn(id: CategoryId) {
  return products.filter((product) => product.category === id);
}

export function todayRow(date = new Date()) {
  const name = date.toLocaleDateString("en-US", { weekday: "long" });
  return dayToRow[name] ?? null;
}

export function addressLine() {
  const { line1, city, region, postal } = store.address;
  return `${line1}, ${city}, ${region} ${postal}`;
}

export function mapEmbedSrc() {
  const { lat, lng } = store.geo;
  const pad = 0.012;
  const bbox = [lng - pad, lat - pad, lng + pad, lat + pad].join("%2C");
  return `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat}%2C${lng}`;
}

export function directionsHref() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(addressLine())}`;
}
