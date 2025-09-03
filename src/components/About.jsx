import { useState, useTransition, useRef } from "react";
import TabbedComponent from "./TabbedComponent";
import { Skills } from "../constants/Skills";
import { motion, useInView } from "framer-motion";

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const refHeading = useRef(null);
    const refContent = useRef(null);
    const inViewHeading = useInView(refHeading, { once: true });
    const inViewContent = useInView(refContent, { once: true });

    function selectTab(nextTab) {
        startTransition(() => {
            setTab(nextTab);
        });
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="relative sm:px-8 py-20 lg:py-28 overflow-hidden" id="about">
            {/* Background elements */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    ref={refHeading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex gap-4 items-center mb-16"
                >
                    <h2 className="text-textWhite text-3xl sm:text-4xl md:text-5xl font-bold">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
                    </h2>
                    <div className="min-w-0 flex-grow mt-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 place-items-center">
                    {/* Image section */}
                    <motion.div
                        ref={refContent}
                        initial={{
                            opacity: 0,
                            x: -100,
                            scale: 0.9,
                        }}
                        animate={
                            inViewContent
                                ? {
                                    opacity: 1,
                                    x: 0,
                                    scale: 1,
                                }
                                : {}
                        }
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-1 lg:col-span-5 relative"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
                            {/* Gradient orb behind image */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl scale-90 -z-10"></div>
                            
                            {/* Main image */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.3, duration: 0.7 }}
                                className="relative w-full h-full flex items-center justify-center"
                            >
                                <img
                                    src="/images/about.png"
                                    alt="Abenet Shegaw - Developer"
                                    loading="lazy"
                                    className="w-full h-full object-contain z-10 relative rounded-2xl shadow-lg"
                                />
                                
                                {/* Glow effect */}
                                <div className="absolute inset-0 bg-blue-500/10 rounded-2xl scale-105 blur-md -z-10"></div>
                            </motion.div>
                            
                            {/* Decorative elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.5, duration: 0.5 }}
                                className="absolute -top-4 -right-4 w-14 h-14 bg-blue-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/20"
                            >
                                <div className="text-xl">💻</div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.7, duration: 0.5 }}
                                className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center backdrop-blur-sm border border-purple-500/20"
                            >
                                <div className="text-lg">🚀</div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: 100 }}
                        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="col-span-1 lg:col-span-7"
                    >
                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={inViewContent ? { opacity: 1 } : {}}
                            transition={{ delay: 0.2, duration: 0.7 }}
                            className="text-textWhite text-lg sm:text-xl leading-8 mb-8 bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm"
                        >
                            <span className="block text-2xl font-semibold mb-3 text-blue-300">Greetings!</span>
                           Hello, I’m Abenet Shegaw — a passionate and dedicated web developer with a flair for creating clean, dynamic, and user-friendly applications. I specialize in transforming ideas into seamless digital experiences, blending creativity with technical precision.
                            <br /><br />
                           As a fast learner who thrives on challenges, I love tackling complex problems and discovering elegant solutions. My journey is fueled by curiosity, continuous growth, and the joy of building technology that makes a real impact.
                        </motion.p>

                        {/* Tabs */}
                        <div className="flex flex-row justify-start gap-4 mb-8">
                            <TabbedComponent
                                selectTab={() => selectTab("skills")}
                                active={tab === "skills"}
                            >
                                Skills
                            </TabbedComponent>
                            <TabbedComponent
                                selectTab={() => selectTab("education")}
                                active={tab === "education"}
                            >
                                Education
                            </TabbedComponent>
                        </div>

                        {/* Tab content */}
                        <div className="pl-2">
                            {tab === "skills" ? (
                                <motion.div
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate="visible"
                                    className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
                                >
                                    {Skills?.map((skill, i) => {
                                        return (
                                            <motion.div
                                                variants={itemVariants}
                                                key={i}
                                                className="group relative flex flex-col items-center p-3 bg-white/5 rounded-xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                <div className="w-12 h-12 flex items-center justify-center mb-2">
                                                    <img
                                                        src={skill.img}
                                                        alt={skill.description}
                                                        className="max-w-full max-h-full object-contain"
                                                    />
                                                </div>
                                                <span className="text-xs text-textPara text-center group-hover:text-white transition-colors">
                                                    {skill.description}
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300 -z-10"></div>
                                            </motion.div>
                                        );
                                    })}
                                </motion.div>
                            ) : (
                                <motion.ul 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    <motion.li 
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm"
                                    >
                                        <h5 className="text-2xl font-semibold text-white mb-3">
                                            Wollo University, KIoT
                                        </h5>
                                        <div className="flex items-start gap-4">
                                            <div className="w-1 h-full bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-1"></div>
                                            <div>
                                                <p className="text-lg text-blue-300 font-medium">Bachelor of Software Engineering</p>
                                                <span className="text-textPara">2018 - 2023</span>
                                                <p className="mt-2 text-textWhite">Comprehensive education in software development principles, algorithms, data structures, and modern web technologies.</p>
                                            </div>
                                        </div>
                                    </motion.li>
                                </motion.ul>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
