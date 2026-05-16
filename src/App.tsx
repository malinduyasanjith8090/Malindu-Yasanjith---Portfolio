import BackgroundBlobs from './components/BackgroundBlobs';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceEducationSection from './components/ExperienceEducationSection';
import ContactSection from './components/ContactSection';

export default function App() {
  return (
    <main className="w-full h-screen overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth relative">
      <BackgroundBlobs />
      <FloatingNav />
      
      {/* Sections acts as slides in 16:9 ratio containers.
          On normal view they are full viewport height and snap. 
          On Print they are exactly 16:9 pages. */}
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceEducationSection />
      <ContactSection />
      
    </main>
  );
}
