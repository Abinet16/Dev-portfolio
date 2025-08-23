import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const RightView = ({ id, name, description, img, tech, source, demo, isHovered }) => {
    const refContent = useRef(null);
    const inViewContent = useInView(refContent, { once: true, amount: 0.3 });
    const [isMouseOver, setIsMouseOver] = useState(false);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-10 lg:py-16">
            {/* Image section */}
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: -50, scale: 0.95 }}
                animate={inViewContent ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="col-span-1 lg:col-span-7 relative order-1 lg:order-1"
                onMouseEnter={() => setIsMouseOver(true)}
                onMouseLeave={() => setIsMouseOver(false)}
            >
                <motion.div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.3 }}
                >
                    <a href={demo || source} target="_blank" rel="noreferrer">
                        <img
                            src={img}
                            alt={name}
                            loading="lazy"
                            className="w-full h-auto object-cover transition-transform duration-700 ease-out"
                            style={{ transform: isMouseOver || isHovered ? 'scale(1.05)' : 'scale(1)' }}
                        />
                        
                        {/* Overlay gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 ${(isMouseOver || isHovered) ? 'opacity-100' : ''}`}></div>
                        
                        {/* Live preview button */}
                        <div className={`absolute top-4 left-4 bg-white/10 backdrop-blur-sm text-white p-2 rounded-lg transition-all duration-300 ${(isMouseOver || isHovered) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
                            <FiExternalLink className="w-5 h-5" />
                        </div>
                    </a>
                </motion.div>
                
                {/* Decorative element */}
                <div className="absolute -z-10 -left-4 -bottom-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                
                {/* Project number indicator */}
                <div className="absolute -right-4 -top-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {id}
                </div>
            </motion.div>

            {/* Content section */}
            <motion.div
                ref={refContent}
                initial={{ opacity: 0, x: 50 }}
                animate={inViewContent ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="col-span-1 lg:col-span-5 relative order-2 lg:order-2"
            >
                {/* Project tagline */}
                <motion.h3 
                    className="text-2xl md:text-3xl font-bold text-white mb-6 text-right"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    {name}
                </motion.h3>
                
                {/* Description */}
                <motion.div 
                    className="mb-6 relative group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3, duration: 0.6 }}
                >
                    <div className="absolute -inset-2 bg-purple-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                    <p className="text-lg text-textPara leading-relaxed p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm text-right">
                        {description}
                    </p>
                </motion.div>
                
                {/* Tech stack */}
                <motion.div 
                    className="flex flex-wrap gap-2 mb-6 justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    {tech?.map((item, i) => (
                        <span 
                            key={i}
                            className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-full text-sm border border-purple-500/20"
                        >
                            {item}
                        </span>
                    ))}
                </motion.div>
                
                {/* Links */}
                <motion.div 
                    className="flex gap-4 justify-end"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inViewContent ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5, duration: 0.6 }}
                >
                    <a
                        href={source}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300 group"
                    >
                        <span>Code</span>
                        <FiGithub className="w-4 h-4" />
                        <div className="w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></div>
                    </a>
                    
                    {demo && (
                        <a
                            href={demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
                        >
                            <span>Live Demo</span>
                            <FiExternalLink className="w-4 h-4" />
                            <div className="w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></div>
                        </a>
                    )}
                </motion.div>
                
                {/* Decorative element */}
                <div className="absolute -z-10 -right-4 -bottom-4 w-24 h-24 bg-purple-500/10 rounded-full blur-xl"></div>
            </motion.div>
        </div>
    );
};

export default RightView;