import thumb from '../images/logo.png'

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
            <a href="/src/data/CV/Dev. Diego Greiner.pdf" download='Dev. Diego Greiner' className="btn">Download CV</a>
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
            Sou um entusiasta da tecnologia, cursando Análise e Desenvolvimento de Sistemas. Com experiência em HTML, CSS, JavaScript, TypeScript, React.js, Sass, Bootstrap, Tailwind CSS, Git e SQL, estou sempre pronto para enfrentar novos desafios e projetos inovadores. Minha paixão pela programação é a base para criar soluções incríveis.
          </p>
        </div>
      </div>
    </section >
  )
}