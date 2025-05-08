import React from 'react'
import './footer.css'
import { FaFacebook, FaTelegram, FaInstagram} from "react-icons/fa";
import logo from '../images/logo.svg'


const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="footer__logo">
                <img src={logo} alt="" className="footer__logo" />
            </div>
            <div className="footer__center">
                <a href="" className="footer__link">HOME</a>
                <a href="" className="footer__link">ABOUT US</a>
                <a href="" className="footer__link">CREATE PLAN</a>
            </div>
            <div className="footer__right">
                <FaInstagram className='icon'/>
                <FaTelegram className='icon'/>
                <FaFacebook className='icon'/>
            </div>
        </div>
    </footer>
)
}

export default Footer