import { Building2, Globe2, Users, Leaf } from 'lucide-react';
import FadeInSection from './FadeInSection';

const stakeholders = [
  {
    icon: Building2,
    title: 'Pemerintah & BRIN',
    role: 'Regulator & Penyedia Data',
    desc: 'Bertindak sebagai regulator hukum dan penyedia data hulu melalui fasilitas ekstraksi Next-Generation Sequencing, memastikan kepatuhan terhadap Protokol Nagoya.',
    benefits: ['Pendapatan royalti negara 15%', 'Perlindungan kedaulatan hayati', 'Basis data nasional DSI'],
    color: 'emerald',
  },
  {
    icon: Globe2,
    title: 'Korporasi Global',
    role: 'Lisensi B2B',
    desc: 'Mendapatkan akses legal dan eksklusif ke data genetik untuk R&D Biofarmasi & F&B, sekaligus memenuhi metrik kepatuhan ESG karbon untuk pelaporan keberlanjutan.',
    benefits: ['Akses legal DSI terverifikasi', 'Sertifikat ESG karbon rendah', 'Zero legal risk biopiracy'],
    color: 'blue',
  },
  {
    icon: Users,
    title: 'Pengrajin Lokal / UMKM',
    role: 'Penjaga Biodiversitas',
    desc: 'Aktor sentral penjaga keanekaragaman hayati yang berhak menerima kompensasi royalti finansial langsung tanpa dipotong birokrasi perantara manapun.',
    benefits: ['Royalti 85% langsung', 'Pengakuan hukum internasional', 'Pemberdayaan ekonomi lokal'],
    color: 'amber',
  },
];

const colorMap = {
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', dot: 'bg-emerald-400', glow: 'bg-emerald-500/10' },
  blue:    { bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    text: 'text-blue-400',    dot: 'bg-blue-400',    glow: 'bg-blue-500/10' },
  amber:   { bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   text: 'text-amber-400',   dot: 'bg-amber-400',   glow: 'bg-amber-500/10' },
};

export default function Stakeholders() {
  return (
    <section id="ecosystem" className="py-24 relative z-10 bg-[#060B11] border-y border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Ekosistem</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Model Pentahelix</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Platform kolaboratif yang menguntungkan <span className="text-white font-semibold">semua pihak</span> dalam rantai pasok bioteknologi secara adil dan transparan.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stakeholders.map((s, idx) => {
            const Icon = s.icon;
            const c = colorMap[s.color];
            return (
              <FadeInSection key={idx} delay={idx * 120}>
                <div className={`relative rounded-2xl p-7 border ${c.border} bg-gradient-to-b from-[#111827]/70 to-[#060B11]/70 backdrop-blur-md card-hover group overflow-hidden h-full flex flex-col`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 ${c.glow} blur-[50px] rounded-full opacity-50 group-hover:opacity-100 transition-opacity`} />
                  <div className={`w-14 h-14 rounded-2xl ${c.bg} ${c.border} border flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-7 h-7 ${c.text}`} />
                  </div>
                  <div className="mb-1">
                    <span className={`text-[10px] font-black uppercase tracking-widest ${c.text}`}>{s.role}</span>
                  </div>
                  <h3 className="text-xl font-black text-white mb-3">{s.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-grow">{s.desc}</p>
                  <ul className="space-y-2">
                    {s.benefits.map((b, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className={`w-1.5 h-1.5 rounded-full ${c.dot} flex-shrink-0`} />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeInSection>
            );
          })}
        </div>

        {/* Value Flow */}
        <FadeInSection delay={400}>
          <div className="mt-12 p-6 rounded-2xl border border-slate-800/60 bg-[#0B111A]/40 backdrop-blur-md">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-center">
              <div className="flex items-center gap-2 text-emerald-300 font-bold">
                <Leaf className="w-4 h-4" />Pengrajin Lokal
              </div>
              <div className="hidden md:flex items-center gap-2 text-slate-600">
                <div className="w-12 h-px bg-slate-700" />
                <span className="text-xs text-slate-500">sampel + pengetahuan</span>
                <div className="w-12 h-px bg-slate-700" />
              </div>
              <div className="flex items-center gap-2 text-blue-300 font-bold"><Building2 className="w-4 h-4" />BRIN</div>
              <div className="hidden md:flex items-center gap-2 text-slate-600">
                <div className="w-12 h-px bg-slate-700" />
                <span className="text-xs text-slate-500">DSI on-chain</span>
                <div className="w-12 h-px bg-slate-700" />
              </div>
              <div className="flex items-center gap-2 text-white font-black">🔗 The Ancestral Ledger</div>
              <div className="hidden md:flex items-center gap-2 text-slate-600">
                <div className="w-12 h-px bg-slate-700" />
                <span className="text-xs text-slate-500">lisensi B2B</span>
                <div className="w-12 h-px bg-slate-700" />
              </div>
              <div className="flex items-center gap-2 text-amber-300 font-bold"><Globe2 className="w-4 h-4" />Korporasi Global</div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
