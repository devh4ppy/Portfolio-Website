import ProjectCard from "../components/ProjectCard"
import { projects } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from "../animations"

const Projects = () => {
    
    return (
        <motion.div 
        variants={stagger} 
        initial="initial" 
        animate="animate" 
        className=" grid grid-cols-12 gap-4 my-3 relative px-5 py-2" >
            {projects.map(project=>(
                    <motion.div 
                    variants={fadeInUp} 
                    className="col-span-12 sm:col-span-6 lg:col-span-4 p-2 
                    bg-gray-200 dark:bg-dark-200 
                    rounded-lg"
                    key={project.name}
                    >
                        <ProjectCard project={project} />
                    </motion.div>
            ))}


        </motion.div>
    )
}

export default Projects
