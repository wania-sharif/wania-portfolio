import './home.css'
import { motion } from 'framer-motion'

function Home() {
  // slide in animation properties
  const slideIn = {
    hidden: {
      opacity: 0,
      x: -100
    },
    visible: {
      opacity: 1,
      x: 0
    }
  }

  // fade in animation properties
  const appear = {
    hidden: {
      filter: "blur(10px)",
      opacity: 0,
      y: 20
    },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0
    }
  }

  return (
    <motion.div initial='hidden' animate='visible' className='home' id='home'>
      <motion.h1 variants={appear} transition={{duration: .6, ease: 'easeOut'}}>
        Wania S.
      </motion.h1>
    
      <motion.h3 variants={slideIn} transition={{delay: .6, duration: .5}}>SOFTWARE DEVELOPER</motion.h3>

      <div className='home-socials'>
        <motion.a href="https://www.linkedin.com/in/wania-sharif-a76834324" target='_blank' className='underline' 
          variants={slideIn} transition={{delay: .9, duration: .5}}>
          LINKEDIN
        </motion.a>
        <motion.a href="https://github.com/wania-sharif" target='_blank' className='underline' 
          variants={slideIn} transition={{delay: 1.1, duration: .5}}>
          GITHUB
        </motion.a>
      </div>

      <motion.a variants={appear} transition={{delay: 1.6, duration: .5}} className='scroll'href="#projects">SCROLL DOWN 
        <div className="arrow">
          <div className="arrow-body"></div>
          <div className="arrow-head"></div>
        </div> 
      </motion.a>
    </motion.div>
  )
}

export default Home