import HeroSection from '../src/components/HeroSection'
import ProfileSection from '../src/components/ProfileSection'
import ProjectSection from '../src/components/ProjectSection'
import Skillssection from '../src/components/Skillssection'

const HomePage = () => {
  return (
    <div className="bg-bg dark:bg-darkbg text-text-primary dark:text-text-dark">
        <HeroSection/>
        <ProfileSection/>
        <Skillssection/>
        <ProjectSection/>
    </div>
  )
}

export default HomePage
