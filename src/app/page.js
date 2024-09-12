import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false; // Disable the auto-adding of CSS


import Navbar from '../components/Navbar';  
import Footer, { CustomeFooter } from '../components/Footer';
import About from '@/components/About';
import Experiences from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import StudyJourney from '@/components/StudentJourney';
import Projects from '@/components/Project';
import SocialMedia from '@/components/SocialMedia';

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <About />
        <StudyJourney />
        <Experiences /> 
        <Skills />
        <Projects />
        <SocialMedia />
        <Contact />
      </main>
    </div>
  );
}
