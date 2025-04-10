import ProjectCard from './ProjectCard/ProjectCard'
import './projects.css'

function Projects() {

  return (
    <div className='projects'>
        <h3>PROJECTS</h3>
        <div className='content'>
            <ProjectCard />
        </div>
    </div>
  )
}

export default Projects