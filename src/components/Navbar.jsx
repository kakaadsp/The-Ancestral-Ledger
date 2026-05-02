import { useState, useEffect } from 'react';
import { Leaf, Menu, X } from 'lucide-react';

const links = [
  { href: '#about', label: 'Tentang' },
  { href: '#architecture', label: 'Arsitektur' },
  { href: '#technology', label: 'Teknologi' },
  { href: '#dashboard', label: 'Marketplace' },
  { href: '#team', label: 'Tim' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#030712]/90 backdrop-blur-xl border-b border-emerald-900/40 shadow-[0_4px_30px_rgba(0,0,0,0.5)]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" onClick={e => handleNav(e, '#')} className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-emerald-500 blur-md opacity-40 group-hover:opacity-70 transition-opacity rounded-lg" />
            <div className="relative w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-[#022c22] border border-emerald-400/50 flex items-center justify-center">
              <Leaf className="text-white w-6 h-6" />
            </div>
          </div>
          <span className="text-xl font-extrabold tracking-wider text-white">
            The Ancestral <span className="text-gradient">Ledger</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleNav(e, l.href)}
              className="text-slate-400 hover:text-emerald-400 transition-colors relative group">
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-all duration-300 ${
              walletConnected
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-[0_0_20px_rgba(16,185,129,0.3)]'
                : 'bg-transparent border-emerald-500/40 text-emerald-400 hover:bg-emerald-500 hover:text-white hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]'
            }`}>
            {walletConnected ? '✓ 0x3f...9a2c' : 'Connect Wallet'}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-slate-400 hover:text-emerald-400 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-[#030712]/95 backdrop-blur-xl border-b border-emerald-900/30 ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={e => handleNav(e, l.href)}
              className="text-slate-400 hover:text-emerald-400 transition-colors py-2 border-b border-slate-800/50 text-sm font-medium">
              {l.label}
            </a>
          ))}
          <button onClick={() => setWalletConnected(!walletConnected)}
            className="mt-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-sm">
            {walletConnected ? '✓ Connected' : 'Connect Wallet'}
          </button>
        </div>
      </div>
    </nav>
  );
}
