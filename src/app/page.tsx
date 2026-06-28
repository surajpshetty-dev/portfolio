import { existsSync } from 'fs';
import { join } from 'path';

// Evaluated once per cold start — cv.pdf presence is fixed per deployment
const CV_EXISTS = existsSync(join(process.cwd(), 'public', 'cv.pdf'));

import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import TechMarquee from '@/components/TechMarquee';
import About from '@/components/About';
import Metrics from '@/components/Metrics';
import Capabilities from '@/components/Capabilities';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero showCv={CV_EXISTS} />
        <TechMarquee />
        <About />
        <Metrics />
        <Capabilities />
        <Projects />
        <Experience />
        <Skills />
        <Education />
        <Contact showCv={CV_EXISTS} />
      </main>
      <Footer />
    </>
  );
}
