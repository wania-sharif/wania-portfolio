import { useEffect, useState } from 'react'
import './projectCard.css'

function ProjectCard(props) {

  const [image, setImage] = useState(0)
  const [auto, setAuto] = useState(false)

  function setAutoplay() {
    setImage(1)
    setAuto(true)
  }

  function clearAutoplay() {
    setImage(0)
    setAuto(false)
    clearTimeout(timeout)
  }

  let timeout = null

  useEffect(() => {
    timeout = auto &&
      setTimeout(() => {
        setImage(image === props.project.images.length - 1 ? 0 : image + 1)
      }, 1600);
  });

  return (
    <div className='project-card' 
    onMouseEnter={() => setAutoplay()} 
    onMouseLeave={() => clearAutoplay()}>

      <div className='icon'>
        <a href={props.project.link} target='_blank'>
          <img src={props.icon} alt='github' />
        </a>
      </div>

      <div className='text'>
        <h2>{props.project.name}</h2>
        <h3>{props.project.description}</h3>

        <ul>
          {props.project.tech.map((tech, index) => <li key={index}>{tech}</li> )}
        </ul>
      </div>

        <div className='image' style={{backgroundImage: `url(${props.project.images[image]})`}}></div>
    </div>
  )
}

export default ProjectCard