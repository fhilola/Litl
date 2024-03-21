import React from 'react'
import './Service.scss'
import { Button, CircleButton, Container, DifferentText } from '../../utils/Utils'
import { FaRegUser } from "react-icons/fa6";

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
            <div className="statistics__wrapper">
                <div className='statistic-card'>
                    <div>
                        <h4 className='statistic-number'>100 K</h4>
                    <p>faol foydalanuvchilar</p>
                    </div>
                    <CircleButton type='small'><FaRegUser/></CircleButton>
                </div>
                <div className='statistic-card'>
                    <div>
                        <h4 className='statistic-number'>50 K</h4>
                    <p>oylik yaratiladigan linklar</p>
                    </div>
                    <CircleButton type='small'><FaRegUser/></CircleButton>
                </div>
                <div className='statistic-card'>
                    <div>
                        <h4 className='statistic-number'>400+</h4>
                    <p>integratsiya</p>
                    </div>
                    <CircleButton type='small'><FaRegUser/></CircleButton>
                </div>
                <div className='statistic-card'>
                    <div>
                        <h4 className='statistic-number'>99%</h4>
                    <p>server yangilanishi</p>
                    </div>
                    <CircleButton type='small'><FaRegUser/></CircleButton>
                </div>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default Service