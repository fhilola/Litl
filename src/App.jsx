import Footer from './layout/footer/Footer'
import Navbar from './layout/navbar/Navbar'
import RouteController from './routes'
import './sass/App.scss'

function App() {

  return (
    <>
      <Navbar/>
      <RouteController/>
      <Footer/>
    </>
  )
}

export default App
