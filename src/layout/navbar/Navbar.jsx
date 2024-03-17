import React from 'react'
import './Navbar.scss'
import { Button, Container } from '../../utils/Utils'
import Logo from '../../assets/images/svg/Logo.svg'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  return (
    <header className='header'>
        <Container>
      <nav className='navbar'>
          <img className='navbar-logo' src={Logo} alt="" />
          <ul className='navbar-menu-list'>
            <li className='navbar-menu-item'>
              <NavLink to={'/'} className={({isActive})=> isActive ? 'navbar-menu-link navbar-menu-link--active' : 'navbar-menu-link'}>Bosh sahifa</NavLink>
            </li>
            <li>
              <NavLink to={'connect-referal'} className={({isActive})=> isActive ? 'navbar-menu-link navbar-menu-link--active' : 'navbar-menu-link'}>Referal ulash</NavLink>
            </li>
            <li>
              <NavLink to={'qr-code'} className={({isActive})=> isActive ? 'navbar-menu-link navbar-menu-link--active' : 'navbar-menu-link'}>QR Code</NavLink>
            </li>
            <li>
              <NavLink to={'my-url'} className={({isActive})=> isActive ? 'navbar-menu-link navbar-menu-link--active' : 'navbar-menu-link'}>URL havolam</NavLink>
            </li>
          </ul>
          <div className="nav-action__wrapper">
            <Button>Kirish</Button>
            <Button>Taklif Havola</Button>
            <button className='navbar-menu-btn'><FiMenu/></button>
          </div>
      </nav>
        </Container>
    </header>
  )
}

export default Navbar