import './App.css'
import { ContactMe } from './components/ContactMe/ContactMe'
import { Hero } from './components/Hero/Hero'
import { Navbar } from './components/Navbar/Navbar'
import { Skills } from './components/Skills/Skills'

function App () {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Hero />
        <Skills />
        <ContactMe />
      </div>
    </>
  )
}

export default App
