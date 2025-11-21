import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0f172a] via-black to-purple-900 text-white py-24 px-4 sm:px-6 md:px-10 overflow-hidden"
    >
      {/* Glowing blurred shapes */}
      <div className="absolute top-0 left-0 w-60 h-60 bg-purple-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-500 opacity-20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Hi, I'm Qurat ul ain
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="text-base sm:text-lg md:text-xl font-light mb-6 max-w-2xl"
        >
          <Typewriter
            words={[
              'Full Stack Developer',
              'React & Node.js Enthusiast',
              'MERN Stack Coder',
              "Let's build something amazing!"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md text-sm sm:text-base md:text-lg shadow-md transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;