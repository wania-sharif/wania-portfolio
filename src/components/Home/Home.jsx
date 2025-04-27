import './Home.css'
import { motion } from 'framer-motion'

function Home() {

  return (
    <div className='home' id='home'>
      <motion.h1
      initial={{ translateY: 40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{duration: .3, ease: "easeInOut"}}
      >Wania S.</motion.h1>

      <span className='line'></span>

      <motion.h2
      initial={{ translateY: 40, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{duration: .4, ease: "easeInOut", delay: .1}}
      >SOFTWARE DEVELOPER</motion.h2>
    </div>
  )
}

export default Home