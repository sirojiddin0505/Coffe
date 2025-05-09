import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h1 className="header__title">Great coffee made simple.</h1>
            <p className="header__text">Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <button className="header__btn">Create Your Plane</button>
        </div>
    </header>     
)
}

export default Header