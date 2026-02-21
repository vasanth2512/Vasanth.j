import { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from '../Pages/HomePage';
import AbouPage from '../Pages/AbouPage';
import ProjectPage from '../Pages/ProjectPage';
import Footer from './components/Footer';

const App = () => {

  const [mode,SetMode] = useState(false);
  return (
    <div className={`${mode ? "dark" : ""}`}>
       <Navbar mode={mode} SetMode={SetMode}/>
       <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/about' element={<AbouPage/>} />
            <Route path='/projects' element={<ProjectPage/>} />
         </Routes>
       </BrowserRouter>
       <Footer/>
    </div>
  )
}

export default App
