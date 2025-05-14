import React from 'react'
import './footer.css'
import { FaFacebook, FaTelegram, FaInstagram} from "react-icons/fa";
import footerlogo from '../footer/images/footer.logo.svg'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <div className="footer__logo">
                <img src={footerlogo} alt="" className="footer__logo" />
            </div>
            <div className="footer__center">
                <a href="" className="footer__link">HOME</a>
                <a href="" className="footer__link">ABOUT US</a>
                <a href="" className="footer__link">CREATE PLAN</a>
            </div>
            <div className="footer__right">
                <a href="" className="footer__links"><FaInstagram className='icon'/></a> 
                <a href="" className="footer__links"><FaTelegram className='icon'/></a> 
                <a href="" className="footer__links"><FaFacebook className='icon'/></a> 
            </div>
        </div>
    </footer>
)
}

export default Footer