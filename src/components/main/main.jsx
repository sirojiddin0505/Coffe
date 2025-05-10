import './main.css'
import main2 from '../images/main2.svg'
import main3 from '../images/main3.svg'
import main4 from '../images/main4.svg'


const Main = () =>{
    return(
    <div className="main">
        <div className="container main__container">
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
   </div>
    )
}
export default Main