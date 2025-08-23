import { motion } from "framer-motion";

const TabbedComponent = ({ active, selectTab, children, icon: Icon }) => {
    return (
        <motion.button
            onClick={selectTab}
            className="relative px-4 py-2 rounded-lg font-medium text-lg transition-all duration-300 group flex items-center gap-2"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
        >
            {Icon && (
                <motion.span
                    animate={{ 
                        scale: active ? 1.1 : 1,
                        rotate: active ? 5 : 0
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <Icon className={`w-5 h-5 ${active ? "text-blue-400" : "text-[#ADB7BE] group-hover:text-blue-300"}`} />
                </motion.span>
            )}
            
            <span className={`relative z-10 ${active ? "text-white" : "text-[#ADB7BE] group-hover:text-white"}`}>
                {children}
            </span>
            
            {/* Active indicator */}
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-lg z-0 border border-blue-500/20"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
            
            {/* Hover effect */}
            {!active && (
                <motion.div
                    className="absolute inset-0 bg-white/5 rounded-lg opacity-0 group-hover:opacity-100 z-0"
                    initial={false}
                    transition={{ duration: 0.2 }}
                />
            )}
            
            {/* Pulse effect for active tab */}
            {active && (
                <motion.div
                    className="absolute inset-0 bg-blue-500/10 rounded-lg"
                    animate={{ opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                />
            )}
        </motion.button>
    );
};

export default TabbedComponent;