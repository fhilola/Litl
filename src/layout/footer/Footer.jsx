import React from 'react'
import './Footer.scss'
import logo from '../../assets/images/svg/logo2.svg'
import { CircleButton, Container } from '../../utils/Utils'
import { TfiLinkedin } from "react-icons/tfi";
import { BsInstagram, BsTelegram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

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
          <li>Menu</li>
          <li>Bosh sahifa</li>
          <li>Referal ulash</li>
          <li>QR Code</li>
          <li>URL havola</li>
        </ul>
        <ul className='footer-menu'>
          <li>Kompaniya</li>
          <li>Biz haqimizda</li>
          <li>Yordam markazi</li>
          <li>Bizning jamoa</li>
          <li>URL havola</li>
        </ul>
        <ul className='footer-menu'>
          <li>Xizmatlar</li>
          <li>Link qisqartirish</li>
          <li>Referal ulash</li>
          <li>QR Code yaratish</li>
          <li>Havolalarni birlashtirish</li>
        </ul>
        </div>
      </div>
      </Container>
    </footer>
  )
}

export default Footer