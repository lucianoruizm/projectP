import { Divide as Hamburger } from 'hamburger-react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/panaleraMibbLogo-removebg-preview.png';

import './Navbar.css';

export const Navbar = () => {

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
                  <a href="#gallery">
                    <li>Inicio</li>
                  </a>
                  <a href="#h1">
                    <li>Productos</li>
                  </a>
                  <Link to={'/favoritos'}>
                  <li>Favoritos</li>
                  </Link>
                  <a href="#contact">
                    <li>Contacto</li>
                  </a>
                </ul>
          </nav>
          <Hamburger onToggle={handleToggle} />
        </div>
      </header>
      <div className={`${navbarOpen ? " show-menu" : "hide-menu"}`}>
          <nav className="modal-navbar">
            <ul className="modal-navbar__items">
              <a href="#gallery">
                    <li>Inicio</li>
              </a>
              <a href="#h1">
                  <li>Productos</li>
              </a>
              <Link to={'/favoritos'}>
                  <li>Favoritos</li>
              </Link>
              <a href="#contact">
                  <li>Contacto</li>
              </a>
            </ul>
          </nav>
      </div>
    </>
  )
}