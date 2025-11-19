import '../styles/habilidades.css'
import chip from '../assets/chip.png'
import team from '../assets/team.png'
import translate from '../assets/translate.png'

const Habilidades = () => {
  return (
    <section className="habilidades">
      <h1 className="hab-titulo">Mis habilidades</h1>

      <ul className="hab-lista">
        <li>Me sé adaptar al entorno de trabajo con facilidad, siempre tengo ganas de aprender y de hacer cosas.</li>
        <li>Me dispongo a hacer cualquier tipo de trabajo.</li>
        <li>A la hora de hacer un trabajo organizo a mi favor el entorno para poder resolver con mayor facilidad.</li>
      </ul>

      <div className="hab-cards">
        {/* CARD 1 */}
        <div className="hab-card">
          <p className="hab-card-titulo">Conocimiento de computación</p>
          <div className="hab-icono">
            <img src={chip} alt="chip" />
          </div>
          <p className="hab-card-desc">
            Tengo amplio conocimiento técnico sobre hardware de computadoras.
          </p>
        </div>

        {/* CARD 2 */}
        <div className="hab-card">
          <p className="hab-card-titulo">Trabajo en equipo</p>
          <div className="hab-icono">
            <img src={team} alt="team" />
          </div>
          <p className="hab-card-desc">
            Soy muy bueno para trabajar en equipo y también liderar uno.
          </p>
        </div>

        {/* CARD 3 */}
        <div className="hab-card">
          <p className="hab-card-titulo">Buen nivel de inglés</p>
          <div className="hab-icono">
            <img src={translate} alt="translate" />
          </div>
          <p className="hab-card-desc">
            Tengo muy buen nivel de inglés, me gradué con un nivel B2 (pre-advanced).
          </p>
        </div>
      </div>
    </section>
  )
}

export default Habilidades
