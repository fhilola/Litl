import React, { useState } from 'react'
import './Utils.scss'
import { FaPlus, FaMinus } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";


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

const CircleButton = ({ children, type, onClick }) => {
  return (
    <button onClick={onClick} className={type === 'menu' ? 'circle-btn circle-btn--menu' : type === 'large' ? 'circle-btn circle-btn--large' : type === 'small' ? 'circle-btn circle-btn--small' : 'circle-btn'}>{children}</button>
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

const MenuLink = ({ children, to }) => {
  return (
    <li className='menu-li'>
      <NavLink className={({ isActive }) => isActive ? 'menu-link menu-link--active' : 'menu-link'} to={to}>{children}</NavLink>
    </li>
  )
}


const StatisticCards = ({ data, type }) => {
  return (
    <div className={type === 'line' ? "statistics__wrapper line" : "statistics__wrapper"}>
      {
        data.map((item, index) =>
          <div className='statistic-card' key={index}>
            <div>
              <h4 className='statistic-number'>{item.number}</h4>
              <p>{item.description}</p>
            </div>
            <CircleButton type='small'><FaRegUser /></CircleButton>
          </div>
        )
      }
    </div>
  )
}

export { Container, Button, DifferentText, Form, CircleButton, QandA, MenuLink, StatisticCards }