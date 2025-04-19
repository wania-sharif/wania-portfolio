import './projectCard.css'

function ProjectCard() {
    const img_url = '/images/placeholder.png'

  return (
    <div className='project-card'>
      <div className='text'>
        <h2>PROJECT TITLE</h2>
        <h3>SMALL DESC</h3>

        <ul>
            <li>ReactJS</li>
            <li>SQL</li>
            <li>Full-Stack</li>
        </ul>
      </div>
        <div className='image' style={{backgroundImage: `url(${img_url})`}}></div>
    </div>
  )
}

export default ProjectCard