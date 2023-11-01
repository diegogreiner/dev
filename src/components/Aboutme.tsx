import thumb from '../../public/images/logo.png'
import cv from '../data/CV/cv-diegogreiner.pdf'

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
            <a href={cv} download='cv-diegogreiner.pdf' className="btn">Download CV</a>
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
            Desenvolvedor Front-end experiente, utilizo as tecnologias mais avançadas do mercado, criando projetos inovadores e soluções de alta qualidade que solucionam diversos problemas. Meu foco está sempre em otimizar o desempenho das aplicações, garantindo uma experiência excepcional para os usuários.
          </p>
        </div>
      </div>
    </section >
  )
}