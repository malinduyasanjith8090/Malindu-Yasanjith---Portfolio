import { motion } from 'motion/react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function ExperienceEducationSection() {
  const experiences = [
    {
      role: "IT Intern (Frontend Developer)",
      company: "Gamage Recruiters (Pvt) Ltd",
      period: "Aug 2025 – Jan 2026",
      desc: "Joined the development team as a Frontend Developer Intern, focusing on creating dynamic interfaces and improving web applications.",
    },
    {
      role: "Intern",
      company: "Sampath Bank PLC",
      period: "Mar 2022 – May 2022",
      desc: "Joined as a school leaver in the Head Office Credit Administration Department, handling documentation and administrative procedures.",
    }
  ];

  const education = [
    {
      degree: "BSc (Hons) in Information Technology",
      institution: "SLIIT",
      period: "2022 - Present",
      desc: "Undergraduate focusing on software engineering, web technologies, and systems development.",
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Wesley College, Colombo 09",
      period: "2021",
      desc: "Commerce Stream. Represented College Senior Band and Art Society.",
    },
    {
      degree: "G.C.E. Ordinary Level",
      institution: "Wesley College, Colombo 09",
      period: "2018",
      desc: "Passed with 1A, 5Cs & 3Ss, including an A pass for English.",
    }
  ];

  const ItemCard = ({ item, isEdu = false, delay = 0 }) => (
    <motion.div 
      initial={{ opacity: 0, x: isEdu ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative pl-5 sm:pl-7 md:pl-8 pb-6 sm:pb-8 group"
    >
      {/* Timeline Line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-slate-200 group-last:bottom-auto group-last:h-full"></div>
      
      {/* Timeline Dot */}
      <div className={`absolute left-[-5px] top-2 w-[9px] sm:w-[10px] md:w-[11px] h-[9px] sm:h-[10px] md:h-[11px] rounded-full ring-2 sm:ring-4 ring-white ${isEdu ? 'bg-brand-lavender' : 'bg-brand-blue'}`}></div>
      
      <div className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <h4 className="text-base sm:text-lg font-display font-semibold text-slate-800 mb-1">
          {isEdu ? item.degree : item.role}
        </h4>
        <div className="flex flex-wrap items-center gap-x-3 sm:gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 mb-2 sm:mb-3 font-medium">
          <span className="flex items-center gap-1"><MapPin size={12} className="sm:w-[14px] sm:h-[14px]"/> {isEdu ? item.institution : item.company}</span>
          <span className="flex items-center gap-1"><Calendar size={12} className="sm:w-[14px] sm:h-[14px]"/> {item.period}</span>
        </div>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 snap-start relative z-10">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
        
        {/* Experience Column */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10"
          >
            <div className="p-2 sm:p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
              <Briefcase size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Experience</h2>
          </motion.div>
          
          <div className="flex flex-col ml-2 sm:ml-3">
            {experiences.map((exp, idx) => (
              <ItemCard key={idx} item={exp} delay={idx * 0.1} />
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6 sm:mb-8 md:mb-10"
          >
            <div className="p-2 sm:p-3 bg-brand-lavender/10 rounded-xl text-brand-lavender">
              <GraduationCap size={20} className="sm:w-6 sm:h-6" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">Education</h2>
          </motion.div>
          
          <div className="flex flex-col ml-2 sm:ml-3">
            {education.map((edu, idx) => (
              <ItemCard key={idx} item={edu} isEdu={true} delay={0.2 + (idx * 0.1)} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}