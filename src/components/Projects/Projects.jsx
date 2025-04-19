import ProjectCard from './ProjectCard/ProjectCard'
import './projects.css'
import projects from '../../assets/data/projects';
import { motion, useTransform, useScroll } from "framer-motion";

function Projects() {
  // map each project to a project card
  const projectCards = projects.map((project, index) => (
    <ProjectCard key={index} project={project} />
  ));

  // track scroll progress
  const { scrollYProgress } = useScroll();

  // Map scroll position values
  const x = useTransform(scrollYProgress, [0, 1], ["90%", "-90%"]);

  return (
    <div className='projects' id='projects'>
        <div className='content'>
          <h3>PROJECTS</h3>

          <motion.div style={{ x }} className='card-container'>
            {projectCards}
          </motion.div>
        </div>
    </div>
  )
}

export default Projects