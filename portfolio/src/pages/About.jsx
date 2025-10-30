import '../styles/about.css'
import matias from '../assets/matias.png' 

const About = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={matias} alt="Matias" />
      </div>

      <div className="about-info">
        <h2>Sobre mí</h2>
        <p>
          ¡Hola! Soy Matías, estudiante apasionado por la ingeniería y la tecnología.  
          Me gusta combinar creatividad y lógica para resolver problemas,  
          aprender nuevas herramientas y seguir mejorando cada día.
        </p>
        <p>
          Además de estudiar, disfruto mucho diseñar interfaces, aprender sobre desarrollo web,  
          y participar en proyectos donde pueda aplicar mis conocimientos técnicos.
        </p>
      </div>
    </section>
  )
}

export default About
