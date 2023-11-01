// Projects
import calculadoraImc from '../../public/images/projects/calculadoraImc.png'
import bateria from '../../public/images/projects/bateria.png'
import jogoDaVelha from '../../public/images/projects/jogoDaVelha.png'
import memoria from '../../public/images/projects/memoria.png'
import pageBootstrap from '../../public/images/projects/pageBootstrap.png'
import quadroDesenho from '../../public/images/projects/quadroDesenho.png'
import quiz from '../../public/images/projects/quiz.png'
import urna from '../../public/images/projects/urna.png'
import vendaPizza from '../../public/images/projects/vendaPizza.png'
import gestorFinanceiro from '../../public/images/projects/gestor-financeiro.png'
import calculadorRotas from '../../public/images/projects/calc-routes.png'

// Skills
import bootstrap from '../../public/images/skills/bootstrap.png'
import css from '../../public/images/skills/css.png'
import github from '../../public/images/skills/github.png'
import html from '../../public/images/skills/html.png'
import javascript from '../../public/images/skills/javascript.png'
import mysql from '../../public/images/skills/mysql.png'
import php from '../../public/images/skills/php.png'
import reactjs from '../../public/images/skills/reactjs.png'
import sass from '../../public/images/skills/sass.png'
import tailwind from '../../public/images/skills/tailwind.png'
import typescript from '../../public/images/skills/typescript.png'
import styled from '../../public/images/skills/styled.png'
import reactTest from '../../public/images/skills/ReactTest.png'
import next from '../../public/images/skills/next.png'
import redux from '../../public/images/skills/redux.png'

export const projectData = [
  {
    name: 'Calculador de Rotas',
    link: 'https://github.com/diegogreiner/calc-routes',
    image: calculadorRotas,
    images: [next, typescript, tailwind]
  },
  {
    name: 'Gestor Financeiro',
    link: 'https://github.com/diegogreiner/gerenciador-financas',
    image: gestorFinanceiro,
    images: [next, typescript, styled]
  },
  {
    name: 'Calculadora de IMC', 
    link: 'https://github.com/diegogreiner/react-calc-imc', 
    image: calculadoraImc,
    images: [reactjs, typescript]
  },
  {
    name: 'Bateria', 
    link: 'https://github.com/diegogreiner/projeto-bateria-js', 
    image: bateria,
    images: [html, css, javascript]
  },{
    name: 'Jogo da velha', 
    link: 'https://github.com/diegogreiner/jogo-da-velha', 
    image: jogoDaVelha,
    images: [html, css, javascript]
  },{
    name: 'Jogo da memória', 
    link: 'https://github.com/diegogreiner/react-memoria', 
    image: memoria,
    images: [reactjs, typescript]
  },{
    name: 'Página Conquer', 
    link: 'https://github.com/diegogreiner/projeto-page-bootstrap', 
    image: pageBootstrap,
    images: [html, bootstrap]
  },{
    name: 'Quadro de desenho', 
    link: 'https://github.com/diegogreiner/quadro-de-desenho-js', 
    image: quadroDesenho,
    images: [html, css, javascript]
  },{
    name: 'Quiz', 
    link: 'https://github.com/diegogreiner/projeto-quiz-js', 
    image: quiz,
    images: [html, css, javascript]
  },{
    name: 'Urna eletrônica', 
    link: 'https://github.com/diegogreiner/projeto-urna-js', 
    image: urna,
    images: [html, css, javascript]
  },{
    name: 'Página de pedido de pizzaria', 
    link: 'https://github.com/diegogreiner/venda-pizzas-js', 
    image: vendaPizza,
    images: [html, css, javascript]
  }
]

export const SkillData = [
  {name: 'HTML5', image: html},
  {name: 'CSS3', image: css},
  {name: 'JavaScript', image: javascript},
  {name: 'TypeScript', image: typescript},
  {name: 'PHP', image: php},
  {name: 'React.js', image: reactjs},
  {name: 'Tailwind CSS', image: tailwind},
  {name: 'Bootstrap', image: bootstrap},
  {name: 'SASS', image: sass},
  {name: 'MySQL', image: mysql},
  {name: 'GitHub', image: github},
  {name: 'Styled Components', image: styled},
  {name: 'React Testing', image: reactTest},
  {name: 'Next.js', image: next},
  {name: 'Redux', image: redux},
]