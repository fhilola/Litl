import React, { useState } from 'react'
import './Utils.scss'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { Collapse, Divider } from 'antd';


const Container = ({ children }) => {
  return (
    <div className='container'>{children}</div>
  )
}

const Button = ({ children, appearence, type, onClick }) => {
  return (
    <button className={appearence ? `btn ${appearence}` : 'btn'} type={type} onClick={onClick}>{children}</button>
  )
}

const DifferentText = ({ children }) => {
  return (
    <span className='different-text'>{children}</span>
  )
}

const Form = ({ children, text }) => {
  return (
    <form className='form'>
      {children}
      <div>
        <Button type='submit' >{text}</Button>
      </div>
    </form>
  )
}

const CircleButton = ({ children, type }) => {
  return (
    <button className={type === 'menu' ? 'circle-btn circle-btn--menu' : type === 'large' ? 'circle-btn circle-btn--large' : type === 'small' ? 'circle-btn circle-btn--small' : 'circle-btn'}>{children}</button>
  )
}

const QandA = ({ question, answer, index }) => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  }
  return (
    <div className='item'>
      <div className="accordion-title" onClick={() => toggle(index)}>
        <h2>{question}</h2>
        <span>{selected === index ? <FaMinus /> : <FaPlus />}</span>
      </div>
      <div className={selected === index ? 'content show' : 'content'}>{answer}</div>
    </div>
  )
}

export { Container, Button, DifferentText, Form, CircleButton, QandA }