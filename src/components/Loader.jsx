import React from 'react'
import { motion } from "framer-motion";


const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#0f172a] z-[9999]">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="text-2xl font-bold text-purple-600 dark:text-purple-400"
      >
        Loading...
      </motion.div>
    </div>
  );
};

export default Loader;