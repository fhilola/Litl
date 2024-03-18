import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import MyUrl from './my-url/MyUrl'
import ConnectReferal from './connect-referal/ConnectReferal'
import QrCode from './qr-code/QrCode'
import Link from './sub-routes/link/Link'
import SubQrCode from './sub-routes/sub-qr-code/SubQrCode'
import SubConnect from './sub-routes/sub-connect/SubConnect'

const RouteController = () => {
  return (
    <Routes>
        <Route path="" element={<Home />}>
          <Route index element={<Link/>}/>
          <Route path="/sub-qr-code" element={<SubQrCode/>}/>
          <Route path="/sub-connect" element={<SubConnect/>}/>
        </Route>
        <Route path="connect-referal" element={<ConnectReferal />}/>
        <Route path="qr-code" element={<QrCode />}/>
        <Route path="my-url" element={<MyUrl />}/>
    </Routes>
  )
}

export default RouteController