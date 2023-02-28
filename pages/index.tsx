// import { GetServerSideProps, GetServerSidePropsContext } from "next"
import ServiceCard from "../components/ServiceCard"
import { services } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from '../animations'

const index = () => {
  
  return (
    <div className="flex flex-col px-6 pt-1 flex-grow">
      <title>Prohappy2.1 </title>
      <h5 className="my-3 font-medium">I am a backend developer with a passion for creating efficient, reliable, and secure web applications. I specialize in developing REST APIs, database systems, and server-side scripting. I have a deep understanding of software engineering principles, algorithms, and design patterns, and Iam always learning new technologies to stay ahead of the curve.</h5>
      <div className="p-4 mt-5 bg-gray-200 dark:bg-dark-100 flex-grow"
      style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem'}}>
          <h6 className="my-3 text-xl font-bold tracking-wide">What I am doing</h6>
          <motion.div className="grid lg:grid-cols-2 gap-6" variants={stagger} initial="initial" animate="animate">
            {services.map(service => (
              <motion.div 
              variants={fadeInUp} 
              className="bg-gray-400 dark:bg-dark-200 
              rounded-lg lg:col-span-1 text-left "
              key={service.title}
              >
                <ServiceCard service={service} />
              </motion.div>
              ))
            }
          </motion.div>
      </div>
    </div>
  )
}

export default index

// export const getServerSideProps = async (context:GetServerSidePropsContext)=>{

//   const res = await fetch('http://localhost:3000/api/services')
//   const data  = await res.json()

//   console.log('SERVER', services)

//   return{
//     props:{
//       services: data.services,
//     }
//   }

// }
