import React, { useEffect } from 'react'
import Tailwind from "../images/tailwind.png"
import Css from "../images/css.png"
import Html from "../images/html.png"
import react from "../images/react.png"
import redux from "../images/redux-icon.png"
import github from "../images/github.png"
import javascript from "../images/javascript.png"
import SASS from "../images/SASS.png"
import Typescript from "../images/Typescript.png"
import Bootstrap from "../images/Bootstrap.png"
import Aos from 'aos'
import "aos/dist/aos.css"
import MUi from '../images/MUI.png'
import chatgpt from '../images/chatgpt.png'
export const Skills = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    const skillz = [
        {
            name: "HTml",
            image: Html
        },
        {
            name: "Css",
            image: Css,
        },
        {
            name:"JavaScript",
            image:javascript,
        },
        {
            name: "React.js",
            image: react,
        },
        {
            name:"Tailwind",
            image:Tailwind
        },
        {
            name:"Redux.js",
            image:redux,
        },
        {
            name:"Github",
            image:github,
        },
        {
            name: "SASS",
            image: SASS,
        },
        {
            name:"Typescript",
            image:Typescript,
        },
        {
            name:"Bootstrap",
            image:Bootstrap,
        },
        {
            name:"MUI",
            image:MUi,
        },
        {
            name:"Chatgpt",
            image:chatgpt,
        }
    ]
    
    return (
        <div name="skills" className='h-screen bg-[#0a192f]  w-full flex flex-col justify-center items-center'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
        <div className='max-w-[1000px]'data-aos="fade-up" >
                <h1 className='text-4xl mr-auto w-fit m-4 lg:text-6xl 2xl:text-7xl  mb-3 border-b-[3px] border-pink-500 py-2 text-gray-100'>Skills</h1>
                <p className='py-4 text-gray-300 md:text-xl'>// These are the technologies I've worked with</p>
            </div>
            <div className='p-4 grid grid-cols-2 md:grid-cols-4 gap-6' data-aos="flip-right">
                {skillz.map((skill) => (
                    <div className='flex flex-col items-center justify-center px-8 p-2 shadow-2xl hover:scale-105 duration-300' key={skill.name}>
                    <img src={skill.image} className="w-20 mx-auto py-2" alt="" />
                    <p className='text-gray-300 py-4 lg:text-xl '>{skill.name}</p>
                </div>
                ))}
                
            </div>
        </div>
        </div>
    )
}
