import React from 'react'
import './Partner.scss'
import { Container, DifferentText } from '../../utils/Utils'
import bitly from '../../assets/images/svg/bitly.svg'
import behance from '../../assets/images/svg/behance.svg'
import ielts from '../../assets/images/svg/ielts.svg'

const Partner = () => {
  return (
    <section className='partner'>
        <Container>
            <h3>Biz bilan hamkorlikdagi <DifferentText>kompaniyalar</DifferentText></h3>
            <div className="partners__wrapper">
                <img src={bitly} alt="" />
                <img src={bitly} alt="" />
                <img src={behance} alt="" />
                <img src={ielts} alt="" />
                <img src={ielts} alt="" />
            </div>
        </Container>
    </section>
  )
}

export default Partner