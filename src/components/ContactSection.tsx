import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="h-screen w-full flex items-center justify-center p-8 md:p-16 lg:p-24 snap-start relative z-10">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-brand-peach/30 w-max mb-6"
          >
            <span className="text-sm font-medium tracking-wide text-rose-500 uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-6"
          >
            Let's create something <span className="text-brand-blue">remarkable</span> together.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-10 leading-relaxed max-w-md"
          >
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          <div className="flex flex-col gap-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Email Me At</p>
                <a href="mailto:yasanjithmalindu@gmail.com" className="text-lg font-medium text-slate-800">yasanjithmalindu@gmail.com</a>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-lavender group-hover:scale-110 group-hover:bg-brand-lavender group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Call Me At</p>
                <p className="text-lg font-medium text-slate-800">0757196218</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-peach group-hover:scale-110 group-hover:bg-brand-peach group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-sm text-slate-400 font-medium">Location</p>
                <p className="text-lg font-medium text-slate-800">173/1/C Aramaya Road, Makola</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-10 print:hidden"
          >
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue hover:-translate-y-1 transition-all">
              <Github size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue hover:-translate-y-1 transition-all">
              <Linkedin size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-8 md:p-10 rounded-[32px] print:hidden"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 px-1">Your Name</label>
              <input 
                type="text" 
                placeholder="John Doe" 
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium placeholder:text-slate-400"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 px-1">Email Address</label>
              <input 
                type="email" 
                placeholder="john@example.com" 
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium placeholder:text-slate-400"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-slate-600 px-1">Message</label>
              <textarea 
                placeholder="Tell me about your project..." 
                rows={4}
                className="w-full px-5 py-4 rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium resize-none placeholder:text-slate-400"
              ></textarea>
            </div>

            <button className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-4 rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-blue/10">
              Send Message <Send size={18} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
