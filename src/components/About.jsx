import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-gray-100 text-black dark:bg-[#111827] dark:text-white py-20 px-6"
    >
      {/* Optional Blurred Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500 blur-[100px] opacity-20 rounded-full z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500 blur-[100px] opacity-20 rounded-full z-0"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-8 border-b-2 border-purple-600 inline-block"
        >
          About Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg leading-8 mb-6"
        >
          I'm <strong className='text-purple-500'>Quratulain</strong>, a passionate full-stack web developer from Pakistan. I love building
          beautiful, functional, and modern web apps using the latest tools like{" "}
          <span className="font-semibold text-purple-500">React</span>,{" "}
          <span className="font-semibold text-green-500">Node.js</span>, and{" "}
          <span className="font-semibold text-cyan-500">Tailwind CSS</span>.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg leading-8"
        >
          I'm currently sharpening my skills through personal projects . My long-term dream is to work in the field of{" "}
          <span className="font-semibold text-pink-500">Software Engineering</span>.
        </motion.p>
      </div>
    </section>
  );
};

export default About;