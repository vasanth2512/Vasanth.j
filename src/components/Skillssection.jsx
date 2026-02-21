import { FaJsSquare } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { GrReactjs } from "react-icons/gr";
import { SiExpress } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";


const Skillssection = () => {
  return (
     <section className="min-h-screen w-full flex flex-col gap-10 justify-center items-center">
          <h1 className=" text-lg px-5 md:px-0 md:text-2xl font-mono font-semibold">Here are some of my best skills.</h1>
          <div className="flex flex-col md:flex-row gap-10">
              <div className="flex flex-col gap-5 group items-center justify-center ">
               <FaHtml5 className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >HTML</h6>
               </div>
               <div className="flex flex-col gap-5 group items-center justify-center ">
               <FaCss3Alt className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Css</h6>
               </div>
               <div className="flex flex-col gap-5 group items-center justify-center ">
               <GrReactjs className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >React js</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <RiNextjsFill className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Next js</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <FaJsSquare className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Java Script</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <IoLogoNodejs className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Node js</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <SiExpress className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Express js</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <RiTailwindCssFill className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >TailWind css</h6>
               </div>
              <div className="flex flex-col gap-5 group items-center justify-center ">
               <SiMongodb className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Mongo Db</h6>
               </div>
                <div className="flex flex-col gap-5 group items-center justify-center ">
               <BiLogoPostgresql className="group-hover:scale-100 cursor-pointer transition-transform duration-300" size={70}/>
               <h6 className="opacity-100 md:opacity-0 translate-y-2 transition-all duration-300 
                 group-hover:opacity-100 group-hover:translate-y-0 " >Postgre Sql</h6>
               </div>
          </div>
     </section>
  )
}

export default Skillssection
