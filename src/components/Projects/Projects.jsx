import ProjectCard from './ProjectCard/ProjectCard'
import './projects.css'
import projects from '../../assets/data/projects';
import { motion, useTransform, useScroll } from "framer-motion";
import githubIcon from '/images/github-mark.svg'

function Projects() {
  // map each project to a project card
  const projectCards = projects.map((project, index) => (
    <ProjectCard key={index} project={project} icon={githubIcon} />
  ));

  // track scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll position values
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);

  return (
    <div className='projects' id='projects'>
        <div className='content'>
          <h2>FEATURED PROJECTS</h2>

          <motion.div style={{ x }} className='card-container'>
            {projectCards}
          </motion.div>
        </div>
    </div>
  )
}

export default Projects