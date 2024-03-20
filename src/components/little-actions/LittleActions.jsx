import './LittleActions.scss'
import { Button, Container, DifferentText } from '../../utils/Utils'
import { NavLink, Outlet } from 'react-router-dom'
import { BsQrCode, BsLink45Deg } from "react-icons/bs";
import { PiLinkSimpleLight } from "react-icons/pi";

const LittleActions = () => {
    return (
        <section className='Url'>
            <Container>
                <h3 className='title'>Bepul hisob oching va <DifferentText>Litl</DifferentText>-ni ishga tushiring</h3>
                <strong className='url-text'>Ajoyib ulanishlar bosish bilan boshlanadi</strong>
                <div className="actions__wrapper">
                    <ul className='url-list'>
                        <li className='url-item'>
                            <NavLink to='' className={({ isActive }) => isActive ? 'url-link url-link--active' : 'url-link'}><PiLinkSimpleLight />Link</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sub-qr-code' className={({ isActive }) => isActive ? 'url-link url-link--active' : 'url-link'}><BsQrCode />QR Code</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sub-connect' className={({ isActive }) => isActive ? 'url-link url-link--active' : 'url-link'}><BsLink45Deg />Birlashtirish</NavLink>
                        </li>
                    </ul>
                    <div className="action-content">
                        <Outlet/>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default LittleActions