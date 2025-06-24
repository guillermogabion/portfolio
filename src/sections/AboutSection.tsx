import React from 'react';
import { motion } from 'framer-motion';

function AboutSection() {
  const experiences = [
    {
      title: 'Mid-Level Fullstack Web Developer',
      company: 'Sven Group',
      period: 'May 2025 – Present',
      location: '',
    },
    {
      title: 'Mid‑Level Web Application Software Engineer',
      company: 'Actimai Philippines Inc.',
      period: 'Oct 2023 – Apr 2025',
      location: 'One San Miguel Avenue, 41st Floor, Ortigas Center, Pasig City',
    },
    {
      title: 'Web Application Engineer',
      company: 'Actimai Philippines Inc.',
      period: 'Jan 2023 – Sept 2023',
      location: 'One San Miguel Avenue, 41st Floor, Ortigas Center, Pasig City',
    },
    {
      title: 'Fullstack Web Developer',
      company: 'Qonvex Technology Inc.',
      period: 'May 2021 – Dec 2022',
      location: 'Calbayog City, Philippines',
    },
  ];

  return (
    <section id="about" className="scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4 py-16">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-semibold mb-8 text-center">About Me</h2>
        <p className="text-gray-700 mb-12 text-center">
          I have a background in computer science and several years of experience in web development. My stack includes React, Node.js, TypeScript, and Laravel. I love solving complex problems and delivering scalable solutions.
        </p>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-500 z-0" />

          <div className="space-y-16 relative z-10">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              const animationDirection = isLeft ? { x: -50, opacity: 0 } : { x: 50, opacity: 0 };
              return (
                <motion.div
                  key={idx}
                  className="flex items-start w-full relative"
                  initial={animationDirection}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                  {isLeft && (
                    <div className="w-1/2 pr-8 text-right">
                      <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                        {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                      </div>
                    </div>
                  )}

                  {/* Dot aligned with the center timeline */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    />
                  </div>

                  {!isLeft && (
                    <div className="w-1/2 pl-8 text-left ml-auto">
                      <div className="bg-white p-6 rounded-lg shadow-lg inline-block">
                        <h3 className="text-xl font-semibold">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.period}</p>
                        {exp.location && <p className="text-gray-500 text-sm">{exp.location}</p>}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
