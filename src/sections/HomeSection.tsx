import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import backgroundImage from '../assets/background.png';

function HomeSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax upward

  return (
    <section
      id="home"
      ref={ref}
      className="relative scroll-mt-20 w-full min-h-screen flex flex-col justify-center items-center px-4 overflow-hidden"
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          y,
        }}
      />

      <motion.div
        className="relative z-10 max-w-5xl text-center bg-white bg-opacity-80 backdrop-blur-md rounded-xl p-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4"
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Hi, I'm Guillermo
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl leading-relaxed text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          I'm a passionate <strong className="text-blue-600">Fullstack Web Developer</strong> and{' '}
          <strong className="text-blue-600">Software Engineer</strong> with experience building high-quality web
          applications using modern technologies.
        </motion.p>

        <motion.a
          href="#projects"
          className="inline-block mt-8 px-6 py-3 bg-blue-600 text-white rounded-xl text-lg hover:bg-blue-700 transition-shadow shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Work
        </motion.a>
      </motion.div>
    </section>
  );
}

export default HomeSection;
