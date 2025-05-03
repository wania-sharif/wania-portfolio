import './Home.css'
import { motion } from 'framer-motion'

function Home() {

  return (
    <div className='home' id='home'>
      <h1>Wania S.</h1>

      <h3>SOFTWARE DEVELOPER</h3>

      <a href="#projects">SCROLL DOWN 
        <div class="arrow">
          <div class="arrow-body"></div>
          <div class="arrow-head"></div>
        </div> 
      </a>
    </div>
  )
}

export default Home