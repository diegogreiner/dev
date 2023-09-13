import { useState } from "react"

export const Header = () => {

  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <header id="home">
      <nav className='container-header'>
        <div className="nav-header-mobile-icon" onClick={handleClick}>
          <i className={openMenu ? 'fa fa-times' : 'fa fa-bars'}></i>
        </div>
        <ul className="nav-header-mobile">
          {openMenu &&
            <div className="nav-header-mobile-container">
              <li className="nav-header-item" onClick={handleClick}>
                <a href='#aboutme'>Sobre mim</a>
              </li>
              <li className="nav-header-item" onClick={handleClick}>
                <a href='#skills'>Skills</a>
              </li>
              <li className="nav-header-item" onClick={handleClick}>
                <a href='#projects'>Projetos</a>
              </li>
              <li className="nav-header-item" onClick={handleClick}>
                <a href='#contacts'>Contato</a>
              </li>
            </div>
          }
        </ul>
        <ul className="nav-header">
          <li className="nav-header-item">
            <a href='#aboutme'>Sobre mim</a>
          </li>
          <li className="nav-header-item">
            <a href='#skills'>Skills</a>
          </li>
          <li className="nav-header-item">
            <a href='#projects'>Projetos</a>
          </li>
          <li className="nav-header-item">
            <a href='#contacts'>Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}