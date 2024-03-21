import React from 'react'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import LittleActions from '../../components/little-actions/LittleActions'
import Process from '../../components/process/Process'
import Service from '../../components/service/Service'
import Partner from '../../components/partner/Partner'

const Home = () => {
  return (
    <main>
      <Hero/>
      <LittleActions/>
      <Process/>
      <Service/>
      <Partner/>
    </main>
  )
}

export default Home