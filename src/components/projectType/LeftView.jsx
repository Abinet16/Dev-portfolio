// --- START OF FILE LeftView.jsx ---
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const LeftView = ({ id, name, description, img, tech, source, demo, isHovered }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true, amount: 0.3 });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Content section */}
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: -50 }}
                animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7 }}
                className="col-span-1 lg:col-span-5 order-2 lg:order-1 relative z-10"
            >
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6">
                    {name}
                </h3>
                
                <div className="mb-6 p-6 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/10 shadow-lg dark:shadow-none backdrop-blur-sm">
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {description}
                    </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                    {tech?.map((item, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-100 dark:bg-blue-500/10 text-slate-600 dark:text-blue-300 rounded-full text-sm font-medium border border-slate-200 dark:border-blue-500/20">
                            {item}
                        </span>
                    ))}
                </div>
                
                <div className="flex gap-4">
                    <a href={source} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-white transition-colors">
                        <FiGithub className="w-5 h-5" /> <span>Source Code</span>
                    </a>
                    {demo && (
                        <a href={demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-lg hover:shadow-blue-500/30 transition-all">
                            <span>Live Demo</span> <FiExternalLink className="w-4 h-4" />
                        </a>
                    )}
                </div>
            </motion.div>

            {/* Image section */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inViewContent ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.7 }}
                className="col-span-1 lg:col-span-7 order-1 lg:order-2"
            >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 dark:bg-slate-800 group">
                    <div className="absolute inset-0 bg-slate-900/10 dark:bg-black/20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                    <a href={demo || source} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-2xl">
                        <img
                            src={img}
                            alt={name}
                            className={`w-full h-auto object-cover transform transition-transform duration-700 ${isHovered ? 'scale-105' : 'scale-100'}`}
                        />
                    </a>
                </div>
            </motion.div>
        </div>
    );
};

export default LeftView;