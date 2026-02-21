import vasanth from '../assets/vasanth.png'

const ProfileSection = () => {
  return (
    <section className="min-h-screen w-full bg-bg dark:bg-darkbg text-text-primary dark:text-text-dark ">
         <div className="flex justify-center items-center  flex-col">

            <div className="flex items-center justify-center border-0 border-white hover:border-10 h-60 w-60  transition ease-in-out duration-1000">
                <img src={vasanth} className='object-fill w-55 h-55' alt="profile" />
            </div>

            <div className="flex flex-col mt-10 gap-4 px-4 md:px-0 max-w-3xl md:max-w-5xl">
                <div className='text-sm md:text-2xl  font-mono'>I’m a developer who turns ideas into scalable, real-world digital solutions.<br/>
                    Passionate about clean architecture, thoughtful design, and meaningful user experiences, I enjoy transforming complex problems into simple, elegant code.</div>
               <div className='text-sm md:text-2xl font-mono'>Beyond development, I’m curious about technology, human potential, creativity, and how innovation can positively impact everyday life.</div>
            </div>

         </div>     
    </section>
  )
}

export default ProfileSection
