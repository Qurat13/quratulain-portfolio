import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap
} from 'react-icons/fa';
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiRedux
} from 'react-icons/si';
import { motion } from 'framer-motion';

const skills = [
  { icon: <FaHtml5 className="text-orange-600" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
  { icon: <SiJavascript className="text-yellow-500" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400" />, name: "React" },
  { icon: <SiRedux className="text-purple-600" />, name: "Redux" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <FaBootstrap className="text-indigo-600" />, name: "Bootstrap" },
  { icon: <FaNodeJs className="text-green-600" />, name: "Node.js" },
  { icon: <SiExpress className="text-gray-400" />, name: "Express.js" },
  { icon: <SiMongodb className="text-green-800" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-red-500" />, name: "Git" },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-white text-black dark:bg-[#111827] dark:text-white py-20 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 border-b-2 border-purple-600 inline-block"
        >
          My Skills
        </motion.h2>

        <div className="grid grid-cols-3 md:grid-cols-4 gap-8 justify-items-center text-4xl">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="p-4 rounded-full group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <p className="text-sm mt-2 group-hover:text-purple-500 transition-colors">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;