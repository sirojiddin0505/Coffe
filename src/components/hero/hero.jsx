import React from "react";
import './hero.css'
import hero1 from '../images/hero1.svg'

const Hero = ()=>{
    return(
    <div className="hero">
        <div className="container hero__container">
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
    </div>
    )
}
export default Hero