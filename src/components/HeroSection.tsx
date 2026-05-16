import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center p-8 md:p-16 lg:p-24 snap-start relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-4 py-1.5 rounded-full glass mb-6 shadow-sm"
          >
            <span className="text-sm font-medium tracking-wide text-brand-blue uppercase bg-clip-text">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-6"
          >
            Malindu<br />Yasanjith
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-slate-600 font-display mb-6"
          >
            Frontend Developer & <span className="text-brand-lavender font-medium">UI Explorer</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-lg text-slate-500 max-w-lg mb-10 leading-relaxed"
          >
            A motivated detail-oriented SLIIT undergraduate creating smooth user experiences and building modern web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 print:hidden"
          >
            <button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-2xl transition-all shadow-lg shadow-brand-blue/20">
              View Projects <ArrowRight size={18} />
            </button>
            <a href="mailto:yasanjithmalindu@gmail.com" className="flex items-center gap-2 bg-white/50 hover:bg-white text-slate-900 px-6 py-3 rounded-2xl transition-all shadow-sm border border-slate-200 backdrop-blur-md">
              <Mail size={18} /> Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Side: Visual abstract */}
        <div className="relative h-[400px] w-full hidden lg:flex items-center justify-center z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative w-[340px] h-[460px] rounded-[40px] glass-card overflow-hidden p-2"
          >
            <div className="w-full h-full rounded-[32px] bg-gradient-to-tr from-brand-blue/20 via-brand-lavender/10 to-brand-peach/30 relative flex items-center justify-center overflow-hidden">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                  className="absolute w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-30" 
                />
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Abstract art"
                  className="w-full h-full object-cover rounded-[32px] opacity-80 mix-blend-overlay"
                />
                
                {/* Floating UI Elements inside */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-6 top-1/4 glass px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 z-20"
                >
                  <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  <span className="text-sm font-medium">Available for work</span>
                </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
