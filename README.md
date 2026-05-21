# APEX Powersports — Next.js App

A three-page powersports dealership website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Project Structure

```
apex-powersports/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata)
│   ├── globals.css             # Global styles + Tailwind
│   ├── page.tsx                # Home page
│   ├── products/
│   │   └── page.tsx            # Products listing page (search + filters)
│   └── products/[id]/
│       └── page.tsx            # Individual product detail page
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/
│       └── ProductCard.tsx     # Reusable product card
├── lib/
│   └── products.ts             # All product data + TypeScript types
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production
```bash
npm run build
npm start
```

---

## Adding New Products

All product data lives in **`lib/products.ts`**. To add a new product, copy an existing entry in the `PRODUCTS` array and update the fields:

```ts
{
  id: 'brand-model-year',           // URL slug — must be unique
  img: 'https://...',               // Product image URL
  badge: 'new',                     // 'new' | 'sale' | 'hot' | undefined
  badgeText: 'New 2025',
  make: 'Kawasaki',                 // Used in Make filter
  model: 'Ninja ZX-10R',
  year: 2025,                       // Used in Year filter
  category: 'Motorcycle',           // 'Motorcycle' | 'Side-by-Side' | 'Jet Ski' | 'ATV' | 'Dirt Bike'
  condition: 'New',                 // 'New' | 'Pre-Owned'
  name: 'Kawasaki Ninja ZX-10R',    // Display name
  sub: 'Superbike · 998cc Inline-4',
  engine: '998cc Inline-4',
  hp: '203 HP',
  topSpeed: '186 mph',
  weight: '441 lbs',
  seatHeight: '32.7 in',
  fuelTank: '4.5 gal',
  price: 16999,                     // Number — used for filtering/sorting
  priceDisplay: '$16,999',          // Display string
  originalPrice: '$18,499',         // Optional — shows strikethrough
  colors: [
    { hex: '#84cc16', name: 'Lime Green' },
  ],
  features: [
    'Feature one',
    'Feature two',
  ],
  galleryImgs: ['https://...'],     // Array of image URLs for the gallery
  sku: 'KAW-ZX10R-2025',
  stock: 'In Stock · Ships in 3–5 days',
  rating: 4.9,
  reviewCount: 127,
  monthlyPayment: '$289',
}
```

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type safety across all components |
| Tailwind CSS | Utility-first styling |
| next/image | Optimized image loading |
| next/font | Google Fonts (Bebas Neue, Barlow) |
# apex-powersports
