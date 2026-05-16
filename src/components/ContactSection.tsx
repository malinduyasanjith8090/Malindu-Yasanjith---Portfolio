import { motion } from 'motion/react';
import { Send, Phone, MapPin, Mail, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' }); // 'success', 'error', ''

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.message) setStatus({ type: '', message: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: '', message: '' });

    // EmailJS configuration - REPLACE WITH YOUR OWN KEYS
    const serviceID = 'service_xylp3qt';      // e.g., 'service_xxxxx'
    const templateID = 'YOUR_TEMPLATE_ID';    // e.g., 'template_xxxxx'
    const publicKey = 'YOUR_PUBLIC_KEY';      // from EmailJS dashboard

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'yasanjithmalindu@gmail.com'
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' }); // reset form
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      id="contact"
      className="w-full min-h-screen flex items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 snap-start relative z-10"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div className="flex flex-col text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 sm:px-4 py-1 rounded-full bg-brand-peach/30 w-max mb-5 sm:mb-6 mx-auto lg:mx-0"
          >
            <span className="text-xs sm:text-sm font-medium tracking-wide text-rose-500 uppercase">
              Get In Touch
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4 sm:mb-6"
          >
            Let's create something <span className="text-brand-blue">remarkable</span> together.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 mb-8 sm:mb-10 leading-relaxed max-w-md mx-auto lg:mx-0"
          >
            Always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </motion.p>

          <div className="flex flex-col gap-5 sm:gap-6">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="flex items-center gap-3 sm:gap-4 group justify-center lg:justify-start"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-blue group-hover:scale-110 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <Mail size={16} className="sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Email Me At</p>
                <a href="mailto:yasanjithmalindu@gmail.com" className="text-sm sm:text-base md:text-lg font-medium text-slate-800 break-all">
                  yasanjithmalindu@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4 }}
               className="flex items-center gap-3 sm:gap-4 group justify-center lg:justify-start"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-lavender group-hover:scale-110 group-hover:bg-brand-lavender group-hover:text-white transition-all">
                <Phone size={16} className="sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Call Me At</p>
                <p className="text-sm sm:text-base md:text-lg font-medium text-slate-800">0757196218</p>
              </div>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.5 }}
               className="flex items-center gap-3 sm:gap-4 group justify-center lg:justify-start"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-peach group-hover:scale-110 group-hover:bg-brand-peach group-hover:text-white transition-all">
                <MapPin size={16} className="sm:w-5 sm:h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs sm:text-sm text-slate-400 font-medium">Location</p>
                <p className="text-sm sm:text-base md:text-lg font-medium text-slate-800">173/1/C Aramaya Road, Makola</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-8 sm:mt-10 print:hidden justify-center lg:justify-start"
          >
            <a href="https://github.com/malinduyasanjith8090" target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue hover:-translate-y-1 transition-all">
              <Github size={14} className="sm:w-[18px] sm:h-[18px]" />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-slate-600 hover:text-brand-blue hover:-translate-y-1 transition-all">
              <Linkedin size={14} className="sm:w-[18px] sm:h-[18px]" />
            </a>
          </motion.div>
        </div>

        {/* Right: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-[32px] print:hidden"
        >
          <form className="flex flex-col gap-4 sm:gap-5 md:gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-xs sm:text-sm font-medium text-slate-600 px-1">Your Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe" 
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium text-sm sm:text-base placeholder:text-slate-400"
                disabled={isLoading}
              />
            </div>
            
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-xs sm:text-sm font-medium text-slate-600 px-1">Email Address</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium text-sm sm:text-base placeholder:text-slate-400"
                disabled={isLoading}
              />
            </div>

            <div className="flex flex-col gap-1.5 sm:gap-2">
              <label className="text-xs sm:text-sm font-medium text-slate-600 px-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project..." 
                rows={4}
                className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-white/50 border border-white focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all shadow-sm font-medium text-sm sm:text-base resize-none placeholder:text-slate-400"
                disabled={isLoading}
              ></textarea>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`flex items-center gap-2 text-sm p-3 rounded-xl ${
                status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
              }`}>
                {status.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
                <span>{status.message}</span>
              </div>
            )}

            <button 
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 sm:py-4 rounded-xl sm:rounded-2xl flex items-center justify-center gap-2 transition-colors shadow-lg shadow-brand-blue/10 text-sm sm:text-base disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>Sending <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div></>
              ) : (
                <>Send Message <Send size={14} className="sm:w-[18px] sm:h-[18px]" /></>
              )}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}