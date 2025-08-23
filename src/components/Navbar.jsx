import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiMailOpen } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { BsMoon, BsSun } from "react-icons/bs";
import { MenuItems } from "../constants/MenuItem";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Link as ScrollLink,
  animateScroll as scroll,
} from "react-scroll";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = MenuItems.map(item => item.url);
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('light-mode');
  };

  const closeMobileMenu = () => {
    setMobileView(false);
  };

  const handleNavClick = (url) => {
    closeMobileMenu();
    setActiveSection(url);
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-bgDark/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between px-4 md:px-8 mx-auto text-textWhite"
      >
        {/* Logo */}
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          onClick={() => handleNavClick("intro")}
          className="min-w-[150px] cursor-pointer font-bold text-xl tracking-wide group"
        >
          <span className="hidden sm:inline-block relative">
            @Abenet_MULU
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="sm:hidden relative">
            @Abenet
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ScrollLink>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMobileView(!mobileView)}
          aria-label="Toggle menu"
        >
          <SiEbox />
        </button>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileView && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm md:hidden"
                onClick={closeMobileMenu}
              />
              
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-4/5 max-w-sm h-screen bg-bgDark shadow-xl md:hidden"
              >
                <div className="flex flex-col h-full p-6">
                  <div className="flex justify-between items-center mb-8">
                    <ScrollLink
                      to="intro"
                      smooth={true}
                      duration={500}
                      onClick={() => handleNavClick("intro")}
                      className="font-bold text-xl"
                    >
                      @Abenet
                    </ScrollLink>
                    <button
                      className="text-2xl p-1 hover:text-blue-400 transition-colors"
                      onClick={closeMobileMenu}
                      aria-label="Close menu"
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>

                  <div className="flex gap-5 text-2xl mb-8 justify-center">
                    <a
                      href="https://www.linkedin.com/in/abinetshegaw16/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <BsLinkedin />
                    </a>
                    <a
                      href="https://github.com/Abinet16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 hover:text-blue-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <BsGithub />
                    </a>
                    <a
                      href="mailto:abinetshegaw@gmail.com"
                      className="p-2 hover:text-blue-400 transition-colors"
                      aria-label="Email"
                    >
                      <HiMailOpen />
                    </a>
                  </div>

                  <ul className="flex flex-col gap-6">
                    {MenuItems?.map((menuItem) => (
                      <li key={menuItem.id}>
                        <ScrollLink
                          to={menuItem.url}
                          smooth={true}
                          duration={500}
                          onClick={() => handleNavClick(menuItem.url)}
                          className={`block py-2 px-4 rounded-lg transition-all duration-300 ${
                            activeSection === menuItem.url
                              ? "bg-blue-500/20 text-blue-400 font-medium"
                              : "hover:bg-white/10"
                          }`}
                        >
                          {menuItem.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto pt-6 border-t border-white/10">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-white/10 w-full transition-colors"
                      aria-label="Toggle dark mode"
                    >
                      {isDarkMode ? (
                        <>
                          <BsSun className="text-lg" />
                          <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <BsMoon className="text-lg" />
                          <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-1">
            {MenuItems?.map((menuItem) => (
              <li key={menuItem.id}>
                <ScrollLink
                  to={menuItem.url}
                  smooth={true}
                  duration={500}
                  onClick={() => setActiveSection(menuItem.url)}
                  className={`relative px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 ${
                    activeSection === menuItem.url
                      ? "text-blue-400 font-medium"
                      : "hover:text-blue-300"
                  }`}
                >
                  {menuItem.name}
                  {activeSection === menuItem.url && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-blue-500/10 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>

          <div className="h-6 w-px bg-white/30 mx-2"></div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/abinetshegaw16/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xl hover:text-blue-400 transition-colors"
              aria-label="LinkedIn"
            >
              <BsLinkedin />
            </a>
            <a
              href="https://github.com/Abinet16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-xl hover:text-blue-400 transition-colors"
              aria-label="GitHub"
            >
              <BsGithub />
            </a>
            <a
              href="mailto:abinetshegaw@gmail.com"
              className="p-2 text-xl hover:text-blue-400 transition-colors"
              aria-label="Email"
            >
              <HiMailOpen />
            </a>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 text-xl rounded-lg hover:bg-white/10 transition-colors ml-2"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <BsSun /> : <BsMoon />}
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;