import { motion } from 'motion/react';

export default function BackgroundBlobs() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-brand-bg">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.6, 
          scale: 1,
          x: [0, 40, -20, 0],
          y: [0, -40, 20, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
        className="absolute top-[-10%] left-[-10%] w-[50%] h-[60%] rounded-full bg-brand-blue/30 blur-[120px]"
      />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.5, 
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
        className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[70%] rounded-full bg-brand-lavender/30 blur-[140px]"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 0.4, 
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
        className="absolute top-[20%] right-[10%] w-[30%] h-[40%] rounded-full bg-brand-peach/30 blur-[100px]"
      />
    </div>
  );
}
