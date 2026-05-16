import { motion } from 'motion/react';
import { Award, Medal, GraduationCap, ExternalLink } from 'lucide-react';

export default function QualificationsSection() {
  const professionalQualifications = [
    {
      title: "Certificate of Programme in IT Applications",
      issuer: "SLIIT, Colombo 3",
      type: "professional"
    },
    {
      title: "Certificate of Spoken English with Honours",
      issuer: "Institute of Western Music & Speech",
      type: "professional"
    },
    {
      title: "Certificate of Young Learners Tests",
      issuer: "University of Cambridge ESOL Examinations",
      type: "professional"
    },
    {
      title: "Certificate of Achievement",
      issuer: "Lanka English Academy",
      type: "professional"
    },
    {
      title: "Certificate of Spoken English with Merit",
      issuer: "Institute of Western Music & Speech",
      type: "professional"
    }
  ];

  const onlineCourses = [
    {
      title: "Python for Beginners",
      issuer: "University of Moratuva",
      link: "https://publuu.com/flip-book/753096/1669599",
      badgeUrl: null
    },
    {
      title: "Introduction to Data Science",
      issuer: "Cisco Network Academy",
      link: "https://www.credly.com/badges/01d81046-43b8-47e2-afd8-dc895e615447/public_url",
      badgeUrl: null
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Network Academy",
      link: "https://www.credly.com/badges/d9ce8681-8e48-4708-aee3-39e06189d537/public_url",
      badgeUrl: null
    }
  ];

  const QualificationCard = ({ item, isOnline = false, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-4 sm:p-5 rounded-xl sm:rounded-2xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          {isOnline ? (
            <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue">
              <Medal size={16} className="sm:w-5 sm:h-5" />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-brand-lavender/10 flex items-center justify-center text-brand-lavender">
              <Award size={16} className="sm:w-5 sm:h-5" />
            </div>
          )}
        </div>
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-semibold text-slate-800 mb-1 leading-tight">
            {item.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mb-2">{item.issuer}</p>
          {isOnline && item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs text-brand-blue hover:underline"
            >
              View Certificate <ExternalLink size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 snap-start relative z-10">
      <div className="max-w-7xl w-full">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 mb-3 sm:mb-4">
            Certifications & Achievements
          </h2>
          <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto">
            Professional qualifications and online course completions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Professional Qualifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="p-2 sm:p-3 bg-brand-lavender/10 rounded-xl text-brand-lavender">
                <Award size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Professional Qualifications
              </h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {professionalQualifications.map((item, idx) => (
                <QualificationCard 
                  key={idx} 
                  item={item} 
                  isOnline={false}
                  delay={idx * 0.05} 
                />
              ))}
            </div>
          </div>

          {/* Online Course Achievements */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="p-2 sm:p-3 bg-brand-blue/10 rounded-xl text-brand-blue">
                <Medal size={20} className="sm:w-6 sm:h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-slate-900">
                Online Course Achievements
              </h3>
            </motion.div>
            <div className="flex flex-col gap-4">
              {onlineCourses.map((item, idx) => (
                <QualificationCard 
                  key={idx} 
                  item={item} 
                  isOnline={true}
                  delay={idx * 0.05 + 0.1} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}