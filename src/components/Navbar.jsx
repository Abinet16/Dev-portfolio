// --- START OF FILE Navbar.jsx ---
import { AiFillCloseCircle } from "react-icons/ai";
import { SiEbox } from "react-icons/si";
import { BsMoon, BsSun } from "react-icons/bs";
import { MenuItems } from "../constants/MenuItem";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const updateActiveSection = () => {
      setScrolled(window.scrollY > 50);
      const sections = MenuItems.map((item) => item.url);
      const scrollPosition = window.scrollY + 100;

      if (window.scrollY === 0) {
        setActiveSection("intro");
        return;
      }

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
    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection);
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const handleNavClick = (url) => {
    setMobileView(false);
    setActiveSection(url);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 dark:bg-black/70 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-6"
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-between px-4 md:px-8 mx-auto max-w-7xl"
      >
        {/* Logo */}
        <ScrollLink
          to="intro"
          smooth={true}
          duration={500}
          onClick={() => handleNavClick("intro")}
          className="min-w-[150px] cursor-pointer font-bold text-xl tracking-wide group text-slate-800 dark:text-white"
        >
          <span className="hidden sm:inline-block relative">
            @Abenet_MULU
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
          <span className="sm:hidden relative">
            @Abenet
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </ScrollLink>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl p-2 rounded-lg text-slate-800 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          onClick={() => setMobileView(!mobileView)}
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
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                onClick={() => setMobileView(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed top-0 right-0 w-[80%] max-w-sm h-screen bg-white dark:bg-slate-900 shadow-2xl md:hidden"
              >
                <div className="flex flex-col h-full p-6 text-slate-800 dark:text-white">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-bold text-xl">Menu</span>
                    <button
                      className="text-2xl p-1 hover:text-blue-500"
                      onClick={() => setMobileView(false)}
                    >
                      <AiFillCloseCircle />
                    </button>
                  </div>
                  <ul className="flex flex-col gap-4">
                    {MenuItems.map((menuItem) => (
                      <li key={menuItem.id}>
                        <ScrollLink
                          to={menuItem.url}
                          smooth={true}
                          duration={500}
                          onClick={() => handleNavClick(menuItem.url)}
                          className={`block py-3 px-4 rounded-xl transition-all duration-300 font-medium ${
                            activeSection === menuItem.url
                              ? "bg-blue-500/10 text-blue-600 dark:text-blue-400"
                              : "hover:bg-black/5 dark:hover:bg-white/5"
                          }`}
                        >
                          {menuItem.name}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-6 border-t border-slate-200 dark:border-white/10">
                    <button
                      onClick={toggleDarkMode}
                      className="flex items-center justify-center gap-3 p-3 rounded-xl bg-slate-100 dark:bg-white/5 w-full font-medium"
                    >
                      {isDarkMode ? (
                        <>
                          <BsSun className="text-lg" /> <span>Light Mode</span>
                        </>
                      ) : (
                        <>
                          <BsMoon className="text-lg" /> <span>Dark Mode</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {MenuItems.map((menuItem) => (
              <li key={menuItem.id}>
                <ScrollLink
                  to={menuItem.url}
                  smooth={true}
                  duration={500}
                  onClick={() => handleNavClick(menuItem.url)}
                  className={`relative px-4 py-2 rounded-lg cursor-pointer transition-all duration-300 font-medium ${
                    activeSection === menuItem.url
                      ? "text-blue-600 dark:text-blue-400"
                      : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {menuItem.name}
                  {activeSection === menuItem.url && (
                    <motion.span
                      layoutId="activeSection"
                      className="absolute inset-0 bg-blue-500/10 dark:bg-blue-500/20 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="w-px h-6 bg-slate-300 dark:bg-white/20 mx-2"></div>
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
          >
            {isDarkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
          </button>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;