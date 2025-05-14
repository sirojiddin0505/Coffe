import React from 'react'
import './Home.css'
import { FaRegCircle } from 'react-icons/fa'
import hero1 from '../images/hero1.svg'
import main2 from '../images/main2.svg'
import main3 from '../images/main3.svg'
import main4 from '../images/main4.svg'


const Home = () => { 
  return (
<div className="homepage">
    <div className="container">
        <div className='header'>
            <h1 className="header__title">Great coffee made simple.</h1>
            <p className="header__text">Start your mornings with the worlds best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.</p>
            <button className="header__btn">Create Your Plane</button>
        </div>
        <div className="hero">
          <ul className="hero__list">
                <li className="hero__item">
                    <img src={hero1} alt="rasm bor" className="hero__img"/>
                    <h3 className="hero__title">Gran Espresso</h3>
                    <p className="hero__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                </li>
                <li className="hero__item">
                    <img src={hero1} alt="rasm bor" className="hero__img"/>
                    <h3 className="hero__title">Gran Espresso</h3>
                    <p className="hero__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                </li>
                <li className="hero__item">
                    <img src={hero1} alt="rasm bor" className="hero__img"/>
                    <h3 className="hero__title">Gran Espresso</h3>
                    <p className="hero__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                </li>
                <li className="hero__item">
                    <img src={hero1} alt="rasm bor" className="hero__img"/>
                    <h3 className="hero__title">Gran Espresso</h3>
                    <p className="hero__text">Light and flavorful blend with cocoa and black pepper for an intense experience.</p>
                </li>
            </ul>
        </div>
        <div className="main">
            <h2 className="main__title">Why Choose Us?</h2>
            <p className="main__text">A large part of our role is choosing which particular coffees will be featured 
                in our range. This means working closely with the best coffee growers to give 
                you a more impactful experience on every level.</p>
            <ul className="main__list">
                <li className="main__item">
                    <img src={main2} alt="" className="main__img" />
                    <h3 className="main__subtitle">Best Quality</h3>
                    <p className="main__subtext">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </li>
                <li className="main__item center">
                    <img src={main3} alt="" className="main__img" />
                    <h3 className="main__subtitle">Best Quality</h3>
                    <p className="main__subtext">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </li>
                <li className="main__item">
                    <img src={main4} alt="" className="main__img" />
                    <h3 className="main__subtitle">Best Quality</h3>
                    <p className="main__subtext">Discover an endless variety of the world’s best artisan coffee from each of our roasters.</p>
                </li>
            </ul>
        </div>
        <div className="section">
            <h2 className="section__title">How it works</h2>
            <div className="hr__boxs">
                <FaRegCircle/> <hr />
                <FaRegCircle/> <hr />
                <FaRegCircle/> <hr />
            </div>
            <div className="section__box">
                <div className="boxs">
                    <p className="section__number">01</p>
                    <h2 className="section__subtitle">Pick your coffe</h2>
                    <p className="section__text">Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.</p>
                </div>
                <div className="boxs">
                    <p className="section__number">02</p>
                    <h2 className="section__subtitle">Choose the frequency</h2>
                    <p className="section__text">Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.</p>
                </div>
                <div className="boxs">
                    <p className="section__number">03</p>
                    <h2 className="section__subtitle">Receive and enjoy</h2>
                    <p className="section__text">We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience..</p>
                </div>
            </div>
            <button className="section__btn">Create your plan</button>
        </div>
    </div>
</div>
  )
}

export default Home