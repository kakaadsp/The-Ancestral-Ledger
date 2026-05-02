import { Database, Terminal, LeafyGreen, Shield, Zap, BarChart3 } from 'lucide-react';
import FadeInSection from './FadeInSection';

const pillars = [
  {
    icon: Database,
    color: 'emerald',
    title: 'Prior Art & WIPO ST.26',
    desc: 'Mencegah biopiracy dengan mencetak sekuens DNA mikroba menjadi aset digital immutable on-chain. Mengadopsi standar XML WIPO ST.26 untuk kompatibilitas penuh kantor paten internasional.',
    tags: ['Immutable Ledger', 'WIPO Compliant', 'Anti-Biopiracy'],
  },
  {
    icon: Terminal,
    color: 'emerald',
    title: 'Automated Smart Contract',
    desc: 'Komersialisasi tanpa birokrasi. Perjanjian lisensi Digital MTA dan penarikan royalti ABS dieksekusi instan oleh kode—mendistribusikan 85% manfaat langsung ke pengrajin lokal.',
    tags: ['Digital MTA', 'ABS Royalty', 'Zero Intermediary'],
  },
  {
    icon: LeafyGreen,
    color: 'green',
    title: 'ESG & LCI Integration',
    desc: 'Mendigitalisasi Life Cycle Inventory (LCI) proses fermentasi tradisional. Pembeli lisensi mendapat sertifikat jejak karbon rendah terverifikasi untuk mendukung target Net Zero Emission global.',
    tags: ['Carbon Credit', 'LCI Data', 'Net Zero'],
  },
  {
    icon: Shield,
    color: 'emerald',
    title: 'Provenance Tracking',
    desc: 'Setiap data genomik dilengkapi metadata asal yang terenkripsi—dari daerah pengambilan sampel, komunitas lokal, hingga tanggal ekstraksi. Transparansi penuh yang tidak dapat diubah.',
    tags: ['Geo-tagged', 'Community ID', 'Tamper-proof'],
  },
  {
    icon: Zap,
    color: 'emerald',
    title: 'Real-Time Settlement',
    desc: 'Pembayaran royalti dieksekusi otomatis setiap kali lisensi diakses. Tidak perlu menunggu siklus pembayaran bulanan—pengrajin menerima kompensasi dalam hitungan detik.',
    tags: ['Instant Pay', 'On-chain', 'Transparent'],
  },
  {
    icon: BarChart3,
    color: 'green',
    title: 'Analytics Dashboard',
    desc: 'Visualisasi real-time penggunaan data DSI, riwayat transaksi ABS, skor ESG per strain, dan distribusi royalti berbasis peta untuk monitoring ekosistem secara menyeluruh.',
    tags: ['Real-time Data', 'ESG Score', 'Map View'],
  },
];

export default function Features() {
  return (
    <section id="technology" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Infrastruktur</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              Pilar Teknologi Inti
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Enam fondasi teknologi yang membangun ekosistem kedaulatan biologis digital Nusantara.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <FadeInSection key={idx} delay={idx * 80}>
                <div className={`relative rounded-2xl p-7 border border-slate-800 bg-gradient-to-b from-[#111827]/80 to-[#060B11]/80
                  hover:border-${p.color}-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] card-hover h-full flex flex-col group overflow-hidden`}>
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-${p.color}-500/10 blur-[50px] rounded-full group-hover:bg-${p.color}-500/20 transition-colors`} />
                  <div className={`w-12 h-12 rounded-xl bg-${p.color}-950/60 border border-${p.color}-500/20 flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 text-${p.color}-400`} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-3">{p.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-grow mb-5">{p.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className={`text-[11px] font-bold px-2.5 py-1 rounded-lg bg-${p.color}-500/10 border border-${p.color}-500/20 text-${p.color}-400`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
