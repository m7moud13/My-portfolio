import React, { useState } from 'react'
import logo from "../images/logo.png"
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,} from 'react-icons/fa';
import { Link } from 'react-scroll';
const Navbar = () => {
    
    const [open,setopen] = useState(false)
    function opener() {
        setopen(!open)
    }
    return (
    <>
        <div className="fixed w-full flex justify-between max-h-[100px] items-center z-30 p-3 px-4 mb-8 bg-[#0a192f]">
                <img src={logo} alt="" className='max-h-[50px]' />
            <ul className=' hidden md:flex text-gray-400'>
                <li className='px-4 py-2 hover:text-gray-300 duration-300 cursor-pointer'><Link to="home" smooth={true}  duration={1000} >Home</Link></li>
                <li className='px-4 py-2 hover:text-gray-300 duration-300 cursor-pointer'><Link to="about" smooth={true}  duration={1000} >About</Link></li>
                <li className='px-4 py-2 hover:text-gray-300 duration-300 cursor-pointer'><Link to="skills" smooth={true}  duration={1000} >Skills</Link></li>
                <li className='px-4 py-2 hover:text-gray-300 duration-300 cursor-pointer'><Link to="work" smooth={true}  duration={1000} >Work</Link></li>
                <li className='px-4 py-2 hover:text-gray-300 duration-300 cursor-pointer'><Link to="contact" smooth={true}  duration={1000} >Contact</Link></li>
            </ul>
            {/* start mobile meune*/}
        <div className='md:hidden'>
            {open ?<FaTimes size={25} onClick={() => opener()} className="text-gray-300 cursor-pointer z-10 absolute right-8 top-8" /> :<FaBars onClick={() => opener()} size={25} className="text-gray-300 cursor-pointer z-10 absolute right-8 top-8" />}
            <ul className={open ? "w-full h-full fixed flex flex-col p-4 justify-center items-center bg-[#0a192f] left-0 top-0" :"hidden"}>
                <li  className='px-4 py-6 text-5xl text-gray-400 hover:text-gray-300 duration-300 cursor-pointer'><Link onClick={() => opener()} to="home" smooth={true}  duration={500} >Home</Link></li>
                <li  className='px-4 py-6 text-5xl text-gray-400 hover:text-gray-300 duration-300 cursor-pointer'><Link onClick={() => opener()} to="about" smooth={true}  duration={500} >About</Link></li>
                <li  className='px-4 py-6 text-5xl text-gray-400 hover:text-gray-300 duration-300 cursor-pointer'><Link onClick={() => opener()} to="skills" smooth={true}  duration={500} >Skills</Link></li>
                <li  className='px-4 py-6 text-5xl text-gray-400 hover:text-gray-300 duration-300 cursor-pointer'><Link onClick={() => opener()} to="work" smooth={true}  duration={500} >Work</Link></li>
                <li  className='px-4 py-6 text-5xl text-gray-400 hover:text-gray-300 duration-300 cursor-pointer'><Link onClick={() => opener()} to="contact" smooth={true}  duration={500} >Contact</Link></li>
            </ul>
        </div>
        </div>
        <div className='h-screen hidden fixed z-30 left-0 md:flex flex-col items-center justify-center '>
            <div>
                <a href="https://www.linkedin.com/in/mahmoud-kamel-533872267/" target={"_blank"}>
                <div className='flex justify-between pt-4 pr-4 pb-4 w-[180px] text-white bg-blue-600 rounded-sm duration-300 fixed top-[50%] left-[-115px] hover:left-[0px]'>
                <p className=' mr-8 ml-1 text-2xl text-left'>Linkedin</p>
                <FaLinkedin  size={30}/>
            </div>
                </a>
            </div>
            <div >
                <a href="https://github.com/m7moud13" target={"_blank"}>
                <div className='flex justify-between pt-4 pr-4 pb-4 w-[180px] text-white bg-[#333333] rounded-sm duration-300 fixed top-[56%] left-[-115px] hover:left-[0px]'>
                <p className=' mr-8 ml-1 text-2xl text-left'>Github</p>
                <FaGithub  size={30}/>
            </div>
                </a>
            </div>
            <div >
                <a href="https://www.facebook.com/profile.php?id=100014634489866" target={"_blank"}>
                <div className='flex justify-between pt-4 pr-4 pb-4 w-[180px] text-white bg-[#4267B2] rounded-sm duration-300 fixed top-[62%] left-[-115px] hover:left-[0px]'>
                <p className=' mr-8 ml-1 text-2xl text-left'>Facebook</p>
                <FaFacebook  size={30}/>
            </div>
                </a>
            </div>
        </div>
        </>

    )
}

export default Navbar;