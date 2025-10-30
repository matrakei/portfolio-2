import { NavLink } from 'react-router-dom'
import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo"></div>
      <ul className="nav-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/quien-soy">
            ¿Quién soy?
          </NavLink>
        </li>
        <li>
          <NavLink to="/habilidades">Habilidades</NavLink>
        </li>
        <li>
          <NavLink to="/contacto">Contacto</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
