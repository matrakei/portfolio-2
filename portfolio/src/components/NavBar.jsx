import '../styles/navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">¿Quién soy?</a></li>
        <li><a href="#">Habilidades</a></li>
        <li><a href="#">Proyectos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
