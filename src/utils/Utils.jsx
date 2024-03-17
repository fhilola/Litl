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

export {Container, Button}