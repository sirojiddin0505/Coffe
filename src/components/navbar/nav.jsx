import React from 'react'
import './nav.css'
import logo from '../images/Logo.svg'

const nav = () => {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__left">
                <a href="#"><img src={logo} alt="logo bor" className="navbar__img"/></a>
            </div>
            <div className="nav__right">
                <a href="#" className="nav__link">HOME</a>
                <a href="#" className="nav__link">ABOUT US</a>
                <a href="#" className="nav__link">CREATE YOUR PLANE</a>
            </div>
            <div className="hum__menu">≡</div>
        </div>
    </nav>
)
}

export default nav