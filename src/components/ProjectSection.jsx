import React from 'react'
import story from "../assets/story.png"
import dlc from "../assets/dlc.png"
import travels from "../assets/travels.png"
import { FaLocationArrow } from "react-icons/fa";






const ProjectSection = () => {
  
  const projects = [
    {
      name:"Story Works",
      link:"https://story-works.vercel.app/",
      desc:"Story Works is a full-stack platform designed to connect users with skilled freelancers for video editing and other creative services. The application enables clients to post project requirements, hire professional video editors and freelancers, collaborate efficiently, and deliver customized content tailored to special moments and creative needs. The platform provides a seamless experience for project management, communication, and secure service delivery.",
      tech:["React","Node.js","Express","MongoDB"],
      img:story
    },
    {
      name:"Digital Lift",
      link:"https://digital-lift.vercel.app/",
      desc:"Digital Lift is a digital marketing company website designed to attract and convert potential clients by showcasing services, portfolio work, and brand expertise. The platform enables businesses to explore marketing solutions, submit project inquiries, and connect directly with the agency for tailored digital growth strategies. The website focuses on creating a strong online presence, building trust, and generating quality client leads through a modern and user-friendly experience.",
      tech:["React","Node.js","Express","MongoDB"],
      img:dlc
    },
     {
      name:"Shanmuga Travels",
      link:"https://www.shanmugatravels.in/",
      desc:"Shanmuga Travels is a travel booking website designed to provide users with a convenient and reliable cab reservation experience. The platform allows customers to explore travel options, book cabs easily, and manage their trips through a simple and user-friendly interface. The website focuses on delivering seamless booking, clear service information, and a smooth customer experience for local and long-distance travel needs.",
      tech:["React","Node.js","Express","MongoDB"],
      img:travels
    }
  ]
  

  
  return (
     
     <section className="min-h-screen w-full bg-bg text-darkbg dark:bg-darkbg dark:text-text-dark ">
        <div className="flex flex-col px-3 py-20 md:px-15 md:pb-20 gap-30 justify-center items-center ">
        
        
           <div  className="flex  flex-col  md:gap-10 md:flex-row justify-start items-start" >
            <div className=" relative h-[300px]  md:min-w-[700px]  md:h-[500px]">
              <img src={story} alt="story" className="object-center rounded-2xl w-full h-full"/>
             <a href="/projects" className="md:absolute md:block hidden  px-3 py-3 rounded-full bg-black/40 bottom-10 right-10">
                 <FaLocationArrow className='text-gray-400 hover:text-white' size={25}/>
             </a>
            </div> 
            <div className="flex mt-3 px-1 md:mt-10 gap-5 flex-col">
                <h1 className='text-2xl md:text-3xl font-semibold'>Story Works</h1>
                <p className='text-sm md:text-base font-mono'>Story Works is a full-stack platform designed to connect users with skilled freelancers for video editing and other creative services. The application enables clients to post project requirements, hire professional video editors and freelancers, collaborate efficiently, and deliver customized content tailored to special moments and creative needs. The platform provides a seamless experience for project management, communication, and secure service delivery.</p>
                <ul className='text-sm md:text-base gap-2 flex flex-row'>
                  <li className='hover:underline cursor-pointer'>React |</li>
                  <li className='hover:underline cursor-pointer'>Node.js |</li>
                  <li className='hover:underline cursor-pointer'>Express |</li>
                  <li className='hover:underline cursor-pointer'>MongoDB .</li>
                </ul>
                <a href="https://story-works.vercel.app/" className="hover:underline">https://story-works.vercel.app/</a>
            </div>      
          </div>

          <div  className="flex  flex-col  md:gap-10 md:flex-row-reverse justify-start items-start" >
            <div className=" relative h-[300px]  md:min-w-[700px]  md:h-[500px]">
              <img src={dlc} alt="story" className="object-center rounded-2xl w-full h-full"/>
             <a href="/projects" className="md:absolute md:block hidden  px-3 py-3 rounded-full bg-black/40 bottom-10 right-10">
                 <FaLocationArrow className='text-gray-400 hover:text-white' size={25}/>
             </a>
            </div> 
            <div className="flex mt-3 px-1 md:mt-10 gap-5 flex-col">
                <h1 className='text-2xl md:text-3xl font-semibold'>Digital Lift</h1>
                <p className='text-sm md:text-base font-mono'>Digital Lift is a digital marketing company website designed to attract and convert potential clients by showcasing services, portfolio work, and brand expertise. The platform enables businesses to explore marketing solutions, submit project inquiries, and connect directly with the agency for tailored digital growth strategies. The website focuses on creating a strong online presence, building trust, and generating quality client leads through a modern and user-friendly experience.</p>
                <ul className=' gap-2 flex flex-row'>
                  <li className='hover:underline cursor-pointer'>React |</li>
                  <li className='hover:underline cursor-pointer'>Node.js |</li>
                  <li className='hover:underline cursor-pointer'>Express |</li>
                  <li className='hover:underline cursor-pointer'>MongoDB .</li>
                </ul>
                <a href="https://digital-lift.vercel.app/" className="hover:underline">https://digital-lift.vercel.app/</a>
            </div>      
          </div>


          <div  className="flex  flex-col  md:gap-10 md:flex-row justify-start items-start" >
            <div className=" relative h-[300px]  md:min-w-[700px]  md:h-[500px]">
              <img src={travels} alt="travels" className="object-center rounded-2xl w-full h-full"/>
             <a href="/projects" className="md:absolute md:block hidden  px-3 py-3 rounded-full bg-black/40 bottom-10 right-10">
                 <FaLocationArrow className='text-gray-400 hover:text-white' size={25}/>
             </a>
            </div> 
            <div className="flex mt-3 px-1 md:mt-10 gap-5 flex-col">
                <h1 className='text-2xl md:text-3xl font-semibold'>Shanmuga Travels</h1>
                <p className='text-sm md:text-base font-mono'>Shanmuga Travels is a travel booking website designed to provide users with a convenient and reliable cab reservation experience. The platform allows customers to explore travel options, book cabs easily, and manage their trips through a simple and user-friendly interface. The website focuses on delivering seamless booking, clear service information, and a smooth customer experience for local and long-distance travel needs.</p>
                <ul className=' gap-2 flex flex-row'>
                  <li className='hover:underline cursor-pointer'>React |</li>
                  <li className='hover:underline cursor-pointer'>Node.js |</li>
                  <li className='hover:underline cursor-pointer'>Express |</li>
                  <li className='hover:underline cursor-pointer'>MongoDB .</li>
                </ul>
                <a href="https://www.shanmugatravels.in/" className="hover:underline">https://www.shanmugatravels.in/</a>
            </div>      
          </div>
        
        </div>
     </section>
  
)
}

export default ProjectSection
