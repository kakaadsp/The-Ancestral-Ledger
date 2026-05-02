import { useEffect, useState } from 'react';
import { Database, FileCheck, Cpu, ArrowDown } from 'lucide-react';
import FadeInSection from './FadeInSection';

function StatCard({ value, label, suffix = '' }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    const step = Math.ceil(end / 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 30);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-black text-white">
        {count.toLocaleString()}<span className="text-emerald-400">{suffix}</span>
      </span>
      <span className="text-slate-500 text-xs mt-1 uppercase tracking-wider font-medium">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex flex-col justify-center items-center text-center z-10 hero-gradient">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-900/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-green-800/10 blur-[120px] pointer-events-none" />

      {/* Badge */}
      <FadeInSection>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-950/40 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(16,185,129,0.15)] animate-float">
          <Cpu className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-semibold text-emerald-300 tracking-widest uppercase">WIPO ST.26 Compliant · Blockchain B2B Infrastructure</span>
        </div>
      </FadeInSection>

      {/* Headline */}
      <FadeInSection delay={100}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] max-w-5xl mb-6 tracking-tight">
          Kedaulatan<br />
          Biologis<span className="text-gradient">.</span>{' '}
          <span className="text-gradient">Digital.</span>
        </h1>
      </FadeInSection>

      {/* Subheading */}
      <FadeInSection delay={200}>
        <p className="text-base md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          Infrastruktur Blockchain untuk melindungi{' '}
          <span className="text-white font-semibold">Prior Art mikrobiota Nusantara</span> dan mengeksekusi royalti{' '}
          <span className="text-emerald-400 font-bold">Access & Benefit-Sharing (ABS)</span> otomatis via Smart Contract.
        </p>
      </FadeInSection>

      {/* CTA Buttons */}
      <FadeInSection delay={300}>
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <a href="#dashboard"
            onClick={e => { e.preventDefault(); document.querySelector('#dashboard')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary px-8 py-4 rounded-xl text-white font-bold text-base flex items-center gap-3 relative z-10 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
            <Database className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Eksplorasi DSI Marketplace</span>
          </a>
          <a href="#architecture"
            onClick={e => { e.preventDefault(); document.querySelector('#architecture')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 rounded-xl bg-[#0B111A]/80 backdrop-blur-md border border-emerald-500/30 text-emerald-400 font-bold text-base hover:bg-emerald-950/50 hover:border-emerald-400 transition-all duration-300 flex items-center gap-2">
            <FileCheck className="w-5 h-5" /> Lihat Arsitektur
          </a>
        </div>
      </FadeInSection>

      {/* Stats */}
      <FadeInSection delay={400}>
        <div className="grid grid-cols-3 gap-8 md:gap-16 px-8 py-6 rounded-2xl border border-slate-800/60 bg-[#0B111A]/40 backdrop-blur-md">
          <StatCard value="847" label="DSI Terdaftar" suffix="+" />
          <StatCard value="23" label="Negara Mitra" />
          <StatCard value="99" label="Prior Art Verified" suffix="%" />
        </div>
      </FadeInSection>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
