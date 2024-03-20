import React from 'react'
import './Home.scss'
import Hero from '../../components/hero/Hero'
import LittleActions from '../../components/little-actions/LittleActions'
import Process from '../../components/process/Process'

const Home = () => {
  return (
    <main>
      <Hero/>
      <LittleActions/>
      <Process/>
    </main>
  )
}

export default Home