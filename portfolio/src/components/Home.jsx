import { useNavigate } from "react-router-dom"
import '../styles/home.css'
import matias from '../assets/matias.png'

const Home = () => {
  const navigate = useNavigate()

  return (
    <section className="home">
      <div className="home-text">
        <h1>Soy <span>Matias.</span></h1>
        <h2>Estudio para ser <span>Ingeniero</span></h2>

        <div className="home-buttons">
          <button onClick={() => navigate('/quien-soy')}>Conocerme</button>
          <button onClick={() => navigate('/contacto')}>Contactarme</button>
        </div>
      </div>

      <div className="matias-image">
        <img src={matias} alt="Matias" />
      </div>
    </section>
  )
}

export default Home
