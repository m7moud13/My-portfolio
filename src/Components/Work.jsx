import React from 'react'
import { MyProjects } from '../Workimages/Workdate'

export const Work = () => {
    const Projects = MyProjects
    
    return (
        <div name="work" className='py-[1000px] sm:py-[400px] h-screen w-full bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
            <h1 className='text-4xl mr-auto w-fit m-4 lg:text-6xl 2xl:text-7xl  mb-3 border-b-[3px] border-pink-500 py-2 text-gray-100'>Work</h1>
                <p className='py-4 text-gray-300 md:text-xl'>// Check out some of my recent work</p>
            </div>
            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {Projects.map((item, index) => (
    <div key={index} style={{ backgroundImage: `url(${item.image})` }}className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center text-center items-center mx-auto content-div ">
        <div className="opacity-0 duration-500  group-hover:opacity-100 ">
        <span className="text-2xl font bold text-white tracking-wider ">
            {item.name}
        </span>
        <div className="pt-8 text-center ">
            <a href={item.github} target="_blank">
            <button
                className="text-center rounded-lg px-4 py-3 m-2
                        bg-white text-gray-700 font-bold text-lg"
            >
                Code
            </button>
            </a>
            <a href={item.live} target="_blank">
            <button
                className="text-center rounded-lg px-4 py-3 m-2
            bg-white text-gray-700 font-bold text-lg"
                >
                Live
            </button>
            </a>
        </div>
        </div>
    </div>
))}
            </div>
            </div>
        </div>
    )
}

                // <div className='rounded-lg group relative'>
                //     <img src={} className="rounded-lg shadow-lg"  alt="" />
                //     <div className='group-hover:block'>
                //         <span className=' bg-blue-400/50 absolute w-full h-full top-0 rounded-lg'></span>
                //         <div className=''>
                //             <h1 className='text-white'>React , Tailwind</h1>
                //             <div className='flex justify-between items-center'>
                //                 <a href=""><button className='py-2 px-3 bg-white text-black rounded-lg font-bold '>Demo</button></a>
                //                 <a href=""><button className='py-2 px-3 bg-white text-black rounded-lg font-bold '>Code</button></a>
                //             </div>
                //         </div>
                //     </div>
                // </div>