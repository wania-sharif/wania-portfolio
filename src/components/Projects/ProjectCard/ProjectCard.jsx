import './projectCard.css'

function ProjectCard(props) {
  return (
    <div className='project-card'>
      <div className='text'>
        <h2>{props.project.name}</h2>
        <h3>{props.project.description}</h3>

        <ul>
          {props.project.tech.map((tech, index) => <li key={index}>{tech}</li> )}
        </ul>
      </div>

        <div className='image' style={{backgroundImage: `url(${props.project.images[0]})`}}></div>
    </div>
  )
}

export default ProjectCard