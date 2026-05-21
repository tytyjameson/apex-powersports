import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'

const BADGE_STYLES: Record<string, string> = {
  new:  'bg-orange text-white',
  sale: 'bg-green-950 text-green-400',
  hot:  'bg-red-950 text-red-400',
}

interface Props {
  product: Product
  showSpecs?: boolean
}

export default function ProductCard({ product, showSpecs = true }: Props) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block bg-[#181818] border border-[#2a2a2a] rounded-sm overflow-hidden hover:border-orange transition-all duration-200 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-[#0d0d0d]">
        <Image
          src={product.img}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Body */}
      <div className="p-5">
        {/* Badge */}
        {product.badge ? (
          <span className={`inline-block font-cond text-xs font-bold tracking-widest uppercase px-2 py-0.5 rounded-sm mb-3 ${BADGE_STYLES[product.badge]}`}>
            {product.badgeText}
          </span>
        ) : (
          <div className="h-6 mb-3" />
        )}

        <h3 className="font-cond text-xl font-bold uppercase tracking-tight mb-1">{product.name}</h3>
        <p className="text-sm text-muted mb-3">{product.sub}</p>

        {/* Spec pills */}
        {showSpecs && (
          <div className="flex gap-2 flex-wrap mb-4">
            <SpecPill>{product.year}</SpecPill>
            <SpecPill>{product.hp}</SpecPill>
            <SpecPill>{product.condition}</SpecPill>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-[#2a2a2a] pt-4 mt-4">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl text-orange">{product.priceDisplay}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted line-through">{product.originalPrice}</span>
            )}
          </div>
          <span className="font-cond text-xs font-bold tracking-widest uppercase text-orange group-hover:tracking-[0.2em] transition-all">
            View →
          </span>
        </div>
      </div>
    </Link>
  )
}

function SpecPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-cond text-xs font-semibold tracking-wide uppercase px-2 py-0.5 bg-[#111] border border-[#2a2a2a] rounded-sm text-muted">
      {children}
    </span>
  )
}
