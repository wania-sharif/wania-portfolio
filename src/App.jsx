import './App.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import MobileNav from './components/MobileNav/MobileNav'
import { useState } from 'react'
import Burger from './components/Burger/Burger'

function App() {
  // State to toggle the mobile navigation menu
  const [navOpened, setNavOpened] = useState(false)

  /** This function handles the toggle of the mobile navigation menu.
   * It prevents the default action of the event, then toggles 
   * the state of navOpened. It is passed as a prop to the Burger component,
   * from which it is called when the burger icon receives a click event.
   * 
   * @param {Event} e click event
   */
  function handleNavToggle(e) {
    e.preventDefault();
    setNavOpened(!navOpened);
  }

  return (
    <div className='App'>
      <Header />
      <Burger handleNavToggle={handleNavToggle} />
      <MobileNav state={navOpened}/>
      <Home />
      <Projects />
      <About />
      <Contact />
    </div>
  )
}

export default App
