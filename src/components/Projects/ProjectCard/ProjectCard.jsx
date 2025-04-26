import { useEffect, useState } from 'react'
import './projectCard.css'
import { motion, AnimatePresence } from 'framer-motion'
import Expand from '../../animated/Expand'

function ProjectCard(props) {

  const [image, setImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  function setHovered() {
    setImage(1)
    setIsHovered(true)
  }

  function setNotHovered() {
    setImage(0)
    setIsHovered(false)
    clearTimeout(timeout)
  }

  let timeout = null

  useEffect(() => {
    timeout = isHovered &&
      setTimeout(() => {
        setImage(image === props.project.images.length - 1 ? 0 : image + 1)
      }, 1600);
  });

  return (
    <div className='project-card' 
    onMouseEnter={() => setHovered()} 
    onMouseLeave={() => setNotHovered()}>

        <div className='text'>
          <h2>{props.project.name}</h2>
          <h3>{props.project.description}</h3>

          <AnimatePresence mode="wait">
            {isHovered && (
            <Expand>
              <a href={props.project.link} target='_blank' className='link'>View on GitHub<img src="images/arrow.png" className='arrow'/></a>
            </Expand>
            )}
          </AnimatePresence>
        </div>

        <motion.div className='image' style={{backgroundImage: `url(${props.project.images[image]})`}}></motion.div>

        <AnimatePresence mode="wait">
            {isHovered && (
            <Expand>
              <ul>
                {props.project.tech.map((tech, index) => <li key={index}>{tech}</li> )}
              </ul>
            </Expand>
            )}
          </AnimatePresence>
        
    </div>
  )
}

export default ProjectCard