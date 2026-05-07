import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { EVENTS, STORY_IMAGES } from '../data/mock';

const Events = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <img
          src={STORY_IMAGES.cultural}
          alt="Cultural events"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 grain" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E]">Community & Culture</p>
          <h1 className="font-display uppercase text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mt-4">
            <span style={{ color: '#C8102E' }}>EVENTS</span>
          </h1>
          <p className="font-serif-italic text-xl md:text-2xl mt-6 max-w-2xl text-white/80">
            Bringing the Gujarati diaspora together — across cities, generations, and causes.
          </p>
        </div>
      </section>

      {/* Events list */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-20">
          {EVENTS.map((e, idx) => (
            <div
              key={e.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch group"
            >
              <div className={`lg:col-span-7 img-zoom ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img src={e.image} alt={e.title} className="w-full h-full max-h-[520px] object-cover" />
              </div>
              <div className={`lg:col-span-5 flex flex-col justify-center ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E]">{e.role}</p>
                <h2
                  className="font-display uppercase text-4xl md:text-5xl font-bold leading-[0.95] mt-3 text-black"
                  style={{ letterSpacing: '-0.01em' }}
                >
                  {e.title}
                </h2>
                <div className="divider-red mt-6" />
                <p className="mt-6 text-lg text-neutral-700 leading-relaxed">{e.text}</p>
                <div className="mt-6 flex flex-wrap gap-6 text-sm text-neutral-600">
                  <span className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#C8102E]" />
                    Year-round
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={16} className="text-[#C8102E]" />
                    USA & Canada
                  </span>
                </div>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 font-display uppercase tracking-widest text-sm border-b-2 border-black pb-1 hover:border-[#C8102E] hover:text-[#C8102E] transition-colors w-fit"
                >
                  Get Involved <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Banner CTA */}
      <section className="bg-[#C8102E] text-white py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <h3 className="font-display uppercase text-3xl md:text-5xl font-bold leading-tight max-w-2xl">
            Host an event with the community.
          </h3>
          <Link
            to="/contact"
            className="px-7 py-4 bg-black hover:bg-white hover:text-black text-white font-display uppercase tracking-widest text-sm transition-colors"
          >
            Reach Out
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Events;
