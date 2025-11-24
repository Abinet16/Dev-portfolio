import { motion } from "framer-motion";

const TabbedComponent = ({ active, selectTab, children }) => {
    return (
        <button
            onClick={selectTab}
            className={`relative px-4 py-2 text-lg font-medium transition-colors duration-300 ${
                active ? "text-blue-600 dark:text-white" : "text-slate-400 dark:text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            }`}
        >
            {children}
            {active && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 dark:bg-blue-400"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            )}
        </button>
    );
};

export default TabbedComponent;