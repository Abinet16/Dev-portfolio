import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";

export const ProjectList = [
    {
        id: 1,
        name: "Service Management System",
        description:
            "A service management system built with C#, React, and SQL. This application provides with a role based platform for managing various services, including user authentication, service creation, and management. It features a user-friendly interface and robust backend functionality to ensure efficient service handling and data management. .",
        img: authorisation,
        //max 6 tech stack
        tech: ["C#", "SQL", "React", "Redux", "Tailwind", "Google Maps API"],
        source: "https://github.com/Abinet16/Learning-mate-",
        demo: "https://service.getnetsoft.com/",
    },
    {
        id: 2,
        name: "Weather App",
        description:
            "This weather app is a testament to my commitment to creating functional and visually pleasing applications. Explore the world of weather with ease, and stay tuned for more exciting projects in the pipeline!",
        img: discord,
        //max 6 tech stack
        tech: ["React", "Bootstrap ", "Figma UI"],
        source: "https://github.com/Abinet16/",
        demo: "https://tabors-weatherapp.netlify.app/",
    },
     {
        id: 3,
        name: "Learning Mate",
        description:
            "Learning Mate is a comprehensive educational platform designed to enhance the learning experience. It offers a wide range of features including AI-powered study assistance, note-taking capabilities, and a user-friendly interface. The platform is built with React and Tailwind CSS, supbase, , ensuring a responsive and visually appealing design. Whether you're looking to improve your study habits or need help with specific subjects, Learning Mate is here to support your educational journey.",
        img: medconnect,
        //max 6 tech stack
        tech: ["React 18 with TypeScript", "Tailwind CSS", "Supabase for Backend & Auth", 
            "Google's Gemini AI API",
             "PDF.js & Mammoth for Document Processing",
             "Web Speech API for Voice Input",
        ],
        source: "https://github.com/Abinet16/Learning-mate-",
        demo: "https://learning-mate-mu.vercel.app/",
    },
    {
        id: 4,
        name: "Player",
        description:
            "A modern and sleek music player application built with React and Bootstrap CSS. This app offers a seamless user experience with features like playlist management, song search, and intuitive controls. The responsive design ensures optimal performance across all devices, making it easy to enjoy your favorite tunes on the go. Whether you're a casual listener or a music enthusiast, this player is designed to enhance your listening experience with its clean interface and smooth functionality.",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React",  
            "Bootstrap CSS",
            
        ],
        source: "https://github.com/Abinet16/",
        demo: "https://mezmur-player.netlify.app/",
    },
    
    {
        id: 5,
        name: "School Management System",
        description:
            "A comprehensive school management system built with the MERN stack (MongoDB, Express.js, React, Node.js). This application streamlines administrative tasks, enhances communication between teachers, students, and parents, and provides a user-friendly interface for managing student records, attendance, grades, and more. It is designed to improve the overall efficiency of school operations while ensuring data security and accessibility.",
        img: keeper,
        //max 6 tech stack
        tech: ["React", "Tailind CSS", "Node.js", "Express.js", "MongoDB"],
        source: "https://github.com/Abinet16/School-management-system-MERN",
        demo: "",
    },
]


