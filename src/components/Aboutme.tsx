import thumb from '../images/logo.png'
import cv from '../data/CV/Dev. Diego Greiner.pdf'

export const Aboutme = () => {
  return (
    <section id="aboutme">
      <div className="container">
        <div className="aboutme-banner">
          <div className="aboutme-banner-left">
            <h1 className='aboutme-banner-title'>Olá, eu sou</h1>
            <br />
            <span>Diego Greiner!</span>
            <p className="aboutme-banner-desc">
              Desenvolvedor Front-End
            </p>
            <a href={cv} download='Dev. Diego Greiner.pdf' className="btn">Download CV</a>
          </div>
          <div className="aboutme-banner-right">
            <img src={thumb} alt="" />
          </div>
        </div>
        <div className="aboutme-text">
          <div className="aboutme-title">
            <h1 className="text-title">
              Sobre mim
              <div className="bar-title animate-bar-title"></div>
            </h1>
          </div>
          <p className="aboutme-text-desc animate-container">
            Sou movido pela paixão de aprender
            novas tecnologias e aprimorar
            constantemente as que já domino.
            Tenho uma habilidade natural de me
            adaptar a mudanças e sou um
            comunicador eficaz, sempre buscando
            colaborar com a equipe e ajudar os
            outros sempre que possível. Acredito
            que o trabalho em equipe é
            fundamental para alcançar resultados
            excepcionais.
          </p>
        </div>
      </div>
    </section >
  )
}