import React from 'react'
import './Link.scss'
import { Form } from '../../../utils/Utils'

const Link = () => {
  return (
    <div className='link'>
      <h4 className='link-title'>Uzun havolani qisqartirish</h4>
      <Form text='Qisqartirish'>
        <label htmlFor="link">URL manzilini joylashtiring
          <input type="text" placeholder='https://uzun-link_litl.uz/qisqatirib_bering'/>
        </label>
        
      </Form>
    </div>
  )
}

export default Link