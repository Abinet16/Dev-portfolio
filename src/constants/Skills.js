// --- START OF FILE Skills.js ---

import { 
    SiC, 
    SiCplusplus, 
    SiJavascript, 
    SiHtml5, 
    SiCss3, 
    SiRedis, 
    SiReact, 
    SiNodedotjs, 
    SiExpress, 
    SiNextdotjs, 
    SiMongodb, 
    SiTailwindcss, 
    SiMui, 
    SiGithub, 
    SiVisualstudiocode,
    SiGo, 
    SiPostgresql, 
    SiRadixui 
} from "react-icons/si";

export const SkillCategories = {
    "Frontend Development": [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
        { name: "React Native", icon: SiReact, color: "#61DAFB" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
        { name: "CSS3", icon: SiCss3, color: "#1572B6" },
        { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "MUI", icon: SiMui, color: "#007FFF" },
        { name: "Shadcn UI", icon: SiRadixui, color: "#000000" }, // Used Radix icon (underlying tech)
    ],
    "Backend & Database": [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Express.js", icon: SiExpress, color: "#000000" },
        { name: "Go", icon: SiGo, color: "#00ADD8" },
        { name: "C++", icon: SiCplusplus, color: "#00599C" },
        { name: "C", icon: SiC, color: "#A8B9CC" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "PostgresQL", icon: SiPostgresql, color: "#4169E1" }, // Using PostgreSQL as the representative SQL icon
        { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
    "Tools & Environment": [
        { name: "GitHub", icon: SiGithub, color: "#181717" },
        { name: "VS Code", icon: SiVisualstudiocode, color: "#007ACC" },
    ]
};