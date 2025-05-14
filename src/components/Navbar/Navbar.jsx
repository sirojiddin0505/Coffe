import './Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../Navbar/images/Logo.svg'

const Nav = () => {
  return (
    <nav>
        <div className="container nav__container">
            <div className="nav__left">
                <a href="#"><img src={logo} alt="logo bor" className="navbar__img"/></a>
            </div>
            <div className="nav__right">
                <NavLink to={'/'} className={'nav__link'}>Home</NavLink>
                <NavLink to={'/about'} className={'nav__link'}>About</NavLink>
                <NavLink to={'/plan'} className={'nav__link'}>Create Your Plane</NavLink>
            </div>
            <div className="hum__menu">≡</div>
        </div>
    </nav>
)
}

export default Nav