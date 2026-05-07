import React from 'react';
import { Award, Trophy, Star } from 'lucide-react';
import { ACHIEVEMENTS, AWARD_IMAGES } from '../data/mock';

const icons = [Trophy, Award, Star, Award];

const Achievements = () => {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <img
          src={AWARD_IMAGES[0]}
          alt="Awards"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
        <div className="absolute inset-0 grain" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E]">Recognition</p>
          <h1 className="font-display uppercase text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mt-4">
            <span style={{ color: '#C8102E' }}>ACHIEVEMENTS</span>
          </h1>
          <p className="font-serif-italic text-xl md:text-2xl mt-6 max-w-2xl text-white/80">
            Honors that reflect a life lived in service of business excellence and community.
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E] mb-3">Awards</p>
              <h2 className="font-display uppercase text-5xl md:text-6xl font-bold leading-[0.95] text-black">
                Milestones &<br />
                <span style={{ color: '#C8102E' }}>Honors.</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
            {ACHIEVEMENTS.map((a, i) => {
              const Icon = icons[i % icons.length];
              return (
                <div
                  key={a.title}
                  className="bg-white p-8 md:p-10 group hover:bg-black hover:text-white transition-colors"
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="w-14 h-14 border-2 border-[#C8102E] flex items-center justify-center text-[#C8102E] group-hover:bg-[#C8102E] group-hover:text-white transition-colors">
                      <Icon size={24} />
                    </div>
                    <p
                      className="font-display text-5xl font-bold text-neutral-200 group-hover:text-[#C8102E]"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {a.year}
                    </p>
                  </div>
                  <h3 className="font-display uppercase text-2xl md:text-3xl font-bold mt-8 leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-widest text-[#C8102E]">{a.org}</p>
                  <p className="mt-5 text-neutral-700 group-hover:text-white/80 leading-relaxed">
                    {a.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section className="pb-20 md:pb-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {AWARD_IMAGES.map((src, i) => (
              <div key={i} className="img-zoom aspect-[4/3] overflow-hidden">
                <img src={src} alt={`Award ${i + 1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Achievements;
