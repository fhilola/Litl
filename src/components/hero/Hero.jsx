import React from 'react'
import './Hero.scss'
import { Button, Container, DifferentText } from '../../utils/Utils'
import HeroImage from '../../assets/images/svg/hero-image.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <Container>
        <div className="hero-content__wrapper">
          <div className="hero-content">
            <h1>Kuchli raqamli<DifferentText> Link</DifferentText>larni yarating</h1>
            <p>Auditoriyangizni jalb qilish va ularni to‘g‘ri ma’lumotlar bilan bog‘lash uchun bizning URL qisqartiruvchimiz, QR kodlarimizdan foydalaning. <a href='/' className='different-text'>Liltl</a> sayti ichidagi hamma narsani yarating, tahrirlang va kuzatib boring.</p>
            <div>
              <Button>Bepul boshlash</Button>
            </div>
          </div>
          <div className="hero-image">
            <img src={HeroImage} alt="" />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Hero