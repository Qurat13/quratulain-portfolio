import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur bg-white/80 dark:bg-[#0f172a]/80 text-black dark:text-white shadow-sm z-50 transition-all">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight text-purple-600 dark:text-purple-400">
          Quratulain
        </h1>

        {/* Hamburger Icon - Mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-sm md:text-base font-medium items-center">
          <li>
            <a href="#about" className="hover:text-purple-500 transition">About</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-purple-500 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-purple-500 transition">Contact</a>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1.5 rounded-full text-xs border border-gray-400 dark:border-white hover:bg-purple-600 hover:text-white transition"
            >
              {darkMode ? 'Light' : ' Dark'}
            </button>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0f172a] px-4 pb-4 space-y-4 text-center text-sm font-medium">
          <a href="#about" className="block hover:text-purple-500">About</a>
          <a href="#projects" className="block hover:text-purple-500">Projects</a>
          <a href="#contact" className="block hover:text-purple-500">Contact</a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mt-2 px-4 py-1 rounded-full border text-xs border-gray-400 dark:border-white hover:bg-purple-600 hover:text-white"
          >
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;