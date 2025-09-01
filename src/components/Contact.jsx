import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white text-black dark:bg-[#111827] dark:text-white py-20 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-6 border-b-2 border-purple-600 inline-block"
        >
          Contact Me
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-6 text-lg"
        >
          I'm always open to discussing new opportunities, freelance work, or collaborations.
          Feel free to reach out!
        </motion.p>

        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          href="mailto:quratulain.dev@gmail.com"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full text-lg transition"
        >
          <FaEnvelope className="inline-block mr-2" />
          Say Hello
        </motion.a>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="flex justify-center gap-6 mt-6 text-2xl"
        >
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;