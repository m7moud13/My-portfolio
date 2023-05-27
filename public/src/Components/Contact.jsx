import React, { useEffect } from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
const Contact = () => {
  useEffect(() => {
    Aos.init({duration:2000})
},[])
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' data-aos="fade-up">
        <form method='POST' action="https://getform.io/f/122b2bc5-9f69-43c0-a3eb-940f4bf62fc2" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - mahmoudkameel13@gmail.com</p>
            </div>
            <input className='focus:placeholder:opacity-0 duration-300 focus:outline-none bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='focus:placeholder:opacity-0 duration-300 focus:outline-none my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='focus:placeholder:opacity-0 duration-300 focus:outline-none bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='  text-white border-2 duration-300 rounded-md hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact