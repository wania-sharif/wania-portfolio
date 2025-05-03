import './Home.css'
import { motion } from 'framer-motion'

function Home() {

  return (
    <div className='home' id='home'>
      <h1>Wania S.</h1>

      <h3>SOFTWARE DEVELOPER</h3>

      <div className='home-socials'>
        <a href="" target='_blank' className='underline'>LINKEDIN</a>
        <a href="" target='_blank' className='underline'>GITHUB</a>
      </div>

      <a className='scroll'href="#projects">SCROLL DOWN 
        <div className="arrow">
          <div className="arrow-body"></div>
          <div className="arrow-head"></div>
        </div> 
      </a>
    </div>
  )
}

export default Home