import React, { useEffect } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import "aos/dist/aos.css"
import Aos from 'aos'
export const Landing = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <div name="home" className='h-screen bg-[#0a192f] w-full flex justify-center items-center '>
            <div className='m-auto max-w-[1000px]'data-aos="fade-right">
            <p className='text-pink-500 sm:ml-[-2%] lg:text-base '>Hi my name is </p>
            <span className='block ml-0 text-white text-3xl md:text-5xl lg:text-6xl py-1 2xl:py-2'>Mahmoud</span>
            <h1 className='text-gray-400 text-3xl md:text-5xl lg:text-6xl'>I'am a Front-End Develpoer.</h1>
            <p className='text-gray-400 py-4 mb-1 lg:text-xl '>I like to craft solid and Scalable Front-End Produts <br /> with great user experiences.</p>
            <Link to="about" smooth={true}  duration={500}>
            <button className=' group text-white px-4   py-2 md:py-3 md:px-6 border-white border flex items-center duration-300 rounded-md hover:bg-pink-500 hover:border-pink-500'>
                View Work 
                <span className=' group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight size={18} className="ml-3"/>
                </span>
                </button>
                </Link>
            </div>
        </div>
    )
}
