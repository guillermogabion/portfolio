import React from 'react';
import Header from './components/Header';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import CustomCursor from './components/ClickRippleEffect';
import './styles/global.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 scroll-smooth">
      <CustomCursor />
      <Header />
        <main className="space-y-24">
          <div id="home"><HomeSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="projects"><ProjectsSection /></div>
          <div id="contact"><ContactSection /></div>
        </main>
    </div>
  );
}

export default App;