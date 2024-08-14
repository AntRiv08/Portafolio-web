import React from 'react'
import './NavbarMovile.css'
export const NavbarMovile = ({ isOpen, toggleMenu }) => {
  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId)
    const offset = 128 // Ajusta el offset según el tamaño de tu navbar o header
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      })
      toggleMenu() // Cierra el menú después de hacer scroll
    }
  }

  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
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
              <a
                className='menu-item'
                onClick={() => scrollToSection('inicio')}
              >
                Proyectos
              </a>
            </li>
            <button
              className='contact-btn'
              onClick={() => scrollToSection('contact')}
            >
              Contactame
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}
