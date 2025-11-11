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
            <span>+51 9 11 8888-8888</span>
          </div>

          <div className="medio">
            <span>@eligdemati</span>
            <img src={ig} alt="instagram" className="icono" />
          </div>
        </div>

        <div className="fila">
          <div className="medio">
            <img src={mail} alt="mail" className="icono" />
            <span>mati@gmail.com</span>
          </div>

          <div className="medio">
            <span>MatiasVernet</span>
            <img src={link} alt="linkedin" className="icono" />
          </div>
        </div>
      </div>

      {/* 🟡 Formulario con espacio nuevo */}
      <div className="contacto-form-wrapper">
        <div className={`contacto-formulario ${mensajeActivo ? 'expandido' : ''}`}>
          {!mensajeActivo ? (
            <>
              <p className="form-subtitulo">Ingrese sus datos y será contactado</p>
              <form>
                <div className="fila">
                  <div className="campo">
                    <label>Nombre</label>
                    <input type="text" />
                  </div>
                  <div className="campo">
                    <label>Apellido</label>
                    <input type="text" />
                  </div>
                </div>

                <div className="fila">
                  <div className="campo">
                    <label>Mail</label>
                    <input type="email" />
                  </div>
                  <div className="campo">
                    <label>Mensaje</label>
                    <input
                      type="text"
                      onFocus={() => setMensajeActivo(true)} // 👈 al hacer clic en mensaje se expande
                    />
                  </div>
                </div>
              </form>
            </>
          ) : (
            <div className="mensaje-grande">
              <label>Mensaje</label>
              <textarea
                autoFocus
                placeholder="Escriba su mensaje aquí..."
                onBlur={() => setMensajeActivo(false)} // 👈 al salir del input vuelve al form normal
              ></textarea>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Contacto
