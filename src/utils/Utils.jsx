import React from 'react'
import './Utils.scss'

const Container = ({children}) => {
  return (
    <div className='container'>{children}</div>
  )
}

const Button = ({children, appearence, type, onClick}) => {
  return (
    <button className={appearence ? `btn ${appearence}` : 'btn'} type={type} onClick={onClick}>{children}</button>
  )
}

 const DifferentText = ({children}) => {
  return (
    <span className='different-text'>{children}</span>
  )
 }

 const Form = ({children, text}) => {
  return (
    <form className='form'>
      {children}
      <div>
        <Button type='submit' >{text}</Button>
      </div>
    </form>
  )
 }

export {Container, Button, DifferentText, Form}