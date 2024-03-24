import React, { useState } from 'react'
import './Menu.scss'
import { IoClose } from "react-icons/io5";

const Menu = ({open, setOpen}) => {
  return (
    <div className="overlay">
        <aside className={open ? 'menu-aside' : 'active'}>Menu
        <button onClick={() => setOpen(!open)}><IoClose/></button>
        </aside>
    </div>
  )
}

export default Menu