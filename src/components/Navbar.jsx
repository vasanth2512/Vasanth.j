import { navlist } from '../../constant/ListData'
import { IoMoonOutline } from "react-icons/io5";
import { FiSun } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";

const Navbar = ({mode,SetMode}) => {

    const [isopen,Setisopen] = useState(false);

return (
    <div className="bg-bg w-full dark:bg-darkbg text-text-primary dark:text-text-dark fixed z-50   ">
       <div className="flex items-center justify-between md:px-10 md:py-3 px-3 py-2">
        <div className='md:hidden block font-semibold text-xl'>
            Vasanth.j
        </div>
        <div className='hidden md:block'>

        </div>
        <nav className='md:flex  hidden sm:space-x-10 md:space-x-15 items-center'>
          {
          navlist.map((item,index)=>
            (<a className='cursor-pointer hover:underline' href={item.link} key={index}>
                {item.name}
            </a>))
          
          }
        </nav>
      
        <div className='space-x-4 flex items-center justify-center'>
          
            <RxHamburgerMenu onClick={()=>Setisopen(!isopen)}  className='cursor-pointer md:hidden block' size={25}/>
          <div className='cursor-pointer'  onClick={()=>SetMode(!mode)}>
           {
              mode ?  <FiSun size={25}/> :<IoMoonOutline size={25}/>
           }
           </div>
        </div>
       
        {
           isopen&&(
           <div className="min-h-screen top-0 right-0 fixed w-full  bg-black/90 backdrop-blur-md  ">
             
             <RxCross2 onClick={()=>Setisopen(false)} className='absolute right-5 top-5 text-white' size={25}/>
              <div className="absolute mt-10 ml-15 translate-x-1/2 translate-y-1/2  space-y-5">
              {navlist.map((item,index)=>(
               <a onClick={()=>Setisopen(false)}  href={item.link} key={index} 
                className='  hover:underline flex flex-col  text-white '>{item.name}</a>
                
                ))
              }
              </div>
           </div> ) 
        }
        </div>
    </div>
  )
}

export default Navbar
