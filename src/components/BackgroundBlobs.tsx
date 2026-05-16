import { motion } from 'motion/react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-brand-bg">
      {/* Top-left blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.4, 
          scale: 1,
          x: [0, 40, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] md:w-[50%] h-[60%] rounded-full bg-brand-blue/30 blur-[60px] sm:blur-[80px] md:blur-[100px] lg:blur-[120px]"
      />
      
      {/* Bottom-right blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.35, 
          scale: 1,
          x: [0, -30, 40, 0],
          y: [0, 50, -20, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear",
          delay: 2
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70%] md:w-[60%] h-[70%] rounded-full bg-brand-lavender/30 blur-[70px] sm:blur-[90px] md:blur-[120px] lg:blur-[140px]"
      />

      {/* Top-right blob */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.3, 
          scale: 1,
          x: [0, 50, -50, 0],
          y: [0, 30, -40, 0],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity,
          ease: "linear",
          delay: 5
        }}
        className="absolute top-[15%] right-[5%] w-[40%] md:w-[30%] h-[40%] rounded-full bg-brand-peach/30 blur-[50px] sm:blur-[70px] md:blur-[90px] lg:blur-[100px]"
      />
    </div>
  );
}