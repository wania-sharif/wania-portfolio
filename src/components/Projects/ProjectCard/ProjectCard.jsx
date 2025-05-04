import { useEffect, useState } from 'react'
import './projectCard.css'
import { motion, AnimatePresence } from 'framer-motion'
import Expand from '../../animated/Expand'

function ProjectCard(props) {
  // State to track the current image index
  const [image, setImage] = useState(0)
  // State to track if the card is hovered
  const [isHovered, setIsHovered] = useState(false)

  let timeout = null

  // Function to set the hovered state and change the image
  function setHovered() {
    setImage(1)
    setIsHovered(true)
  }

  // Function to set the not hovered state and clear the timeout
  function setNotHovered() {
    setImage(0)
    setIsHovered(false)
    clearTimeout(timeout)
  }

  // Preload images
  useEffect(() => {
      props.project.images.forEach((image) => {
        new Image().src = image;
      });
      console.log("loaded images")
  }, [])


  // Change image every 1.6 seconds if card is hovered
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
          <h2>{props.project.name.toUpperCase()}</h2>
          <h4>{props.project.description}</h4>

          <AnimatePresence mode="wait">
            {isHovered && (
            <Expand>
              <button className='link'><a href={props.project.link} target='_blank'>View on GitHub<img src="./images/arrow.png" className='arrow'/></a></button>
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