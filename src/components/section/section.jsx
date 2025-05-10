import './section.css'
import { FaRegCircle } from "react-icons/fa";

const Section = () => {
  return (
    <div className='section'>
        <div className="container section__container">
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
)
}

export default Section