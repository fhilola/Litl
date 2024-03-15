import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import MyUrl from './my-url/MyUrl'
import ConnectReferal from './connect-referal/ConnectReferal'

const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={<Home />}/>
        <Route path="my-url" element={<MyUrl />}/>
        <Route path="connect-referal" element={<ConnectReferal />}/>
    </Routes>
  )
}

export default RouteController