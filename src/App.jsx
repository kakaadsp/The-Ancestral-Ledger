import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Architecture from './components/Architecture';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Stakeholders from './components/Stakeholders';
import Team from './components/Team';
import Footer from './components/Footer';
import Modal from './components/Modal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedStrain, setSelectedStrain] = useState(null);
  const [step, setStep] = useState(0);

  const handlePurchase = (strain) => {
    setSelectedStrain(strain);
    setStep(0);
    setModalOpen(true);
  };

  const handleSign = () => {
    setStep(1);
    setTimeout(() => setStep(2), 1600);
    setTimeout(() => setStep(3), 3400);
  };

  const handleClose = () => {
    setModalOpen(false);
    setSelectedStrain(null);
    setStep(0);
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-300 overflow-x-hidden relative">
      {/* Global background dots */}
      <div
        className="fixed inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(16,185,129,0.07) 1px, transparent 1px)`,
          backgroundSize: '28px 28px',
        }}
      />
      {/* Global glow orbs */}
      <div className="fixed top-[-20%] left-[-10%] w-[55%] h-[55%] rounded-full bg-emerald-900/15 blur-[180px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-green-800/10 blur-[180px] pointer-events-none z-0" />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Architecture />
        <Features />
        <Dashboard onPurchase={handlePurchase} />
        <Stakeholders />
        <Team />
        <Footer />
      </div>

      {modalOpen && (
        <Modal
          strain={selectedStrain}
          step={step}
          onSign={handleSign}
          onClose={handleClose}
        />
      )}
    </div>
  );
}
