import { motion } from 'motion/react';
import { Terminal, Code2, PenTool, Database } from 'lucide-react';

export default function AboutSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code2 className="w-5 h-5 text-brand-blue" />,
      skills: ["React", "JavaScript", "HTML/CSS", "Tailwind CSS", "Kotlin"]
    },
    {
      title: "Backend & Systems",
      icon: <Terminal className="w-5 h-5 text-brand-lavender" />,
      skills: ["Java", "Node.js", "C / C++", "Python", "PHP"]
    },
    {
      title: "Tools & Design",
      icon: <PenTool className="w-5 h-5 text-brand-peach" />,
      skills: ["UI/UX Design", "Figma", "MongoDB", "Git", "MS Office"]
    }
  ];

  return (
    <section className="h-screen w-full flex items-center justify-center p-8 md:p-16 lg:p-24 snap-start relative">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
        
        {/* Left Side: Images / Abstract */}
        <div className="lg:col-span-2 relative h-[500px] w-full hidden md:block z-10">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8 }}
            className="absolute top-0 left-0 w-4/5 h-[80%] rounded-[32px] glass-card overflow-hidden"
          >
             <img 
               src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2070&auto=format&fit=crop" 
               alt="Code on screen"
               className="w-full h-full object-cover opacity-60 mix-blend-multiply"
             />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="absolute bottom-0 right-0 w-3/5 h-[60%] rounded-[32px] glass-card overflow-hidden border-white bg-white/80 p-2 shadow-xl"
          >
             <div className="w-full h-full bg-slate-900 rounded-[24px] overflow-hidden flex flex-col p-6 items-start justify-end relative">
                <Database className="w-12 h-12 text-white/20 absolute top-6 right-6" />
                <h3 className="text-white text-xl font-display font-semibold mb-1">BSc. Hons in IT</h3>
                <p className="text-white/60 text-sm">SLIIT • 2022 - Present</p>
             </div>
          </motion.div>
        </div>

        {/* Right Side: Text & Skills */}
        <div className="lg:col-span-3 flex flex-col z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6"
          >
            About Me
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="prose prose-lg text-slate-600 mb-10 leading-relaxed"
          >
            <p>
              I am a motivated and detail-oriented undergraduate student with a strong foundation in Programming, Web designing, Computer maintenance, and Team work. 
            </p>
            <p>
              Passionate about improving technical skills to solve real-world challenges and committed to continuing to learn in a fast-paced tech landscape.
            </p>
          </motion.div>

          <div className="space-y-6">
            {skillCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + (idx * 0.1) }}
                className="flex flex-col gap-3"
              >
                <div className="flex items-center gap-2 text-slate-800 font-medium">
                  {category.icon}
                  <h4 className="text-lg">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-1.5 rounded-full bg-white/60 backdrop-blur-sm border border-white/80 shadow-sm text-sm text-slate-600 font-medium hover:bg-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
