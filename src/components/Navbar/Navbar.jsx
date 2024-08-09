import { useState } from 'react'
import './Navbar.css'
import { NavbarMovile } from './NavbarMovile/NavbarMovile'

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const toggleMenu = () => {
    setOpenMenu(!openMenu)
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
