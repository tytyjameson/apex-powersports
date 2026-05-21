'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { PRODUCTS } from '@/lib/products'

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const product = PRODUCTS.find(p => p.id === id)
  if (!product) notFound()

  return <ProductDetail product={product} />
}

function ProductDetail({ product }: { product: ReturnType<typeof PRODUCTS.find> & {} }) {
  const [activeImg, setActiveImg] = useState(0)
  const [activeColor, setActiveColor] = useState(0)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Breadcrumb */}
      <div className="px-10 py-4 border-b border-[#2a2a2a] bg-[#111]">
        <div className="text-xs font-cond tracking-widest text-muted flex gap-2">
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <span className="text-[#2a2a2a]">/</span>
          <Link href="/products" className="hover:text-orange transition-colors">Products</Link>
          <span className="text-[#2a2a2a]">/</span>
          <span className="text-cream">{product!.name}</span>
        </div>
      </div>

      <div className="flex flex-1">
        {/* ── GALLERY ── */}
        <div className="flex-1 bg-[#111] border-r border-[#2a2a2a] flex flex-col items-center justify-center p-12">
          <div className="relative w-full max-w-xl aspect-[4/3] rounded-sm overflow-hidden mb-6 bg-[#0d0d0d]">
            <Image
              src={product!.galleryImgs[activeImg]}
              alt={product!.name}
              fill
              className="object-cover"
              sizes="50vw"
            />
          </div>
          {product!.galleryImgs.length > 1 && (
            <div className="flex gap-3">
              {product!.galleryImgs.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  className={`relative w-20 h-14 rounded-sm overflow-hidden border transition-colors ${i === activeImg ? 'border-orange' : 'border-[#2a2a2a] hover:border-orange/50'}`}
                >
                  <Image src={img} alt={`View ${i + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* ── INFO ── */}
        <div className="w-[480px] shrink-0 p-10 overflow-y-auto">
          <div className="font-cond text-xs font-semibold tracking-[0.2em] uppercase text-orange mb-1">
            {product!.make} · {product!.year}
          </div>
          <h1 className="font-display text-[clamp(2rem,4vw,3rem)] leading-none mb-1">{product!.model}</h1>
          <p className="text-sm text-muted mb-4">{product!.sku} · {product!.category} · {product!.stock}</p>

          {/* Stars */}
          <div className="flex items-center gap-2 mb-5">
            <span className="text-orange tracking-widest">{'★'.repeat(Math.round(product!.rating))}</span>
            <span className="text-sm text-muted">{product!.rating} ({product!.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-5 mb-5 border-b border-[#2a2a2a]">
            <span className="font-display text-5xl text-orange leading-none">{product!.priceDisplay}</span>
            {product!.originalPrice && (
              <span className="font-display text-2xl text-muted line-through">{product!.originalPrice}</span>
            )}
            {product!.originalPrice && (
              <span className="font-cond text-xs font-bold tracking-widest bg-green-950 text-green-400 px-2 py-0.5 rounded-sm">
                SAVE {product!.originalPrice && `$${(parseInt(product!.originalPrice.replace(/\D/g, '')) - product!.price).toLocaleString()}`}
              </span>
            )}
          </div>

          {/* Specs grid */}
          <div className="grid grid-cols-2 border border-[#2a2a2a] rounded-sm overflow-hidden mb-5">
            {[
              ['Make', product!.make],
              ['Model', product!.model],
              ['Year', String(product!.year)],
              ['Category', product!.category],
              ['Engine', product!.engine],
              ['Horsepower', product!.hp],
              ['Top Speed', product!.topSpeed],
              ['Weight', product!.weight],
              ['Seat Height', product!.seatHeight],
              ['Fuel Tank', product!.fuelTank],
            ].map(([label, value], i) => (
              <div key={label} className={`p-3 border-[#2a2a2a] ${i % 2 === 0 ? 'border-r' : ''} ${i < 8 ? 'border-b' : ''}`}>
                <div className="text-xs text-muted uppercase tracking-widest font-cond">{label}</div>
                <div className="font-cond font-semibold text-sm mt-0.5">{value}</div>
              </div>
            ))}
          </div>

          {/* Colors */}
          <div className="mb-5">
            <p className="font-cond text-xs font-semibold uppercase tracking-widest text-muted mb-2">
              Color — <span className="text-cream">{product!.colors[activeColor].name}</span>
            </p>
            <div className="flex gap-2">
              {product!.colors.map((color, i) => (
                <button
                  key={color.name}
                  onClick={() => setActiveColor(i)}
                  title={color.name}
                  className={`w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 ${i === activeColor ? 'border-cream scale-110' : 'border-transparent'}`}
                  style={{ backgroundColor: color.hex }}
                />
              ))}
            </div>
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap mb-4">
            <button className="btn btn-primary flex-1 min-w-40 py-3 text-base">Add to Cart</button>
            <button className="btn btn-outline py-3 px-5 text-base">Book Test Ride</button>
          </div>

          <p className="text-sm text-muted mb-6">
            💳 As low as{' '}
            <strong className="text-cream">{product!.monthlyPayment}/mo</strong>{' '}
            with 0% APR financing ·{' '}
            <span className="text-orange cursor-pointer hover:underline">Get pre-approved →</span>
          </p>

          {/* Features */}
          <div className="border-t border-[#2a2a2a] pt-5">
            <p className="font-cond text-xs font-bold tracking-[0.2em] uppercase text-muted mb-3">Highlights</p>
            <ul className="space-y-2">
              {product!.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange mt-1.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
