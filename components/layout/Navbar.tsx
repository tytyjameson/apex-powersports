'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#2a2a2a] px-10 flex items-center justify-between h-16">
      <Link href="/" className="font-display text-3xl tracking-wide text-cream hover:text-cream">
        APEX<span className="text-orange">●</span>
      </Link>

      <div className="flex gap-8 items-center">
        <NavLink href="/" label="Home" active={pathname === '/'} />
        <NavLink href="/products" label="Products" active={pathname.startsWith('/products')} />
        <a className="font-cond text-sm font-semibold tracking-widest uppercase text-muted hover:text-cream cursor-pointer transition-colors">
          Service
        </a>
        <a className="font-cond text-sm font-semibold tracking-widest uppercase text-muted hover:text-cream cursor-pointer transition-colors">
          Financing
        </a>
        <Link
          href="/products"
          className="font-cond text-sm font-semibold tracking-widest uppercase bg-orange text-white px-5 py-2 rounded-sm hover:bg-orange-dim transition-colors"
        >
          Shop Now
        </Link>
      </div>
    </nav>
  )
}

function NavLink({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <Link
      href={href}
      className={`font-cond text-sm font-semibold tracking-widest uppercase transition-colors ${
        active ? 'text-orange' : 'text-muted hover:text-cream'
      }`}
    >
      {label}
    </Link>
  )
}
