import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-5xl">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700">
          I have a background in computer science and several years of experience in web development. My stack includes React, Node.js, TypeScript, and Laravel. I love solving complex problems and delivering scalable solutions.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;