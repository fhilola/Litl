import React, { useState } from 'react'
import './Navbar.scss'
import { Button, CircleButton, Container, MenuLink } from '../../utils/Utils'
import Logo from '../../assets/images/svg/Logo.svg'
import { NavLink } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { Drawer, Radio, Space } from 'antd';

const Navbar = () => {
  const navigate = [
    {
      name: 'Bosh sahifa',
      link: '/'
    },
    {
      name: 'Referal ulash',
      link: '/connect-referal'
    },
    {
      name: 'QR Code',
      link: '/qr-code'
    },
    {
      name: 'My URL',
      link: '/my-url'
    },
    {
      name: 'Link',
      link: '/link'
    },
    {
      name: 'Sub QR Code',
      link: '/sub-qr-code'
    }
  ]
   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState('right');
  const onClose = () => {
    setOpen(false);
  };
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
            <Button >Taklif Havola</Button>
            <CircleButton type='menu' onClick={() => {
              setOpen(!open)
              console.log(open);
            }}><FiMenu/></CircleButton>
          </div>
          {
            open && <Drawer
        placement={placement}
        closable={true}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <ul className='menu-ul'>
          {
            navigate.map((item, index) =>
            <MenuLink key={index} to={item.link}>{item.name}</MenuLink>
            )
          }
        </ul>
      </Drawer>
          }
      </nav>
        </Container>
    </header>
  )
}

export default Navbar