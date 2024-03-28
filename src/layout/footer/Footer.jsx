import React from 'react'
import './Footer.scss'
import logo from '../../assets/images/svg/logo2.svg'
import { CircleButton, Container } from '../../utils/Utils'
import { TfiLinkedin } from "react-icons/tfi";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
        <div className='about'>
          <div>
            <img src={logo} alt="" />
          </div>
        <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabatini yaratishga yordam beradigan platforma</p>
        <div className="icons__wrapper">
          <CircleButton><TfiLinkedin/></CircleButton>
          <CircleButton><BsInstagram/></CircleButton>
          <CircleButton><BsTelegram/></CircleButton>
          <CircleButton><FaFacebookF/></CircleButton>
        </div>
        </div>
        <div className="footer-menu__wrapper">
          <ul className='footer-menu'>
          <li>
            <Link to='/'>Menu</Link>
          </li>
          <li>
            <Link to='/'>Bosh sahifa</Link>
          </li>
          <li>
            <Link to='/'>Referal ulash</Link>
          </li>
          <li>
            <Link to='/'>QR Code</Link>
          </li>
          <li>
            <Link to='my-url'>URL havola</Link>
          </li>
        </ul>
        <ul className='footer-menu'>
          <li>
            <Link to='/'>Kompaniya</Link>
          </li>
          <li>
            <Link to='/'>Biz haqimizda</Link>
          </li>
          <li>
            <Link to='/'>Yordam markazi</Link>
          </li>
          <li>
            <Link to='/'>Bizning jamoa</Link>
          </li>
          <li>
            <Link to='my-url'>URL havola</Link>
          </li>
        </ul>
        <ul className='footer-menu'>
          <li>
            <Link to='/'>Xizmatlar</Link>
          </li>
          <li>
            <Link to='/'>Link qisqartirish</Link>
          </li>
          <li>
            <Link to='/'>Referal ulash</Link>
          </li>
          <li>
            <Link to='/'>QR Code yaratish</Link>
          </li>
          <li>
            <Link to='/'>Havolalarni birlashtirish</Link>
          </li>
        </ul>
        </div>
      </div>
      </Container>
    </footer>
  )
}

export default Footer