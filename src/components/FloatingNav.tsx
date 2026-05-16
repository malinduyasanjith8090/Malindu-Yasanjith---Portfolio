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
      className="fixed top-3 sm:top-4 md:top-5 lg:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:px-6 print:hidden pointer-events-none"
    >
      <div className="max-w-7xl w-full flex justify-between items-center pointer-events-auto gap-3 sm:gap-4">
        {/* Logo - responsive size */}
        <div className="font-display font-bold tracking-tight text-base sm:text-lg md:text-xl text-slate-800 bg-white/50 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl shadow-sm border border-white/50 whitespace-nowrap">
          MY<span className="text-brand-blue">.</span>
        </div>
        
        {/* Print button - responsive design */}
        <button 
          onClick={handlePrint}
          className="flex items-center gap-1.5 sm:gap-2 bg-white/60 hover:bg-white backdrop-blur-md text-slate-800 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-xl sm:rounded-2xl transition-all shadow-sm border border-white/50 text-xs sm:text-sm font-medium hover:shadow-md whitespace-nowrap"
        >
          <Printer size={14} className="sm:w-4 sm:h-4" /> 
          <span>Save as PDF</span>
        </button>
      </div>
    </motion.div>
  );
}