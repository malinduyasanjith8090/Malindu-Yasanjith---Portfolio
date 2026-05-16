import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Clothing Shop",
      description: "A functional e-commerce storefront for a clothing business with dynamic product listing and checkout flow.",
      tags: ["React", "Web", "Vercel"],
      link: "https://denethfashion.vercel.app/",
      gradient: "from-blue-100 to-indigo-100"
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive management system handling reservations, room tracking, and guest details.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/malinduyasanjith8090/Hotel-Management-System.git",
      gradient: "from-emerald-100 to-teal-100"
    },
    {
      title: "Task Manager Mobile App",
      description: "A native Android application for organizing tasks, tracking productivity, and setting reminders.",
      tags: ["Java", "Kotlin", "Android"],
      github: "https://github.com/malinduyasanjith8090/Task-Manager-Mobile-App.git",
      gradient: "from-purple-100 to-fuchsia-100"
    },
    {
      title: "Online Job Portal",
      description: "A web platform connecting employers and job seekers with profile management and job listings.",
      tags: ["HTML/CSS", "JS", "PHP"],
      github: "https://github.com/malinduyasanjith8090/Online-Job-Portal.git",
      gradient: "from-orange-100 to-rose-100"
    },
    {
      title: "Calorie Tracker Mobile App",
      description: "Health-focused mobile app tracking daily intake, calculating calories, and monitoring macros.",
      tags: ["Java", "Kotlin", "Android"],
      github: "https://github.com/malinduyasanjith8090/Calorie-Tracker-Mobile-App.git",
      gradient: "from-cyan-100 to-blue-100"
    },
    {
      title: "Event Management Website",
      description: "Web application for planning and managing corporate and personal events with attendee tracking.",
      tags: ["Java", "HTML/CSS"],
      github: "https://github.com/malinduyasanjith8090/Event-Management-Website.git",
      gradient: "from-pink-100 to-rose-100"
    }
  ];

  return (
    <section className="h-screen w-full flex flex-col items-center justify-center p-8 md:p-16 lg:p-24 snap-start relative z-10">
      <div className="max-w-7xl w-full flex flex-col gap-10">
        
        <div className="flex flex-col items-center text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-500 max-w-2xl"
          >
            A selection of my recent developmental work, from full-stack web applications to native mobile experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group glass-card rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Abstract Image Area */}
              <div className={`h-36 w-full relative overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="bg-white/80 text-slate-900 rounded-full p-3 shadow-md hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  ) : (
                    <a href={project.github} target="_blank" rel="noreferrer" className="bg-white/80 text-slate-900 rounded-full p-3 shadow-md hover:scale-110 transition-transform">
                      <Github size={20} />
                    </a>
                  )}
                </div>
                {/* Abstract shape */}
                <div className="absolute w-24 h-24 rounded-full bg-white/40 blur-xl -bottom-4 -right-4" />
                <div className="absolute w-16 h-16 rounded-full bg-black/5 blur-xl top-4 left-4" />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-display font-semibold text-slate-800 mb-2">{project.title}</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-slate-100/80 text-slate-600 text-xs font-semibold rounded-lg">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
