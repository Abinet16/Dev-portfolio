import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";
import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
    const refHeading = useRef(null);
    const inViewHeading = useInView(refHeading, { once: true });
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="relative py-20 lg:py-32" id="projects">
            <div className="max-w-7xl mx-auto px-4">
                <motion.div
                    ref={refHeading}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewHeading ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20 text-center"
                >
                    <h2 className="text-slate-900 dark:text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500">Projects</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-6"></div>
                    
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-white/5 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-100 dark:border-white/10">
                        {ProjectList.length}+ Projects Completed
                    </div>
                </motion.div>

                <div className="space-y-32">
                    {ProjectList?.map((project, i) => (
                        <div key={project.id} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
                            {project.id % 2 === 0 ? (
                                <LeftView {...project} isHovered={hoveredProject === project.id} />
                            ) : (
                                <RightView {...project} isHovered={hoveredProject === project.id} />
                            )}
                        </div>
                    ))}
                </div>
                
                <div className="text-center mt-24">
                     <a
                        href="https://github.com/Abinet16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3 rounded-xl bg-slate-900 dark:bg-white/10 text-white hover:bg-slate-800 dark:hover:bg-white/20 transition-all duration-300"
                    >
                        View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;