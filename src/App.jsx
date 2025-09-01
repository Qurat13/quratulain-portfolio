
import React, { useEffect, useState } from 'react';
import './index.css'
import './css/main.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Navbar from './components/Navbar'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'
import ScrollToTop from './components/ScrollToTop'
import Loader from './components/Loader';


function App() {

    const [loading, setLoading] = useState(true);
    useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
     <main className="bg-white dark:bg-[#0f172a] text-black dark:text-white transition-colors duration-300">
      <h1>Qurat ul ain </h1>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <Footer />

      <ScrollToTop />

    </main>
    </>
  )
}

export default App
