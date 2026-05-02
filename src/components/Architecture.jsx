import { Leaf, Dna, Cuboid, Handshake, Globe2, Coins } from 'lucide-react';
import FadeInSection from './FadeInSection';

const nodes = [
  { icon: Leaf,      title: 'Biodiversitas',   desc: 'Sampel mikroba dari pengrajin & koperasi lokal Nusantara',   num: '01' },
  { icon: Dna,       title: 'Sekuensing',       desc: 'Ekstraksi Next-Generation Sequencing (NGS) fasilitas BRIN', num: '02' },
  { icon: Cuboid,    title: 'Blockchain',        desc: 'Immutable Prior Art layer — data kebal manipulasi',         num: '03' },
  { icon: Handshake, title: 'Smart Contract',   desc: 'Digital MTA & ABS otomatis tanpa birokrasi perantara',      num: '04' },
  { icon: Globe2,    title: 'Global B2B',        desc: 'Lisensi legal untuk korporasi bioteknologi internasional',  num: '05' },
  { icon: Coins,     title: 'Distribusi',        desc: 'Royalti real-time ke masyarakat adat & pengrajin lokal',   num: '06' },
];

export default function Architecture() {
  return (
    <section id="architecture" className="py-24 relative z-10 border-y border-slate-800/50 bg-gradient-to-b from-transparent via-[#060B11] to-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Cara Kerja</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Arsitektur Ekosistem</h2>
            <p className="text-slate-500 text-sm uppercase tracking-widest font-semibold">Alur Nilai Digital Sequence Information (DSI)</p>
          </div>
        </FadeInSection>

        {/* Flow on desktop */}
        <div className="relative">
          {/* Animated line */}
          <div className="hidden lg:block absolute top-[52px] left-0 right-0 h-[2px] bg-slate-800 z-0 overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-[15%] bg-gradient-to-r from-transparent via-emerald-400 to-transparent animate-data-flow" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
            {nodes.map((node, idx) => {
              const Icon = node.icon;
              return (
                <FadeInSection key={idx} delay={idx * 80}>
                  <div className="flex flex-col items-center text-center group cursor-default">
                    <div className="relative w-24 h-24 mb-5 rounded-2xl bg-[#0B111A]/80 border border-slate-800 flex items-center justify-center
                      group-hover:-translate-y-3 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.35)] group-hover:border-emerald-500/60
                      transition-all duration-500 overflow-hidden">
                      <span className="absolute top-2 left-2 text-[10px] font-black text-slate-700 font-mono">{node.num}</span>
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Icon className="w-9 h-9 text-slate-500 group-hover:text-emerald-400 transition-colors relative z-10" />
                    </div>
                    <div className="bg-[#111827]/50 border border-slate-800/50 px-3 py-2.5 rounded-xl w-full group-hover:border-emerald-500/30 transition-colors">
                      <p className="text-sm font-bold text-white mb-1">{node.title}</p>
                      <p className="text-[11px] text-slate-500 leading-tight">{node.desc}</p>
                    </div>
                  </div>
                </FadeInSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
