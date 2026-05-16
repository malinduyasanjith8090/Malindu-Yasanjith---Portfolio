import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Clothing Shop",
      description: "A functional e-commerce storefront for a clothing business with dynamic product listing and checkout flow.",
      tags: ["React", "Web", "Vercel"],
      link: "https://denethfashion.vercel.app/",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&h=400&fit=crop",
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive management system handling reservations, room tracking, and guest details.",
      tags: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/malinduyasanjith8090/Hotel-Management-System.git",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
    },
    {
      title: "Task Manager Mobile App",
      description: "A native Android application for organizing tasks, tracking productivity, and setting reminders.",
      tags: ["Java", "Kotlin", "Android"],
      github: "https://github.com/malinduyasanjith8090/Task-Manager-Mobile-App.git",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    },
    {
      title: "Online Job Portal",
      description: "A web platform connecting employers and job seekers with profile management and job listings.",
      tags: ["HTML/CSS", "JS", "PHP"],
      github: "https://github.com/malinduyasanjith8090/Online-Job-Portal.git",
      image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    },
    {
      title: "Calorie Tracker Mobile App",
      description: "Health-focused mobile app tracking daily intake, calculating calories, and monitoring macros.",
      tags: ["Java", "Kotlin", "Android"],
      github: "https://github.com/malinduyasanjith8090/Calorie-Tracker-Mobile-App.git",
      image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=600&h=400&fit=crop",
    },
    {
      title: "Event Management Website",
      description: "Web application for planning and managing corporate and personal events with attendee tracking.",
      tags: ["Java", "HTML/CSS"],
      github: "https://github.com/malinduyasanjith8090/Event-Management-Website.git",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop",
    }
  ];

  return (
    <section 
      id="projects"
      className="w-full min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 snap-start relative z-10"
    >
      <div className="max-w-7xl w-full flex flex-col gap-8 sm:gap-10">
        
        <div className="flex flex-col items-center text-center px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3 sm:mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-base sm:text-lg text-slate-500 max-w-2xl px-2"
          >
            A selection of my recent developmental work, from full-stack web applications to native mobile experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7 lg:gap-8 px-2 sm:px-0">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group glass-card rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              {/* Image Area - responsive height */}
              <div className="h-32 sm:h-36 md:h-40 w-full relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                
                {/* Hover overlay - visible on tap for mobile */}
                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  {project.link ? (
                    <a href={project.link} target="_blank" rel="noreferrer" className="bg-white/90 text-slate-900 rounded-full p-2.5 sm:p-3 shadow-md hover:scale-110 transition-transform">
                      <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  ) : (
                    <a href={project.github} target="_blank" rel="noreferrer" className="bg-white/90 text-slate-900 rounded-full p-2.5 sm:p-3 shadow-md hover:scale-110 transition-transform">
                      <Github size={18} className="sm:w-5 sm:h-5" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Content with responsive padding */}
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-display font-semibold text-slate-800 mb-1.5 sm:mb-2 line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mb-4 sm:mb-6 flex-grow leading-relaxed line-clamp-3 sm:line-clamp-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="px-2 sm:px-3 py-0.5 sm:py-1 bg-slate-100/80 text-slate-600 text-[10px] sm:text-xs font-semibold rounded-lg">
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