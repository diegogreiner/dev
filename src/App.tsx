import { Aboutme } from './components/Aboutme';
import { Contacts } from './components/Contacts';
import { Header } from './components/Header';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

const App = () => {

  return (
    <div>
      <Header />
      <Aboutme />
      <Skills />
      <Projects />
      <Contacts />
    </div>
  )
}

export default App