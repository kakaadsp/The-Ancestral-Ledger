import { Terminal, Lock, Database, X } from 'lucide-react';

const STEPS = [
  { label: 'Verifying WIPO ST.26 signature on-chain...', detail: 'Hash: 0x8f7a3d1c...3c9b2a' },
  { label: 'Executing ABS (Access & Benefit-Sharing)...', detail: null },
  { label: 'Minting ESG Carbon Certificate (LCI Data)... OK', detail: null },
];

export default function Modal({ strain, step, onSign, onClose }) {
  if (!strain) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-[#030712]/90 backdrop-blur-xl" onClick={onClose} />
      <div className="relative bg-gradient-to-b from-[#0B111A] to-[#060B11] border border-emerald-500/40 rounded-2xl w-full max-w-lg shadow-[0_0_60px_rgba(16,185,129,0.2)] overflow-hidden">
        {/* Header */}
        <div className="bg-[#111827] px-6 py-4 flex justify-between items-center border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <span className="text-slate-200 font-mono text-sm tracking-wider">EXEC_SMART_CONTRACT</span>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-red-400 transition-colors"><X className="w-5 h-5" /></button>
        </div>

        <div className="p-6 space-y-5">
          {/* Strain info */}
          <div className="bg-[#030712] p-5 rounded-xl border border-slate-800 flex justify-between items-center relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-400 to-green-600" />
            <div className="pl-2">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Target DSI</p>
              <p className="text-white font-black text-lg font-mono">{strain.id}</p>
              <p className="text-emerald-500/80 text-xs italic">{strain.name}</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-mono">Lisensi</p>
              <p className="text-emerald-400 font-black text-2xl">{strain.price}</p>
              <p className="text-slate-500 text-[10px]">ETH / Year</p>
            </div>
          </div>

          {/* Console */}
          <div className="bg-[#030712]/80 rounded-xl p-5 font-mono text-xs text-slate-400 border border-slate-800/50 min-h-[170px] flex flex-col justify-center space-y-4">
            {STEPS.map((s, i) => (
              <div key={i} className={`flex items-start gap-3 transition-all duration-500 ${step > i ? 'opacity-100' : 'opacity-25'}`}>
                <span className={`mt-0.5 ${step > i + 1 ? 'text-emerald-400' : 'text-emerald-600'}`}>
                  {step > i + 1 ? '✔' : '>'}
                </span>
                <div className="flex-1">
                  <p className={step > i ? 'text-slate-200' : 'text-slate-600'}>{s.label}</p>
                  {s.detail && step > i + 1 && (
                    <p className="text-slate-600 break-all text-[10px] mt-1">{s.detail}</p>
                  )}
                  {i === 1 && step >= 2 && (
                    <div className="mt-2 text-emerald-400 bg-emerald-950/30 p-2.5 rounded border border-emerald-900/50 space-y-1">
                      <p><span className="text-slate-500">[Tx]</span> 15% → BRIN_Treasury <span className="text-slate-500">(Negara)</span></p>
                      <p><span className="text-slate-500">[Tx]</span> 85% → {strain.provider?.split(' ')[0]}_Wallet <span className="text-slate-500">(Lokal)</span></p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          {step === 0 && (
            <button onClick={onSign}
              className="w-full py-4 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-green-400 text-white font-black rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.4)] border border-emerald-400/50 flex items-center justify-center gap-2 transition-all">
              <Lock className="w-4 h-4" /> Sign Contract & Execute
            </button>
          )}
          {step > 0 && step < 3 && (
            <button disabled className="w-full py-4 bg-slate-800 text-slate-500 font-black font-mono rounded-xl cursor-not-allowed flex items-center justify-center gap-3">
              <div className="w-4 h-4 border-2 border-slate-500 border-t-emerald-400 rounded-full animate-spin" />
              Processing Block...
            </button>
          )}
          {step >= 3 && (
            <button onClick={onClose}
              className="w-full py-4 bg-[#111827] border border-emerald-500 text-emerald-400 hover:bg-emerald-950 hover:text-white font-black rounded-xl transition-all shadow-[0_0_15px_rgba(16,185,129,0.2)] flex items-center justify-center gap-2">
              <Database className="w-4 h-4" /> Access Genomic Sequence ✓
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
