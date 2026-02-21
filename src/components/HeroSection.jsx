import { sociallink } from "../../constant/ListData"

const HeroSection = () => {
  return (
  
     <section className=" flex flex-col gap-5 items-center justify-center  min-h-screen w-full">
         <h6 className="font-medium text-2xl">Hello, my name is</h6>
       
         <h1 className="font-semibold text-6xl md:text-7xl tracking-tight">Vasanth.j</h1>
         <div className="flex mt-5 space-x-7 md:space-x-15">
         {
          sociallink.map((item,index)=>
            (<a className=" text-lg md:text-xl hover:underline" href={item.link} key={index}>
                 {item.name}
            </a>))
         }
         </div>
     </section>
  )
}

export default HeroSection
