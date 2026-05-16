import { Printer } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingNav() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <motion.div 
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-6 print:hidden pointer-events-none"
    >
      <div className="max-w-7xl w-full flex justify-between items-center pointer-events-auto">
        <div className="font-display font-bold tracking-tight text-xl text-slate-800 bg-white/50 backdrop-blur-md px-4 py-2 rounded-2xl shadow-sm border border-white/50">
          MY<span className="text-brand-blue">.</span>
        </div>
        
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-white/60 hover:bg-white backdrop-blur-md text-slate-800 px-5 py-2.5 rounded-2xl transition-all shadow-sm border border-white/50 text-sm font-medium hover:shadow-md"
        >
          <Printer size={16} /> Save as PDF
        </button>
      </div>
    </motion.div>
  );
}
