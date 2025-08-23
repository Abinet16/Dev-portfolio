import LeftView from "./projectType/LeftView";
import RightView from "./projectType/RightView";
import { ProjectList } from "../constants/ProjectList";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
    const refHeading = useRef(null);
    const refContainer = useRef(null);
    const inViewHeading = useInView(refHeading, { once: true });
    const inViewContainer = useInView(refContainer, { once: true, amount: 0.1 });
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <section className="relative sm:px-8 py-20 lg:py-28 overflow-hidden" id="projects">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
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
                        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
                    </h2>
                    <div className="min-w-0 flex-grow mt-2 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                </motion.div>

                {/* Projects counter */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inViewHeading ? { opacity: 1 } : {}}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10">
                        <span className="text-blue-400 font-semibold mr-2">{ProjectList.length}+</span>
                        <span className="text-textPara">Projects Completed</span>
                    </div>
                </motion.div>

                {/* Projects container */}
                <motion.div
                    ref={refContainer}
                    initial={{ opacity: 0 }}
                    animate={inViewContainer ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="space-y-28 lg:space-y-36"
                >
                    {ProjectList?.map((project, i) => {
                        return project.id % 2 === 0 ? (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inViewContainer ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                                className="relative"
                            >
                                {/* Background highlight effect when hovered */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl -z-10 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                
                                <LeftView {...project} isHovered={hoveredProject === project.id} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                animate={inViewContainer ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: i * 0.1 }}
                                onHoverStart={() => setHoveredProject(project.id)}
                                onHoverEnd={() => setHoveredProject(null)}
                                className="relative"
                            >
                                {/* Background highlight effect when hovered */}
                                <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl -z-10 transition-opacity duration-500 ${hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                
                                <RightView {...project} isHovered={hoveredProject === project.id} />
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Call to action */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inViewContainer ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-center mt-20"
                >
                    <p className="text-textPara text-lg mb-6">Interested in seeing more of my work?</p>
                    <a
                        href="https://github.com/Abinet16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                    >
                        <span>View All Projects</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;