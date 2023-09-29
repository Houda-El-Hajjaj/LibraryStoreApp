import { NavLink } from 'react-router-dom'
import './navbar.css'
import { FaShoppingBasket } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
      <div className="logo">
      <img src='logobookstore.png' alt='logo' className="logo-book" />
      </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/About">About</NavLink>
            </li>
            <li>
              <NavLink to="/basketbook"><FaShoppingBasket  /> </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar