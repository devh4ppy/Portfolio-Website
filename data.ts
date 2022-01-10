
import { RiComputerLine } from 'react-icons/ri'
import { DiBootstrap, DiDjango, DiGoogleAnalytics, DiJava, DiPhotoshop, DiPython, DiReact } from 'react-icons/di'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { SiTableau, SiTailwindcss } from 'react-icons/si'
import { FaFigma } from 'react-icons/fa'
import { IProject, IService, ISkill } from './type'


export const services:IService[] = [
    {
        Icon: RiComputerLine,
        title:"Frontend Development",
        about:
        "I can build a beautiful, responsive and scalable website using <b> React.js</b>,<b>Tailwind CSS</b> and <b>JavaScript</b>",
        
    },
    {
        Icon: AiOutlineApi,
        title:"API Development",
        about:
        "I am currently learning to develop robust REST API using <b>django-rest-api</b> & <b>Node API</b>",
        
    },
    {
        Icon: AiOutlineAntDesign,
        title:"UI/UX Designer",
        about:
        "Stunning user interface designer using <b>Figma</b>",
        
    },
    {
        Icon: DiGoogleAnalytics,
        title:"Data Analytics",
        about:
        "I can analyze data using <b>Python</b> & <b>SQL</b>",
        
    },
    {
        Icon: SiTableau,
        title:"Data Visualization",
        about:
        "Analytics data visualization for solving problem using <b>Tableau</b>",
        
    },

]

export const languages:ISkill[] = [
    {
        name:"Python",
        level:"70%",
        Icon:DiPython
    },
    {
        name:"Java Script",
        level:"60%",
        Icon:DiJava
    },
    {
        name:"React js",
        level:"80%",
        Icon:DiReact
    },
    {
        name:"Django",
        level:"70%",
        Icon:DiDjango
    },
    {
        name:"Tailwindcss",
        level:"80%",
        Icon:SiTailwindcss
    },
    {
        name:"Bootstrap",
        level:"80%",
        Icon:DiBootstrap
    },
]

export const tools: ISkill[] = [
    {
        name:"Fimga",
        level:"80%",
        Icon:FaFigma
    },
    {
        name:"Tableau",
        level:"80%",
        Icon:SiTableau
    },{
        name:"Photoshop",
        level:"50%",
        Icon:DiPhotoshop
    },
]

export const projects: IProject[] = [
    {
        name:"Depression Detection on social media",
        description: "Human emotions like depression are inner sentiments of human beings which expose actual behaviors of a person. Analyzing and determining these types of emotions from people’s social activities.",
        image_path: "/image/depression.jpg",
        deployed_url:"https://drive.google.com/drive/folders/1WZN9CesxH2yFUp5C7_VX4H-_schKHDXV?usp=sharing",
        github_url:"",
        key_tech:["HTML","JavaScript","Bootstrap","Naive Bayes Algo"],
    },
    {
        name:"Hulu with REACT.JS",
        description: "First React js Project :) | Typical Video Streaming website using TMDB API",
        image_path: "/image/hulu.jpg",
        deployed_url:"https://nextjs-tailwind-wedsite.vercel.app/",
        github_url:"https://github.com/devh4ppy/Nextjs_Tailwind-wedsite.git",
        key_tech:["Next.js", "Tailwind CSS","Responsive"],
    },
    {
        name:"Portfolio Website",
        description: "minimalistic - animated developer portfolio using Next.js , Tailwind CSS , TypeScript  & Framer Motion.",
        image_path: "/image/Portfolio.jpg",
        deployed_url:"https://portfolio-website-six-mauve.vercel.app/",
        github_url:"https://github.com/devh4ppy/Portfolio-Website",
        key_tech:["React","Next","TypeScript","Tailwind"],
    },
    {
        name:"Sales Insights Data Analysis",
        description: "sales insights data analysis project using tableau. This project give you a feel of how data analysis projects are executed in big companies. My case study is based on a computer business which is facing challenges in dynamically changing market.",
        image_path: "/image/sales.jpg",
        deployed_url:"https://drive.google.com/drive/folders/1GEPjlxp4DQnTa9qILeA1aibc_d7GRmQp?usp=sharing",
        github_url:"",
        key_tech:["SQL","Tableau"],
    },
    {
        name:"Digital Security- Steganography",
        description: "My Diploma Project, on stegnography to encrypt data in image",
        image_path: "/image/Steganography.png",
        deployed_url:"",
        github_url:"",
        key_tech:["Java"],
    },
    {
        name:"Titanic Survival Prediction",
        description: "My B.E mini project on data analysis",
        image_path: "/image/Titanic.png",
        deployed_url:"https://colab.research.google.com/drive/1unk8GwhG0kwuY24sKPZPbIreXyCfK9bg",
        github_url:"",
        key_tech:["Python","Numpy"],
    },
    {
        name:"Node.js Social Media REST API",
        description: "a real-world social media app REST API with login, register, and all CRUD operations using MongoDB models with Node.js routers.",
        image_path: "/image/rest.jpg",
        deployed_url:"",
        github_url:"https://github.com/devh4ppy/REST-API-Social-Media",
        key_tech:["Node.js", "Express.js","MongoDB"],
    },
]
