import { TypeAnimation } from "react-type-animation";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";

const HeroSection = () => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true });
    const [isDownloadHovered, setIsDownloadHovered] = useState(false);

    // Floating animation for the image
    const floatingAnimation = {
        y: [0, -15, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <>
            <section
                className="relative overflow-hidden pt-28 pb-16 px-4 sm:px-8 lg:pt-36 lg:pb-24"
                id="intro"
            >
                {/* Background elements */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 place-items-center">
                    {/* intro section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -100, scale: 0.95 }}
                        animate={
                            inViewContent
                                ? { opacity: 1, x: 0, scale: 1 }
                                : { opacity: 0, x: -100, scale: 0.95 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-7 text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.6 }}
                            className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-textPara mb-6"
                        >
                            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                            Available for new opportunities
                        </motion.div>

                        <h1 className="text-white mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                            Hi, I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Abenet
                            </span>
                        </h1>
                        
                        <h2 className="text-white mb-6 text-2xl sm:text-3xl md:text-4xl font-medium">
                            A <span className="text-heading">Passionate</span>{" "}
                            <br className="sm:hidden" />Software Developer
                        </h2>

                        <div className="h-16 md:h-20 mb-6 flex items-center justify-center lg:justify-start">
                            <TypeAnimation
                                sequence={[
                                    500,
                                    " Full-stack Web App Developer",
                                    1000,
                                    "React Specialist",
                                    1000,
                                    "Problem Solver",
                                    500,
                                ]}
                                speed={50}
                                deletionSpeed={70}
                                className="text-lg md:text-2xl font-medium text-textPara"
                                repeat={Infinity}
                            />
                        </div>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={inViewContent ? { opacity: 1 } : {}}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="text-textPara text-base sm:text-lg mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0"
                        >
                            I create engaging, user-friendly web experiences with modern technologies. 
                            Stick around to see some of my work.
                        </motion.p>
                        
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.6 }}
                            className="flex items-center gap-4 flex-col sm:flex-row justify-center lg:justify-start"
                        >
                            <ScrollLink
                                to="contact"
                                smooth={true}
                                duration={800}
                                className="px-8 py-4 cursor-pointer w-full sm:w-auto rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center text-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                Hire Me
                            </ScrollLink>
                            
                            <motion.a
                                href="https://drive.google.com/file/d/1QdCeg_cG21IvFkmnAsEwW031WcoyBPDh/view?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-4 w-full sm:w-auto rounded-xl bg-transparent border-white/20 border-2 text-white text-center hover:bg-white/5 transition-all duration-300 flex items-center justify-center gap-2"
                                onHoverStart={() => setIsDownloadHovered(true)}
                                onHoverEnd={() => setIsDownloadHovered(false)}
                                whileHover={{ y: -4 }}
                            >
                                <span>Download CV</span>
                                <motion.svg 
                                    animate={{ x: isDownloadHovered ? 4 : 0 }}
                                    transition={{ type: "spring", stiffness: 500 }}
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </motion.svg>
                            </motion.a>
                        </motion.div>

                        {/* Social links */}
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={inViewContent ? { opacity: 1 } : {}}
                            transition={{ delay: 1, duration: 0.6 }}
                            className="flex items-center justify-center lg:justify-start gap-5 mt-10 text-xl"
                        >
                            <a
                                href="https://www.linkedin.com/in/abinetshegaw16/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Abinet16"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 bg-white/5 rounded-full hover:bg-gray-500/20 hover:text-white transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                                </svg>
                            </a>
                            <a
                                href="mailto:abinetshegaw@gmail.com"
                                className="p-3 bg-white/5 rounded-full hover:bg-red-500/20 hover:text-red-400 transition-all duration-300"
                                aria-label="Email"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                                </svg>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* image section */}
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: 100,
                            scale: 0.9,
                            filter: "blur(10px)",
                        }}
                        animate={
                            inViewContent
                                ? {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                    filter: "blur(0px)",
                                }
                                : { opacity: 0, x: 100, scale: 0.9 }
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-5 relative mt-12 lg:mt-0"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Gradient orb behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl scale-90"></div>
                            
                            {/* Main image container */}
                            <motion.div
                                animate={floatingAnimation}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src="/images/heroImg.png"
                                    alt="Abenet Mulu - Developer"
                                    loading="eager"
                                    className="w-full h-full object-contain z-10 relative"
                                />
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-110 blur-md"></div>
                            </motion.div>
                            
                            {/* Floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                    rotate: [0, 5, 0],
                                }}
                                transition={{
                                    duration: 6,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5
                                }}
                                className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20"
                            >
                                <div className="text-2xl">🚀</div>
                            </motion.div>
                            
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -5, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-6 -left-4 w-14 h-14 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/20"
                            >
                                <div className="text-xl">💻</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={inViewContent ? { opacity: 1 } : {}}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden lg:block"
                >
                    <ScrollLink
                        to="about"
                        smooth={true}
                        duration={800}
                        className="flex flex-col items-center text-textPara cursor-pointer hover:text-white transition-colors"
                    >
                        <span className="text-sm mb-2">Scroll down</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1"
                        >
                            <div className="w-1 h-2 bg-white rounded-full"></div>
                        </motion.div>
                    </ScrollLink>
                </motion.div>
            </section>
        </>
    );
};

export default HeroSection;