import React, { useMemo, useState } from 'react';
import { Search, ArrowUpRight } from 'lucide-react';
import { BUSINESSES, BUSINESS_IMAGES } from '../data/mock';

const Businesses = () => {
  const [q, setQ] = useState('');
  const filtered = useMemo(
    () => BUSINESSES.filter((b) => b.name.toLowerCase().includes(q.toLowerCase())),
    [q]
  );

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <img
          src={BUSINESS_IMAGES[0]}
          alt="AOD Group"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 grain" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E]">AOD Group of Companies</p>
          <h1 className="font-display uppercase text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mt-4">
            <span style={{ color: '#C8102E' }}>BUSINESSES</span>
          </h1>
          <p className="font-serif-italic text-xl md:text-2xl mt-6 max-w-2xl text-white/80">
            One ecosystem. {BUSINESSES.length} verticals. Built for the long term.
          </p>
        </div>
      </section>

      {/* Featured strip */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E] mb-3">Overview</p>
            <h2
              className="font-display uppercase text-5xl md:text-6xl font-bold leading-[0.95] text-black"
              style={{ letterSpacing: '-0.01em' }}
            >
              A diversified
              <br />
              ecosystem under
              <br />
              <span style={{ color: '#C8102E' }}>one vision.</span>
            </h2>
            <div className="divider-red mt-8" />
            <p className="mt-6 text-lg text-neutral-700 leading-relaxed max-w-xl">
              From premium real estate and luxury hospitality to food, technology and global
              investments — AOD Group operates across {BUSINESSES.length} carefully built verticals,
              each driven by disciplined leadership and people-first values.
            </p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-3">
            {BUSINESS_IMAGES.slice(0, 6).map((src, i) => (
              <div key={i} className={`img-zoom overflow-hidden ${i === 0 ? 'col-span-2 row-span-2' : ''}`}>
                <img src={src} alt={`Vertical ${i + 1}`} className="w-full h-full object-cover aspect-[4/3]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All verticals */}
      <section className="bg-neutral-100 py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E] mb-3">All Verticals</p>
              <h2 className="font-display uppercase text-4xl md:text-5xl font-bold leading-[0.95] text-black">
                Explore the
                <br />
                <span style={{ color: '#C8102E' }}>AOD ecosystem.</span>
              </h2>
            </div>
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search verticals..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-neutral-300 focus:border-[#C8102E] focus:outline-none transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-300">
            {filtered.map((b, i) => (
              <div
                key={b.name}
                className="bg-white p-6 md:p-7 group hover:bg-black hover:text-white transition-colors cursor-default"
              >
                <div className="flex items-start justify-between">
                  <p
                    className="font-display text-sm text-[#C8102E]"
                    style={{ letterSpacing: '0.1em' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-300 group-hover:text-[#C8102E] transition-colors"
                  />
                </div>
                <h3 className="font-display uppercase text-xl md:text-2xl font-bold mt-4 leading-tight">
                  {b.name}
                </h3>
                <p className="mt-3 text-sm text-neutral-600 group-hover:text-white/70 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            ))}
            {filtered.length === 0 && (
              <div className="bg-white p-10 text-center col-span-full text-neutral-500">
                No verticals match “{q}”
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Businesses;
