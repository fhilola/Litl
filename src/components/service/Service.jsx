import React from 'react'
import './Service.scss'
import { Button, CircleButton, Container, DifferentText, StatisticCards } from '../../utils/Utils'

import data from '../../data/home.json'

const Service = () => {
  return (
    <section className='service'>
        <Container>
            <div className="service__wrapper">
            <div className="service-content">
                <h3>Nima uchun bizning <DifferentText>xizmatimiz</DifferentText></h3>
                <p>Bizning platformamiz kontentingiz va kuzatuvchilar o'rtasidagi har qanday aloqa nuqtasini harakatga keltirishga yordam berish uchun yaratilgan</p>
                <div>
                    <Button>Bepul boshlash</Button>
                </div>
            </div>
            <StatisticCards data={data}/>
        </div>
        </Container>
    </section>
  )
}

export default Service