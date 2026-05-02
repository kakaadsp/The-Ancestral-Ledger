import { Leaf, Github, Twitter, Mail } from 'lucide-react';

const links = [
  { href: '#about', label: 'Tentang' },
  { href: '#architecture', label: 'Arsitektur' },
  { href: '#technology', label: 'Teknologi' },
  { href: '#dashboard', label: 'Marketplace' },
  { href: '#ecosystem', label: 'Ekosistem' },
  { href: '#team', label: 'Tim' },
];

export default function Footer() {
  const handleNav = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-[#030712] pt-16 pb-8 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-emerald-400 to-[#022c22] border border-emerald-400/40 flex items-center justify-center">
                <Leaf className="text-white w-5 h-5" />
              </div>
              <span className="font-black text-white text-lg tracking-wide">
                The Ancestral <span className="text-gradient">Ledger</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Infrastruktur blockchain B2B untuk kedaulatan biologis digital Nusantara. Melindungi, memonetisasi, dan mendistribusikan manfaat keanekaragaman hayati secara adil.
            </p>
            <div className="flex gap-3 mt-5">
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                <Github className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 hover:text-emerald-400 hover:border-emerald-500/40 transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-3">
              {links.map(l => (
                <li key={l.href}>
                  <a href={l.href} onClick={e => handleNav(e, l.href)}
                    className="text-slate-500 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2 group">
                    <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div>
            <h4 className="text-white font-black mb-5 text-sm uppercase tracking-wider">Teknologi</h4>
            <div className="flex flex-wrap gap-2">
              {['Blockchain', 'Smart Contract', 'WIPO ST.26', 'DSI', 'Prior Art', 'ABS Royalty', 'ESG', 'LCI', 'BRIN', 'Nagoya Protocol'].map(t => (
                <span key={t} className="px-2.5 py-1 text-[11px] font-bold rounded-lg bg-emerald-500/10 border border-emerald-500/15 text-emerald-400/80">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-slate-600 text-xs">
            © 2026 The Ancestral Ledger · <span className="text-slate-500">Tim Barisan Pria Gamon</span>
          </p>
          <p className="text-slate-700 text-xs">
            AECIVEST 2026 · Kedaulatan Data Biologis Nusantara
          </p>
        </div>
      </div>
    </footer>
  );
}
