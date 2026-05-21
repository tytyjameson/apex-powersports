'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProductCard from '@/components/ui/ProductCard'
import { PRODUCTS, MAKES, CATEGORIES } from '@/lib/products'
import type { Category, Condition } from '@/lib/products'

const PRICE_MAX = 40000

function fmt(n: number) {
  return n >= PRICE_MAX ? '$40,000+' : '$' + n.toLocaleString()
}

export default function ProductsPage() {
  const [search, setSearch] = useState('')
  const [makes, setMakes] = useState<string[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [conditions, setConditions] = useState<Condition[]>(['New'])
  const [yearMin, setYearMin] = useState('')
  const [yearMax, setYearMax] = useState('')
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(PRICE_MAX)
  const [sort, setSort] = useState('featured')

  function toggleArr<T>(arr: T[], set: (v: T[]) => void, val: T) {
    set(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  const filtered = useMemo(() => {
    let results = PRODUCTS.filter(p => {
      if (makes.length && !makes.includes(p.make)) return false
      if (categories.length && !categories.includes(p.category)) return false
      if (conditions.length && !conditions.includes(p.condition)) return false
      if (p.price < priceMin) return false
      if (priceMax < PRICE_MAX && p.price > priceMax) return false
      if (yearMin && p.year < parseInt(yearMin)) return false
      if (yearMax && p.year > parseInt(yearMax)) return false
      if (search) {
        const q = search.toLowerCase()
        const hay = [p.make, p.model, String(p.year), p.category, p.name, p.engine].join(' ').toLowerCase()
        if (!hay.includes(q)) return false
      }
      return true
    })

    if (sort === 'price-asc')  results = [...results].sort((a, b) => a.price - b.price)
    if (sort === 'price-desc') results = [...results].sort((a, b) => b.price - a.price)
    if (sort === 'year-desc')  results = [...results].sort((a, b) => b.year - a.year)
    if (sort === 'year-asc')   results = [...results].sort((a, b) => a.year - b.year)

    return results
  }, [search, makes, categories, conditions, yearMin, yearMax, priceMin, priceMax, sort])

  // Active chips
  const chips: { label: string; clear: () => void }[] = [
    ...makes.map(m => ({ label: `Make: ${m}`, clear: () => setMakes(makes.filter(v => v !== m)) })),
    ...categories.map(c => ({ label: `Cat: ${c}`, clear: () => setCategories(categories.filter(v => v !== c)) })),
    ...conditions.map(c => ({ label: c, clear: () => setConditions(conditions.filter(v => v !== c)) })),
    ...(yearMin ? [{ label: `From ${yearMin}`, clear: () => setYearMin('') }] : []),
    ...(yearMax ? [{ label: `To ${yearMax}`, clear: () => setYearMax('') }] : []),
    ...(priceMin > 0 ? [{ label: `Min ${fmt(priceMin)}`, clear: () => setPriceMin(0) }] : []),
    ...(priceMax < PRICE_MAX ? [{ label: `Max ${fmt(priceMax)}`, clear: () => setPriceMax(PRICE_MAX) }] : []),
    ...(search ? [{ label: `"${search}"`, clear: () => setSearch('') }] : []),
  ]

  function resetAll() {
    setMakes([]); setCategories([]); setConditions(['New'])
    setYearMin(''); setYearMax(''); setPriceMin(0); setPriceMax(PRICE_MAX)
    setSearch(''); setSort('featured')
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Page Header */}
      <div className="px-10 pt-12 pb-6 border-b border-[#2a2a2a] bg-[#111]">
        <div className="text-xs font-cond tracking-widest text-muted mb-3 flex gap-2">
          <Link href="/" className="hover:text-orange transition-colors">Home</Link>
          <span className="text-[#2a2a2a]">/</span>
          <span className="text-cream">All Machines</span>
        </div>
        <h1 className="font-display text-[clamp(3rem,6vw,5rem)] leading-none">All Machines</h1>
        <p className="text-sm text-muted mt-1">{filtered.length} result{filtered.length !== 1 ? 's' : ''}</p>

        {/* Search Bar */}
        <div className="relative mt-5 max-w-2xl">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted text-lg pointer-events-none">🔍</span>
          <input
            type="text"
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search by make, model, year, or keyword…"
            className="w-full bg-[#181818] border border-[#2a2a2a] rounded-sm text-cream font-body text-base py-3 pl-11 pr-10 outline-none focus:border-orange transition-colors placeholder:text-muted"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-cream text-lg leading-none"
            >✕</button>
          )}
        </div>
      </div>

      <div className="flex flex-1">
        {/* ── SIDEBAR ── */}
        <aside className="w-72 border-r border-[#2a2a2a] bg-[#111] p-6 shrink-0">

          {/* Make */}
          <FilterGroup title="Make" onClear={() => setMakes([])}>
            {MAKES.map(m => (
              <CheckItem key={m} label={m} checked={makes.includes(m)} onChange={() => toggleArr(makes, setMakes, m)} />
            ))}
          </FilterGroup>

          {/* Category */}
          <FilterGroup title="Category" onClear={() => setCategories([])}>
            {CATEGORIES.map(c => (
              <CheckItem key={c} label={c} checked={categories.includes(c)} onChange={() => toggleArr(categories, setCategories, c)} />
            ))}
          </FilterGroup>

          {/* Year */}
          <FilterGroup title="Model Year" onClear={() => { setYearMin(''); setYearMax('') }}>
            <div className="flex gap-2 items-center mt-1">
              <input
                type="number" placeholder="From" value={yearMin} min={2018} max={2025}
                onChange={e => setYearMin(e.target.value)}
                className="flex-1 bg-[#181818] border border-[#2a2a2a] text-cream text-sm p-2 rounded-sm text-center outline-none focus:border-orange transition-colors w-full"
              />
              <span className="text-muted text-sm">–</span>
              <input
                type="number" placeholder="To" value={yearMax} min={2018} max={2025}
                onChange={e => setYearMax(e.target.value)}
                className="flex-1 bg-[#181818] border border-[#2a2a2a] text-cream text-sm p-2 rounded-sm text-center outline-none focus:border-orange transition-colors w-full"
              />
            </div>
          </FilterGroup>

          {/* Price */}
          <FilterGroup title="Price Range" onClear={() => { setPriceMin(0); setPriceMax(PRICE_MAX) }}>
            <div className="flex justify-between text-xs font-cond text-muted mb-2">
              <span>{fmt(priceMin)}</span>
              <span>{fmt(priceMax)}</span>
            </div>
            <input type="range" min={0} max={PRICE_MAX} step={500} value={priceMin}
              onChange={e => { const v = parseInt(e.target.value); if (v < priceMax - 500) setPriceMin(v) }} />
            <div className="mt-2">
              <input type="range" min={0} max={PRICE_MAX} step={500} value={priceMax}
                onChange={e => { const v = parseInt(e.target.value); if (v > priceMin + 500) setPriceMax(v) }} />
            </div>
          </FilterGroup>

          {/* Condition */}
          <FilterGroup title="Condition" onClear={() => setConditions([])}>
            {(['New', 'Pre-Owned'] as Condition[]).map(c => (
              <CheckItem key={c} label={c} checked={conditions.includes(c)} onChange={() => toggleArr(conditions, setConditions, c)} />
            ))}
          </FilterGroup>

          <button onClick={resetAll} className="w-full mt-2 py-2 font-cond font-bold text-sm tracking-widest uppercase text-muted border border-[#2a2a2a] rounded-sm hover:text-orange hover:border-orange transition-colors">
            Reset All Filters
          </button>
        </aside>

        {/* ── GRID ── */}
        <main className="flex-1 p-7 overflow-auto">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <p className="text-sm text-muted">
              Showing <strong className="text-cream">{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
            </p>
            <select
              value={sort}
              onChange={e => setSort(e.target.value)}
              className="bg-[#181818] border border-[#2a2a2a] text-cream text-sm px-3 py-2 rounded-sm outline-none focus:border-orange cursor-pointer"
            >
              <option value="featured">Sort: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="year-desc">Newest First</option>
              <option value="year-asc">Oldest First</option>
            </select>
          </div>

          {/* Active filter chips */}
          {chips.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {chips.map((chip, i) => (
                <div key={i} className="flex items-center gap-1 font-cond text-xs font-semibold tracking-widest uppercase px-2 py-1 bg-orange/10 border border-orange/30 rounded-sm text-orange">
                  {chip.label}
                  <button onClick={chip.clear} className="text-orange/70 hover:text-orange ml-1 leading-none">✕</button>
                </div>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="font-display text-4xl mb-2">No Results Found</h3>
              <p className="text-muted mb-6">Try adjusting your filters or search term.</p>
              <button onClick={resetAll} className="btn btn-outline px-6 py-2 text-sm">Clear All Filters</button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {filtered.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  )
}

/* ── Sub-components ── */
function FilterGroup({ title, onClear, children }: { title: string; onClear: () => void; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2 pb-2 border-b border-[#2a2a2a]">
        <span className="font-cond text-xs font-bold tracking-[0.2em] uppercase text-muted">{title}</span>
        <button onClick={onClear} className="font-cond text-xs tracking-widest uppercase text-orange hover:underline">Clear</button>
      </div>
      <div className="space-y-0.5">{children}</div>
    </div>
  )
}

function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex items-center gap-2 py-1.5 cursor-pointer text-muted hover:text-cream transition-colors text-sm select-none">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  )
}
