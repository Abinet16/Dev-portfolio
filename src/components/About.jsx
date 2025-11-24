import { useState, useTransition, useRef } from "react";
import TabbedComponent from "./TabbedComponent";
import { SkillCategories } from "../constants/Skills";
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

    return (
        <section className="relative py-20 lg:py-28" id="about">
            <div className="max-w-7xl mx-auto px-4">
                {/* Section Heading */}
                <motion.div
                    ref={refHeading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex gap-4 items-center mb-12"
                >
                    <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Me</span>
                    </h2>
                    <div className="flex-grow h-px bg-slate-200 dark:bg-white/10 mt-2"></div>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
                    {/* Image section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 lg:col-span-5 flex justify-center items-start"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl rotate-6 opacity-20 dark:opacity-40 blur-lg group-hover:rotate-12 transition-all duration-500"></div>
                            <img
                                src="/images/about.png"
                                alt="Abenet Shegaw"
                                className="w-full h-full object-cover rounded-3xl shadow-xl relative z-10 bg-white dark:bg-slate-800"
                            />
                        </div>
                    </motion.div>

                    {/* Content section */}
                    <motion.div
                        ref={refContent}
                        initial={{ opacity: 0, x: 50 }}
                        animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8 }}
                        className="col-span-1 lg:col-span-7"
                    >
                        <p className="text-slate-600 dark:text-slate-300 text-lg leading-8 mb-8">
                            <span className="block text-2xl font-semibold mb-3 text-slate-900 dark:text-blue-300">Greetings!</span>
                            Hello, I’m Abenet Shegaw — a passionate and dedicated web developer with a flair for creating clean, dynamic, and user-friendly applications. I specialize in transforming ideas into seamless digital experiences, blending creativity with technical precision.
                        </p>

                        {/* Tabs */}
                        <div className="flex flex-row justify-start gap-4 mb-6 border-b border-slate-200 dark:border-white/10 pb-2">
                            <TabbedComponent selectTab={() => selectTab("skills")} active={tab === "skills"}>Skills</TabbedComponent>
                            <TabbedComponent selectTab={() => selectTab("education")} active={tab === "education"}>Education</TabbedComponent>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-6 min-h-[300px]">
                            {tab === "skills" ? (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.5 }}
                                    className="space-y-6"
                                >
                                    {Object.entries(SkillCategories).map(([category, skills], index) => (
                                        <div key={index}>
                                            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3 flex items-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                {category}
                                            </h4>
                                            {/* COMPACT GRID: Increased cols, reduced gap */}
                                            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7 gap-3">
                                                {skills.map((skill, i) => (
                                                    <div
                                                        key={i}
                                                        className="group flex flex-col items-center justify-center p-3 bg-white dark:bg-white/5 rounded-lg border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
                                                    >
                                                        {/* Smaller Icon Container */}
                                                        <div className="w-8 h-8 mb-2 flex items-center justify-center transition-transform group-hover:scale-110">
                                                            <skill.icon 
                                                                className="w-6 h-6 text-slate-500 dark:text-slate-400 transition-colors duration-300" 
                                                                style={{ color: null }} 
                                                                onMouseEnter={(e) => e.currentTarget.style.color = skill.color}
                                                                onMouseLeave={(e) => e.currentTarget.style.color = ''}
                                                            />
                                                        </div>
                                                        {/* Smaller Text */}
                                                        <span className="text-[10px] sm:text-xs font-medium text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors text-center leading-tight">
                                                            {skill.name}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="space-y-4"
                                >
                                    <div className="p-5 bg-white dark:bg-white/5 rounded-xl border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-md transition-all">
                                        <h5 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Wollo University, KIoT</h5>
                                        <div className="flex flex-col sm:flex-row justify-between mb-2">
                                            <span className="text-blue-600 dark:text-blue-400 font-medium text-sm">Bachelor of Software Engineering</span>
                                            <span className="text-slate-500 text-xs">2018 - 2023</span>
                                        </div>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                                            Comprehensive education in software development principles, algorithms, data structures, and modern web technologies.
                                        </p>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;