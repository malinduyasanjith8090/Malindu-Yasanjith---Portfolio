import { motion } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center px-5 py-16 sm:px-8 sm:py-20 md:px-12 md:py-24 lg:p-16 xl:p-24 snap-start relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Content */}
        <div className="flex flex-col items-start z-10 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block px-3 sm:px-4 py-1 rounded-full glass mb-4 sm:mb-6 shadow-sm mx-auto sm:mx-0"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide text-brand-blue uppercase">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.1] mb-4 sm:mb-6"
          >
            Malindu<br />Yasanjith
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl sm:text-2xl md:text-3xl text-slate-600 font-display mb-4 sm:mb-6"
          >
            Frontend Developer & <span className="text-brand-lavender font-medium">UI Explorer</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-base sm:text-lg text-slate-500 max-w-lg mb-6 sm:mb-10 leading-relaxed mx-auto sm:mx-0"
          >
            A motivated detail-oriented SLIIT undergraduate creating smooth user experiences and building modern web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-4 print:hidden w-full"
          >
            <button 
              onClick={scrollToProjects}
              className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all shadow-lg shadow-brand-blue/20 text-sm sm:text-base"
            >
              View Projects <ArrowRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>
            <button 
              onClick={scrollToContact}
              className="flex items-center gap-2 bg-white/50 hover:bg-white text-slate-900 px-5 sm:px-6 py-2.5 sm:py-3 rounded-2xl transition-all shadow-sm border border-slate-200 backdrop-blur-md text-sm sm:text-base"
            >
              <Mail size={16} className="sm:w-[18px] sm:h-[18px]" /> Contact Me
            </button>
          </motion.div>
        </div>

        {/* Right Side: Image Card with Badge - hidden on mobile, visible from lg up */}
        <div className="relative h-[350px] sm:h-[400px] w-full hidden lg:flex items-center justify-center z-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative w-[300px] md:w-[340px] h-[420px] md:h-[460px] rounded-[40px] glass-card overflow-visible p-2"
          >
            <div className="relative w-full h-full rounded-[32px] overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/D5603AQES3LeckCZRSw/profile-displayphoto-crop_800_800/B56Zi4dafXG4AI-/0/1755441394121?e=1780531200&v=beta&t=Nr-RHzqVXvvoR1-XFpnZnhMq1mo9bqZhT_EtUNmURIo" 
                alt="Malindu Yasanjith"
                className="w-full h-full object-cover rounded-[32px]"
              />
              
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-3 right-3 glass px-3 py-1.5 rounded-xl shadow-xl flex items-center gap-1.5 z-20 backdrop-blur-md bg-white/80 border border-white/30"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-xs font-medium text-slate-800 whitespace-nowrap">Available for work</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}