// --- START OF FILE HeroSection.jsx ---
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32" id="intro">
        {/* Background elements - Adapted for Light/Dark */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/20 dark:bg-blue-500/10 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 dark:bg-purple-500/10 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 place-items-center">
          {/* Intro section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="col-span-7 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-sm text-slate-600 dark:text-slate-300 mb-8 shadow-sm dark:shadow-none"
            >
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new opportunities
            </motion.div>

            <h1 className="text-slate-900 dark:text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">
                Abenet
              </span>
            </h1>

            <h2 className="text-slate-800 dark:text-slate-100 mb-6 text-2xl sm:text-3xl md:text-4xl font-medium">
              A{" "}
              <span className="font-bold border-b-4 border-blue-500/30">
                Passionate
              </span>{" "}
              <br className="sm:hidden" />
              Software Developer
            </h2>

            <div className="h-10 mb-8 flex items-center justify-center lg:justify-start">
              <TypeAnimation
                sequence={[
                  "Full-stack Web App Developer",
                  1000,
                  "React Specialist",
                  1000,
                  "Problem Solver",
                  1000,
                ]}
                speed={50}
                deletionSpeed={70}
                className="text-lg md:text-2xl font-medium text-slate-600 dark:text-slate-400"
                repeat={Infinity}
                wrapper="span"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I create engaging, user-friendly web experiences with modern
              technologies. Building digital products that combine design
              elegance with technical robustness.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex items-center gap-4 flex-col sm:flex-row justify-center lg:justify-start"
            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                className="px-8 py-4 cursor-pointer w-full sm:w-auto rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-center text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Hire Me
              </ScrollLink>

              <motion.a
                href="https://drive.google.com/file/d/1VgNJ3uaKtf26Ju5ZBw2I1ZyiWWDdL8rE/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 w-full sm:w-auto rounded-xl bg-white dark:bg-transparent border border-slate-200 dark:border-white/20 text-slate-900 dark:text-white text-center hover:bg-slate-50 dark:hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm dark:shadow-none"
                onHoverStart={() => setIsDownloadHovered(true)}
                onHoverEnd={() => setIsDownloadHovered(false)}
                whileHover={{ y: -2 }}
              >
                <span>Download CV</span>
                <motion.svg
                  animate={{ y: isDownloadHovered ? 2 : 0 }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex items-center justify-center lg:justify-start gap-5 mt-10 text-xl text-slate-500 dark:text-slate-400"
            >
              {/* Replaced SVG code for brevity, assumes icons exist or similar SVG paths
                         {/* You can use react-icons here as well like in Navbar */}
              {/* <a href="https://www.linkedin.com/in/abinetshegaw16/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110"><i className="fab fa-linkedin"></i> LinkedIn</a>
                        <a href="https://github.com/Abinet16" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors transform hover:scale-110"><i className="fab fa-github"></i> GitHub</a> */}
            </motion.div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
            animate={
              isVisible ? { opacity: 1, scale: 1, filter: "blur(0px)" } : {}
            }
            transition={{ duration: 0.8 }}
            className="col-span-5 relative mt-12 lg:mt-0"
          >
            <div className="relative w-72 h-72 sm:w-96 sm:h-96">
              <motion.div
                animate={floatingAnimation}
                className="relative w-full h-full z-10"
              >
                <img
                  src="/images/heroImg.png"
                  alt="Abenet Mulu"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              {/* Decorative background circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 rounded-full blur-2xl transform scale-90 -z-10"></div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
        >
          <ScrollLink
            to="about"
            smooth={true}
            duration={800}
            className="flex flex-col items-center cursor-pointer group"
          >
            <span className="text-sm text-slate-500 dark:text-slate-400 mb-2 group-hover:text-blue-500 transition-colors">
              Scroll Down
            </span>
            <div className="w-6 h-10 border-2 border-slate-300 dark:border-slate-600 rounded-full flex justify-center p-1 group-hover:border-blue-500 transition-colors">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-400 rounded-full group-hover:bg-blue-500"
              ></motion.div>
            </div>
          </ScrollLink>
        </motion.div>
      </section>
    );
};

export default HeroSection;