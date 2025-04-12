import ProjectCard from './ProjectCard/ProjectCard'
import './projects.css'
import { motion, useTransform, useScroll } from "framer-motion";

function Projects() {
  const { scrollYProgress } = useScroll();  // track scroll progress

  // Map scroll position values
  const x = useTransform(scrollYProgress, [0, 1], ["60%", "-90%"]);

  return (
    <div className='projects'>
        <div className='content'>
          <h3>PROJECTS</h3>

          <motion.div style={{ x }} className='card-container'>
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
              <ProjectCard />
          </motion.div>
        </div>
    </div>
  )
}

export default Projects