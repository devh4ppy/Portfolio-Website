import Bar from "../components/Bar"
import { languages, tools } from "../data"
import { motion } from 'framer-motion'
import { fadeInUp } from '../animations'

const resume = () => {


    return (
        <div className="px-6 py-2">
            {/* education */}
            <div className='grid-rows-1 text-center text-2xl font-bold '><h5>Education</h5></div>
            {/* education info */}
            <div className='grid gap-6 md:grid-cols-2 my-3 '>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-2 text-xl font-bold'>Bachelor of Engineering (B.E)</h5>
                    <p className='font-semibold '>Computer Science & Engineering</p>
                    <p>Skn Sinhgad College Of Engineering</p>
                    <p>2018-2021</p>
                    <p className="my-3 font-semibold">CGPA: 7.41/10</p>
                </motion.div>
                <motion.div variants={fadeInUp} initial="initial" animate="animate">
                    <h5 className='my-2 text-xl font-bold'>Diploma</h5>
                    <p className='font-semibold '>Computer Technology</p>
                    <p>Government Polytechnic Pen</p>
                    <p>2016-2018</p>
                    <p className="my-3 font-semibold">Aggregate Percentage: 62.39%</p>
                </motion.div>
            </div>
            {/* languages & tools */}
            <div className='grid gap-6 md:grid-cols-2'>
            <div>
                <h5 className='my-3 text-2xl font-bold'>Languages & Framworks</h5>
                <div className='my-2'>

                    {
                        languages.map(language=><Bar data={language} key={language.name}/>)
                    }
                </div>
            </div>
            <div>
                <h5 className='my-3 text-2xl font-bold'>Tools & Softwares</h5>
                <div className='my-2'>

                    {
                        tools.map(tool=><Bar data={tool} key={tool.name}/>)
                    }
                </div>
            </div>


            </div>
        </div>
    )
}

export default resume
