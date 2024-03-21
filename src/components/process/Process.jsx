import React from 'react'
import './Process.scss'
import { CircleButton, Container, DifferentText } from '../../utils/Utils'

const Process = () => {
  return (
    <section className='process'>
        <Container>
            <h3 className='title'>Saytdan oson foydalanish <DifferentText>jarayoni</DifferentText></h3>
            <div className="process-content">
                <div className="process-card">
                    <CircleButton type='large'>1</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
                <div className="process-card">
                    <CircleButton type='large'>2</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
                <div className="process-card">
                    <CircleButton type='large'>3</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
                <div className="process-card">
                    <CircleButton type='large'>4</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
                <div className="process-card">
                    <CircleButton type='large'>5</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
                <div className="process-card">
                   <CircleButton type='large'>6</CircleButton>
                <h5>Linkni joylashtiring</h5>
                <p>Butun dunyo bo'ylab auditoriyani bog'lashga, havolalar va QR kodlarini boshqarishga va brendni o'zaro munosabati.</p>
                </div>
                
            </div>
        </Container>
    </section>
  )
}

export default Process