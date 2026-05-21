import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS } from '@/lib/products'

const CATEGORIES = [
  { name: 'Motorcycles', count: 84, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Kwasaki_ZX-10R_tokyo.JPG/640px-Kwasaki_ZX-10R_tokyo.JPG' },
  { name: 'Side-by-Sides', count: 62, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg/640px-2019_Can-Am_Maverick_X3_X_rs_Turbo_RR.jpg' },
  { name: 'Jet Skis', count: 38, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Sea-Doo_RXP-X_260_2012.jpg/640px-Sea-Doo_RXP-X_260_2012.jpg' },
  { name: 'ATVs', count: 57, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/CanAm_ATV.jpg/640px-CanAm_ATV.jpg' },
  { name: 'Dirt Bikes', count: 45, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/KTM_350_EXC-F.jpg/640px-KTM_350_EXC-F.jpg' },
]

const FEATURED_IDS = ['kawasaki-ninja-zx10r-2025', 'can-am-maverick-x3-2024', 'sea-doo-rxt-x-300-2025']

export default function HomePage() {
  const featured = PRODUCTS.filter(p => FEATURED_IDS.includes(p.id))

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden bg-[#111]">
        {/* Grid texture */}
        <div className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, rgba(240,90,26,.03) 0px, rgba(240,90,26,.03) 1px, transparent 1px, transparent 80px),
              repeating-linear-gradient(0deg, rgba(240,90,26,.03) 0px, rgba(240,90,26,.03) 1px, transparent 1px, transparent 80px)`
          }}
        />
        {/* Right accent */}
        <div className="absolute right-0 top-0 bottom-0 w-[55%] border-l border-orange/10"
          style={{
            background: 'linear-gradient(135deg, transparent 20%, rgba(240,90,26,.05) 100%)',
            clipPath: 'polygon(8% 0, 100% 0, 100% 100%, 0% 100%)'
          }}
        />

        <div className="relative z-10 px-10 py-24 max-w-2xl">
          <div className="section-label mb-5">2025 Collection</div>
          <h1 className="font-display text-[clamp(5rem,10vw,9rem)] leading-[0.92] tracking-wide mb-6">
            BUILT TO<br /><span className="text-orange">DOMINATE</span>
          </h1>
          <p className="text-lg text-muted max-w-md mb-10 leading-relaxed">
            From the dunes to the track — discover elite powersports machines engineered for those who refuse to settle.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/products" className="btn btn-primary px-8 py-3 text-base">
              Shop All Machines
            </Link>
            <button className="btn btn-outline px-8 py-3 text-base">
              Book a Test Ride
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="absolute bottom-12 right-10 flex gap-12 z-10">
          {[['320+', 'Models In Stock'], ['12K', 'Happy Riders'], ['24', 'Years Experience']].map(([num, label]) => (
            <div key={label} className="text-right">
              <div className="font-display text-5xl leading-none text-cream">{num}</div>
              <div className="font-cond text-xs tracking-[0.15em] uppercase text-muted mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="bg-[#111] px-10 py-20">
        <div className="section-label">Browse Categories</div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-3">Find Your Ride</h2>
        <p className="text-muted max-w-xl mb-10">From trail-shredding dirt bikes to luxury side-by-sides — every category, every brand, under one roof.</p>

        <div className="grid grid-cols-5 gap-px bg-[#2a2a2a] border border-[#2a2a2a]">
          {CATEGORIES.map(cat => (
            <Link
              key={cat.name}
              href="/products"
              className="group bg-[#111] p-8 hover:bg-[#181818] transition-colors relative overflow-hidden"
            >
              <div className="relative w-full h-28 mb-4 overflow-hidden rounded-sm">
                <Image src={cat.img} alt={cat.name} fill className="object-cover" sizes="20vw" />
              </div>
              <div className="font-cond text-xl font-bold uppercase tracking-wide mb-1">{cat.name}</div>
              <div className="text-sm text-muted">{cat.count} models available</div>
              {/* bottom accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-orange scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="bg-black px-10 py-20">
        <div className="section-label">Hot Picks</div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-none mb-10">Featured Machines</h2>
        <div className="grid grid-cols-3 gap-6">
          {featured.map(p => <ProductCard key={p.id} product={p} showSpecs={false} />)}
        </div>
      </section>

      {/* ── PROMO BANNER ── */}
      <div className="bg-orange px-10 py-12 flex items-center justify-between flex-wrap gap-6">
        <div>
          <h2 className="font-display text-5xl text-white leading-none">0% Financing Available</h2>
          <p className="text-white/75 mt-1">Ride now, pay later. Get approved in minutes with our in-house financing team.</p>
        </div>
        <button className="btn btn-white px-8 py-3 text-base">Apply Today</button>
      </div>

      <Footer />
    </div>
  )
}
