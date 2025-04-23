import './App.css'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <div className='App'>
      <Header />
      <Home />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
