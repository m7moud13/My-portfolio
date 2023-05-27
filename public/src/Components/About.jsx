import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
export const About = () => {
    useEffect(() => {
        Aos.init({duration:2000})
    },[])
    return (
        <div name="about" className='h-screen bg-[#0a192f] w-full flex flex-col justify-center items-center '>
            <h1 className='text-4xl lg:text-6xl 2xl:text-7xl text-center mb-3 border-b-[3px] border-pink-500 py-2 text-gray-100' data-aos="fade-down">About</h1>
            <div className='max-w-[1000px] grid md:grid-cols-2 gap-8 p-4'>
            <h1 className='text-4xl mt-6 md:text-xl md:ml-10 lg:text-4xl lg:mt-3  font-bold text-gray-200  leading-[44px] md:text-down' data-aos="fade-up">Hi. I'm Mahmoud, nice to meet you. Please take a look around.</h1>
            <p className='text-gray-400 lg:text-xl' data-aos="fade-up"> 
            My Name is Mahmoud and I am from Egypt. I began My journey in Programming about a year ago and have Since found a particular interest in web development. I am passionate about creating robust and expandable front-end products.
            </p>
            </div>
        </div>
    )
}
