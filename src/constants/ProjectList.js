import ecommerce from "../assets/projects/ecommerce.png";
import discord from "../assets/projects/discord.png";
import medconnect from "../assets/projects/medconnect.png";
import keeper from "../assets/projects/keeper.png";
import authorisation from "../assets/projects/authorisation.png";

export const ProjectList = [
    {
        id: 1,
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
        id: 2,
        name: "Player",
        description:
            "player using React JS",
        img: ecommerce,
        //max 6 tech stack
        tech: [
            "React",  
            "Bootstrap CSS",
            "Stripe",
        ],
        source: "https://github.com/Abinet16/",
        demo: "https://mezmur-player.netlify.app/",
    },
   /* {
        id: 3,
        name: "Secret Keeper",
        description:
            "The Secret Keeper built with Node.js, Express.js, and Passport.js, provides a user-friendly platform for secure registration, secret sharing, and anonymous content viewing. It incorporates Google OAuth 2.0 for seamless login. With a focus on ease of use, it showcases modern web development in a straightforward manner, offering a safe and engaging online experience.",
        img: authorisation,
        //max 6 tech stack
        tech: ["Node.js", "Express.js", "EJS", "MongoDB", "Passport.js"],
        source: "https://github.com/Abinet16/",
        demo: null,
    },*/
    {
        id: 4,
        name: "Keeper - Keep Your Notes",
        description:
            "Inspired by Google Keep, Keeper is a note-taking website developed with React and adorned with Tailwind CSS and Material UI. It offers a user-friendly experience, allowing you to effortlessly create and manage notes. The responsive design ensures a seamless experience across all devices, making note-taking a breeze.",
        img: keeper,
        //max 6 tech stack
        tech: ["React", "Bootstrap CSS", "Material UI"],
        source: "https://github.com/Abinet16/",
        demo: "",
    },
 {
        id: 5,
        name: "Medconnect",
        description:
            "MedConnect, an innovative online healthcare platform, redefines the way users access medical expertise. Seamlessly designed using React and tailored libraries, it offers remote consultations for medical advice. While our project is just a frontend prototype, it promises a user-friendly interface, responsive design, and smooth navigation.",
        img: medconnect,
        //max 6 tech stack
        tech: ["React", "Tailwind CSS", "Swiper"],
        source: "https://github.com/Abinet16/",
        demo: "",
    },
];

