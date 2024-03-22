import React from 'react'
import './Faq.scss'
import { useState } from 'react';
import { Container, DifferentText, QandA } from '../../utils/Utils'



const questions = [
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  },
  {
    question: 'Saytdan foydalanish bepulmi?',
    answer: 'Ha albatta hozircha saytdan foydalanish mutlaqo bepul.',
  }
]

const Faq = () => {
  
  return (
    <section className='faq'>
        <Container>
            <h3>Ko’p so’raladigan <DifferentText>savollar</DifferentText></h3>
            <div className="faq-wrapper">
              <div className='accordion'>
                {
                  questions.map((item, index)=>
                  <QandA key={index} question={item.question} answer={item.answer} index={index}/>
                  )
                }
              </div>
    {/* <div>
      
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '2', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '3', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '4', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '5', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '6', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '7', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div>
    <div>
      <Collapse
      size="large"
      items={[{ key: '8', label: 'This is large size panel header', children: <p>{text}</p> }]}
    />
    </div> */}
            </div>
        </Container>
    </section>
  )
}

export default Faq