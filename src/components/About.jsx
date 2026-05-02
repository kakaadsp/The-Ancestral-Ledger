import { AlertTriangle, Lightbulb, CheckCircle2 } from 'lucide-react';
import FadeInSection from './FadeInSection';

const problems = [
  'Korporasi multinasional mengakses data genomik tanpa izin',
  'Tidak ada mekanisme Benefit-Sharing yang adil',
  'Pengetahuan tradisional lokal tidak terlindungi hukum',
  'Biopiracy berevolusi menjadi ancaman digital (DSI)',
];

const solutions = [
  'Immutable Prior Art via Blockchain (anti-manipulasi)',
  'Smart Contract ABS otomatis & transparan',
  'Standar WIPO ST.26 untuk paten internasional',
  'Distribusi royalti real-time ke pengrajin lokal',
];

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Latar Belakang</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Mengapa <span className="text-gradient">The Ancestral Ledger</span> Hadir?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
              Menjembatani inovasi bioteknologi global dengan kedaulatan hayati Nusantara melalui teknologi terdesentralisasi.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Problem */}
          <FadeInSection delay={100}>
            <div className="relative rounded-3xl p-8 border border-red-500/20 bg-gradient-to-b from-red-950/20 to-[#0B111A]/60 backdrop-blur-md overflow-hidden group card-hover h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/10 blur-[60px] rounded-full group-hover:bg-red-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-red-950/60 border border-red-500/30 flex items-center justify-center mb-6">
                <AlertTriangle className="w-7 h-7 text-red-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Krisis Biopiracy Digital</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Kekayaan biologis Nusantara terancam. Praktik biopiracy telah berevolusi dari pencurian fisik menjadi ekstraksi{' '}
                <strong className="text-slate-200">Digital Sequence Information (DSI)</strong> — data genomik kapang tempe, dadiah, dan mikroba lokal dieksploitasi tanpa kompensasi.
              </p>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <span className="w-5 h-5 rounded-full bg-red-500/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>

          {/* Solution */}
          <FadeInSection delay={250}>
            <div className="relative rounded-3xl p-8 border border-emerald-500/20 bg-gradient-to-b from-emerald-950/20 to-[#0B111A]/60 backdrop-blur-md overflow-hidden group card-hover h-full">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[60px] rounded-full group-hover:bg-emerald-500/20 transition-colors" />
              <div className="w-14 h-14 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center mb-6">
                <Lightbulb className="w-7 h-7 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Infrastruktur Kedaulatan B2B</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Kami bertindak sebagai <em>governance layer</em>. Blockchain mengamankan data genomik dari BRIN menjadi aset digital B2B yang{' '}
                <strong className="text-slate-200">kebal manipulasi</strong>, mewajibkan korporasi global membayar royalti yang didistribusikan instan.
              </p>
              <ul className="space-y-3">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
}
