import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin } from 'lucide-react';
import { toast } from 'sonner';
import { SITE, SOCIALS } from '../data/mock';

const iconFor = (name) => {
  switch (name) {
    case 'Instagram':
      return <Instagram size={18} />;
    case 'Facebook':
      return <Facebook size={18} />;
    case 'LinkedIn':
      return <Linkedin size={18} />;
    case 'Email':
      return <Mail size={18} />;
    default:
      return null;
  }
};

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in your name, email and message.');
      return;
    }
    setLoading(true);
    // Mock submit — store locally for now (will replace with backend)
    setTimeout(() => {
      const stored = JSON.parse(localStorage.getItem('db_messages') || '[]');
      stored.push({ ...form, at: new Date().toISOString() });
      localStorage.setItem('db_messages', JSON.stringify(stored));
      setLoading(false);
      setForm({ name: '', email: '', subject: '', message: '' });
      toast.success('Message received. Dev’s team will reach out soon.');
    }, 700);
  };

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-black text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative">
          <p className="font-display uppercase tracking-[0.3em] text-xs text-[#C8102E]">Reach Out</p>
          <h1 className="font-display uppercase text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.9] mt-4">
            <span style={{ color: '#C8102E' }}>CONTACT</span>
          </h1>
          <p className="font-serif-italic text-xl md:text-2xl mt-6 max-w-2xl text-white/80">
            For collaborations, speaking, community work or media — start a conversation.
          </p>
        </div>
      </section>

      {/* Form & info */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <h2 className="font-display uppercase text-4xl md:text-5xl font-bold leading-[0.95] text-black">
              Let&apos;s talk.
            </h2>
            <div className="divider-red mt-6" />
            <p className="mt-6 text-neutral-700 leading-relaxed max-w-md">
              Whether it’s a community initiative, a business partnership, or a media inquiry,
              we’d love to hear from you.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 border border-[#C8102E] text-[#C8102E] flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </span>
                <div>
                  <p className="font-display uppercase tracking-widest text-xs text-neutral-500">Email</p>
                  <a href={`mailto:${SITE.email}`} className="text-black hover:text-[#C8102E] transition-colors">
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 border border-[#C8102E] text-[#C8102E] flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </span>
                <div>
                  <p className="font-display uppercase tracking-widest text-xs text-neutral-500">Phone</p>
                  <p className="text-black">{SITE.phone}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="w-11 h-11 border border-[#C8102E] text-[#C8102E] flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </span>
                <div>
                  <p className="font-display uppercase tracking-widest text-xs text-neutral-500">Based In</p>
                  <p className="text-black">{SITE.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10">
              <p className="font-display uppercase tracking-widest text-xs text-neutral-500 mb-4">Follow</p>
              <div className="flex gap-3">
                {SOCIALS.filter((s) => s.name !== 'Email').map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    aria-label={s.name}
                    className="w-11 h-11 border border-neutral-300 hover:border-[#C8102E] hover:text-[#C8102E] flex items-center justify-center transition-colors"
                  >
                    {iconFor(s.name)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="bg-neutral-50 p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="font-display uppercase tracking-widest text-xs text-neutral-500">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className="w-full mt-2 px-4 py-3 bg-white border border-neutral-300 focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="font-display uppercase tracking-widest text-xs text-neutral-500">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full mt-2 px-4 py-3 bg-white border border-neutral-300 focus:border-[#C8102E] focus:outline-none transition-colors"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label className="font-display uppercase tracking-widest text-xs text-neutral-500">
                  Subject
                </label>
                <input
                  type="text"
                  value={form.subject}
                  onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  placeholder="What is this about?"
                  className="w-full mt-2 px-4 py-3 bg-white border border-neutral-300 focus:border-[#C8102E] focus:outline-none transition-colors"
                />
              </div>
              <div className="mt-5">
                <label className="font-display uppercase tracking-widest text-xs text-neutral-500">
                  Message
                </label>
                <textarea
                  rows="6"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Share your message..."
                  className="w-full mt-2 px-4 py-3 bg-white border border-neutral-300 focus:border-[#C8102E] focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="mt-6 inline-flex items-center gap-2 px-7 py-4 bg-[#C8102E] hover:bg-[#a50d24] disabled:opacity-60 disabled:cursor-not-allowed text-white font-display uppercase tracking-widest text-sm transition-colors"
              >
                {loading ? 'Sending...' : 'Send Message'} <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
