import React from 'react'
import './NavbarMovile.css'
export const NavbarMovile = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
          <ul>
            <li>
              <a className='menu-item'>Inicio</a>
            </li>
            <li>
              <a className='menu-item'>Estudios</a>
            </li>
            <li>
              <a className='menu-item'>Conocimientos</a>
            </li>
            <li>
              <a className='menu-item'>Proyectos</a>
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Contactame
            </button>
          </ul>
        </div>
      </div>
    </>
  )
}
