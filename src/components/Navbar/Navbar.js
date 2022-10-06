import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import logo from '../../images/panaleraMibbLogo-removebg-preview.png';

import './Navbar.css';

const Navbar = () => {

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }

  return (
    <>
      <header>
        <div className='header-navigation'>
          <img src={logo} alt='logo' className='img-logo'/>
          <nav className="desktop-navbar">
                <ul className='list-container'>
                  <a href=""><li>Inicio</li></a>
                  <a href=""><li>Productos</li></a>
                  <a href=""><li>Contacto</li></a>
                </ul>
          </nav>
          <Hamburger onToggle={handleToggle} />
        </div>
      </header>
      <div className={`${navbarOpen ? " show-menu" : "hide-menu"}`}>
          <nav className="modal-navbar">
            <ul className="modal-navbar__items">
              <a href=""><li>Inicio</li></a>
              <a href=""><li>Productos</li></a>
              <a href=""><li>Contacto</li></a>
            </ul>
          </nav>
      </div>
    </>
  )
}

export default Navbar;