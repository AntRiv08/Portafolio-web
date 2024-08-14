import { useState } from 'react'
import './Navbar.css'
import { NavbarMovile } from './NavbarMovile/NavbarMovile'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
  }
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      sectionElement.scrollIntoView({ behavior: 'smooth' })
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
      setOpenMenu(false)
    }
  }
  return (
    <>
      <NavbarMovile isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          {/* <img className='nav-logo' src='' alt='' /> */}
          <span className='nav-name'>Antonio Rivera</span>
          <ul>
            <li>
              <a className='menu-item' onClick={() => scrollToSection('hero')}>
                Inicio
              </a>
            </li>
            <li>
              <a
                className='menu-item'
                onClick={() => scrollToSection('skills')}
              >
                Conocimientos
              </a>
            </li>
            <li>
              <a className='menu-item'>Proyectos</a>
            </li>
            <button
              className='contact-btn'
              onClick={() => scrollToSection('contact')}
            >
              Contactame
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span
              className='material-symbols-outlined'
              style={{ fontSize: '1.8rem' }}
            >
              {openMenu ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  )
}
