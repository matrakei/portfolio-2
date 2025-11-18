import '../styles/about.css'
import matias from '../assets/matias.png'

const About = () => {
  return (
    <section className="about">

      {/* Imagen de Matías */}
      <div className="about-left">
        <img src={matias} alt="Matias" />
      </div>

      {/* Info */}
      <div className="about-right">
        <h1>About me</h1>

        <p className="descripcion">
          Soy un estudiante de escuela secundaria y
          tengo muchas ganas de aprender.
        </p>

        <div className="about-data">
          <p><strong>Nombre:</strong> Matias Vernet</p>
          <p><strong>Nacimiento:</strong> 16 Junio, 2008</p>
          <p><strong>Dirección:</strong> Victorica 2476 BA(CABA)</p>
          <p><strong>email:</strong> matiasvernetm@gmail.com</p>
        </div>

        <button className="cv-btn">Descargar CV</button>
      </div>

    </section>
  )
}

export default About
