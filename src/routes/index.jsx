import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import MyUrl from './my-url/MyUrl'
import ConnectReferal from './connect-referal/ConnectReferal'
import QrCode from './qr-code/QrCode'

const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={<Home />}/>
        <Route path="connect-referal" element={<ConnectReferal />}/>
        <Route path="qr-code" element={<QrCode />}/>
        <Route path="my-url" element={<MyUrl />}/>
    </Routes>
  )
}

export default RouteController