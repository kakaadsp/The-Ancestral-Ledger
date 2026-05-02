import { useState } from 'react';
import { Dna, Search, Filter, ShieldCheck, Activity, LeafyGreen, ChevronRight } from 'lucide-react';
import FadeInSection from './FadeInSection';

const DSI_DATA = [
  { id: 'RO-001', name: 'Rhizopus oligosporus', origin: 'Jawa Timur', provider: 'Koperasi Pengrajin Tempe Sidoarjo', esg: 98, carbon: '0.12 kg CO2e', status: 'Verified Prior Art', price: '15', eth: 'ETH/Yr', region: 'Jawa' },
  { id: 'LP-042', name: 'Lactobacillus plantarum', origin: 'Sumatera Barat', provider: 'Komunitas Fermentasi Dadiah', esg: 95, carbon: '0.08 kg CO2e', status: 'Verified Prior Art', price: '12', eth: 'ETH/Yr', region: 'Sumatera' },
  { id: 'SC-112', name: 'Saccharomyces cerevisiae', origin: 'Bali', provider: 'Petani Brem Tradisional', esg: 92, carbon: '0.15 kg CO2e', status: 'Pending WIPO', price: '10', eth: 'ETH/Yr', region: 'Bali' },
  { id: 'AB-033', name: 'Aspergillus brasiliensis', origin: 'Kalimantan Barat', provider: 'UMKM Tempe Pontianak', esg: 89, carbon: '0.18 kg CO2e', status: 'Verified Prior Art', price: '9', eth: 'ETH/Yr', region: 'Kalimantan' },
  { id: 'BL-007', name: 'Bacillus licheniformis', origin: 'Sulawesi Selatan', provider: 'Kelompok Tani Makassar', esg: 94, carbon: '0.10 kg CO2e', status: 'Pending WIPO', price: '11', eth: 'ETH/Yr', region: 'Sulawesi' },
];

export default function Dashboard({ onPurchase }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Verified Prior Art', 'Pending WIPO'];

  const filtered = DSI_DATA.filter(s => {
    const matchQ = s.name.toLowerCase().includes(query.toLowerCase()) || s.id.toLowerCase().includes(query.toLowerCase()) || s.origin.toLowerCase().includes(query.toLowerCase());
    const matchF = filter === 'All' || s.status === filter;
    return matchQ && matchF;
  });

  return (
    <section id="dashboard" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-12">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Marketplace</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">B2B DSI Marketplace</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Data terenkripsi dan tersertifikasi INABIG BRIN. Akuisisi lisensi eksklusif via Smart Contract.</p>
          </div>
        </FadeInSection>

        <FadeInSection delay={100}>
          <div className="bg-[#111827]/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden">
            {/* Top glow line */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-lg font-black text-white">Live Network</span>
                <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {filtered.length} Strain Aktif
                </span>
              </div>

              {/* Search + Filter */}
              <div className="flex items-center gap-3 w-full lg:w-auto">
                <div className="relative flex-1 lg:flex-none">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                  <input
                    type="text" value={query} onChange={e => setQuery(e.target.value)}
                    placeholder="Cari ID, nama, asal..."
                    className="w-full lg:w-64 bg-[#060B11]/60 border border-slate-700 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/30 transition-all"
                  />
                </div>
                <div className="flex gap-2">
                  {filters.map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${filter === f ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-400' : 'bg-[#060B11]/50 border border-slate-700 text-slate-500 hover:text-emerald-400 hover:border-emerald-500/30'}`}>
                      {f === 'All' ? <Filter className="w-4 h-4" /> : f.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-800 bg-[#060B11]/30">
              <table className="w-full text-left min-w-[700px]">
                <thead>
                  <tr className="bg-[#0B111A] text-slate-500 text-[11px] uppercase tracking-wider border-b border-slate-800">
                    <th className="p-4 font-semibold">Profil Genomik</th>
                    <th className="p-4 font-semibold">Provenance</th>
                    <th className="p-4 font-semibold">ESG Score</th>
                    <th className="p-4 font-semibold">Status WIPO</th>
                    <th className="p-4 font-semibold text-right">Aksi Lisensi</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-slate-600 text-sm">Tidak ada strain ditemukan.</td></tr>
                  ) : filtered.map((s, i) => (
                    <tr key={i} className="border-b border-slate-800/40 hover:bg-emerald-900/10 transition-all duration-200 group">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#111827] to-[#0B111A] border border-slate-700 flex items-center justify-center group-hover:border-emerald-500/40 group-hover:shadow-[0_0_12px_rgba(16,185,129,0.2)] transition-all">
                            <Dna className="w-5 h-5 text-emerald-500/70 group-hover:text-emerald-400 transition-colors" />
                          </div>
                          <div>
                            <p className="text-white font-black text-sm font-mono">{s.id}</p>
                            <p className="text-xs text-slate-400 italic">{s.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <p className="text-slate-200 text-sm font-semibold">{s.origin}</p>
                        <p className="text-xs text-emerald-500/80 mt-0.5">{s.provider}</p>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2 mb-1.5">
                          <LeafyGreen className="w-3.5 h-3.5 text-green-400" />
                          <span className="text-white text-xs font-bold">{s.esg}/100</span>
                          <span className="text-slate-600 text-xs">{s.carbon}</span>
                        </div>
                        <div className="w-28 bg-slate-800 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-gradient-to-r from-emerald-600 to-green-400 h-full rounded-full transition-all" style={{ width: `${s.esg}%` }} />
                        </div>
                      </td>
                      <td className="p-4">
                        <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold border ${s.status === 'Verified Prior Art' ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400' : 'bg-amber-500/10 border-amber-500/30 text-amber-400'}`}>
                          {s.status === 'Verified Prior Art' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Activity className="w-3.5 h-3.5" />}
                          {s.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button onClick={() => onPurchase(s)}
                          className="inline-flex items-center gap-1.5 px-5 py-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white rounded-lg text-xs font-black transition-all shadow-[0_0_10px_rgba(16,185,129,0.2)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] border border-emerald-400/50">
                          {s.price} {s.eth} <ChevronRight className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}
