import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col relative bg-paper text-ink font-sans">
      <Header />
      
      <main className="flex-grow z-10">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </main>

      <Footer />
      <ChatAssistant />
      
      {/* Math/Graph Paper Background */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 math-grid opacity-50" />
      
      {/* Vignette effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,10,10,0.8)_100%)]" />
    </div>
  );
};

export default App;