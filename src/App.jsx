import {Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

import About from './pages/About.jsx'
import Admin from './pages/Admin.jsx'
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Skills from './pages/Skills.jsx'
import NotFound from './pages/NotFound.jsx'
import ProjectsDetails from './pages/ProjectsDetails.jsx'

export default function App(){
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow px-6 sm:px-10 md:px-14 lg:px-16 xl:px-[100px] bg-white text-darkGray">
        <Routes>
          <Route path="/" element={ 
            <div className="snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
              <Home />
            </div>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectsDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/notfound" element={<NotFound />} />
          {/* Admin route should be protected in a real app */}
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}
