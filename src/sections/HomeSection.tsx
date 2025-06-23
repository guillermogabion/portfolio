import React from 'react';

function HomeSection() {
  return (
    <section id="home" className="scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4">
      <div className="max-w-5xl">
        <h1 className="text-4xl font-bold mb-4">Hi, I'm John Doe</h1>
        <p className="text-lg leading-relaxed">
          I'm a passionate <strong>Fullstack Web Developer</strong> and <strong>Software Engineer</strong> with experience building high-quality web applications using modern technologies. I specialize in both frontend and backend development, ensuring seamless integration and performance.
        </p>
      </div>
    </section>
  );
}

export default HomeSection;