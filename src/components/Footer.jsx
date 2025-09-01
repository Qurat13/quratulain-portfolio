import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-black dark:bg-[#0f172a] dark:text-white py-6 text-center border-t border-gray-200 dark:border-gray-600">
      <p className="text-sm mb-2">
        © {new Date().getFullYear()} <span className="font-semibold text-purple-600 dark:text-purple-400">Quratulain</span>. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 text-sm">
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
};

export default Footer;