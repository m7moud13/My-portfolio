import React from 'react'

export const About = () => {
    return (
        <div name="about" className='h-screen bg-[#0a192f] w-full flex flex-col justify-center items-center '>
            <h1 className='text-4xl lg:text-6xl 2xl:text-7xl text-center mb-3 border-b-[3px] border-pink-500 py-2 text-gray-100'>About</h1>
            <div className='max-w-[1000px] grid md:grid-cols-2 gap-8 p-4'>
            <h1 className='text-4xl mt-6 md:text-xl md:ml-10 lg:text-4xl lg:mt-3  font-bold text-gray-200  leading-[44px] md:text-right'>Hi. I'm Mahmoud, nice to meet you. Please take a look around.</h1>
            <p className='text-gray-400 lg:text-xl'>
            Hello !    I am Mahmoud From Egypt I'am 19 y old I Started to learn programming From like a year ago and I like is Especially web Development and hear I'am like to craft solid and Scalable Front-End Products.
            </p>
            </div>
        </div>
    )
}
