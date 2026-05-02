import { User, Linkedin, Award } from 'lucide-react';
import FadeInSection from './FadeInSection';

const team = [
  {
    name: 'Kaka Dimas Soehendra Putra',
    role: 'Ketua Peneliti / Lead Innovator',
    focus: 'Blockchain Architecture & Smart Contract Design',
    awards: ['AECIVEST 2026 Finalist'],
  },
  {
    name: 'Ahmad Taufik Hayaza',
    role: 'Co-Researcher / System Architect',
    focus: 'DSI Protocol & ESG-LCI Integration',
    awards: ['AECIVEST 2026 Finalist'],
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 relative z-10 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-6">
        <FadeInSection>
          <div className="text-center mb-16">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-[0.3em] mb-3">Inovator</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Tim Peneliti</h2>
            <p className="text-emerald-400 text-sm font-bold uppercase tracking-widest">
              Barisan Pria Gamon · AECIVEST 2026
            </p>
          </div>
        </FadeInSection>

        <div className="flex flex-col sm:flex-row justify-center gap-8 lg:gap-20">
          {team.map((m, idx) => (
            <FadeInSection key={idx} delay={idx * 200}>
              <div className="flex flex-col items-center text-center group max-w-xs mx-auto">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 rounded-full bg-emerald-500/20 blur-xl group-hover:bg-emerald-500/40 transition-all" />
                  <div className="relative w-36 h-36 rounded-full border-2 border-slate-700 group-hover:border-emerald-500/60 transition-all duration-300 p-1 bg-gradient-to-b from-[#111827] to-[#060B11]">
                    <div className="w-full h-full rounded-full bg-[#0B111A] flex items-center justify-center overflow-hidden relative">
                      <User className="w-16 h-16 text-slate-600 group-hover:text-emerald-400 transition-colors relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  {/* Badge */}
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 border-2 border-[#030712] flex items-center justify-center">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-lg font-black text-white mb-1 group-hover:text-emerald-300 transition-colors">{m.name}</h3>
                <p className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">{m.role}</p>
                <p className="text-slate-500 text-sm mb-4">{m.focus}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {m.awards.map(a => (
                    <span key={a} className="px-3 py-1 text-[10px] font-bold rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 uppercase tracking-wider">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </FadeInSection>
          ))}
        </div>
      </div>
    </section>
  );
}
