import { useState } from 'react'
import '../styles/contacto.css'
import wpp from '../assets/Group 7.png'
import mail from '../assets/Group.png'
import link from '../assets/Group 6.png'
import ig from '../assets/ig.png'

const Contacto = () => {
  const [mensajeActivo, setMensajeActivo] = useState(false)

  return (
    <section className="contacto">
      <h1 className="contacto-titulo">Hablemos!</h1>
      <p className="contacto-subtitulo">Estas son mis medios de comunicación</p>

      {/* Medios de contacto */}
      <div className="contacto-medios">
        <div className="fila">
          <div className="medio">
            <img src={wpp} alt="whatsapp" className="icono" />
            <span>+51 9 11 6295-6608</span>
          </div>

          <div className="medio">
            <span>@mativernet_</span>
            <img src={ig} alt="instagram" className="icono" />
          </div>
        </div>

        <div className="fila">
          <div className="medio">
            <img src={mail} alt="mail" className="icono" />
            <span>matiasvernetm@gmail.com</span>
          </div>

          <div className="medio">
            <span>MatiasVernet</span>
            <img src={link} alt="linkedin" className="icono" />
          </div>
        </div>
      </div>

      {/* Formulario */}
      <div className="contacto-form-wrapper">

        {!mensajeActivo && (
          <p className="form-subtitulo">Ingrese sus datos y sera contactado</p>
        )}

        <div className={`contacto-formulario ${mensajeActivo ? 'expandido' : ''}`}>

          {!mensajeActivo ? (
            <form>
              <div className="fila">
                <div className="campo">
                  <label>Nombre</label>
                  <input type="text" placeholder="Ingrese su nombre..." />
                </div>

                <div className="campo">
                  <label>Apellido</label>
                  <input type="text" placeholder="Ingrese su apellido..." />
                </div>
              </div>

              <div className="fila">
                <div className="campo">
                  <label>Mail</label>
                  <input type="email" placeholder="Ingrese su mail..." />
                </div>

                <div className="campo">
                  <label>Mensaje</label>
                  <input
                    type="text"
                    placeholder="Ingrese mensaje..."
                    onFocus={() => setMensajeActivo(true)} // 🔥 activa animación
                  />
                </div>
              </div>
            </form>
          ) : (
            <div className="mensaje-grande">
              <label>Mensaje</label>
              <textarea
                autoFocus
                placeholder="Escriba su mensaje aquí..."
                onBlur={() => setMensajeActivo(false)} // 🔥 vuelve al form
              ></textarea>
            </div>
          )}

        </div>
      </div>
    </section>
  )
}

export default Contacto
