import about from '../../assets/working_table.jpeg'
import { ABOUT_TEXT } from '../../constants'
import {motion} from 'framer-motion'

export default function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h1 className="my-20 text-center text-4xl">About<span className="text-neutral-500"> Me</span></h1>
        <div className="flex flex-wrap">
            <motion.div
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:-100}}
                transition={{duration:0.5}}
            className="w-full lg:w-1/2">
                <div className="flex items-center justify-center">
                    <img className='rounded-2xl' src={about} alt="" />
                </div>
            </motion.div>

            <motion.div 
                whileInView={{opacity: 1, x:0}}
                initial={{opacity:0, x:100}}
                transition={{duration:0.5}}
                className="w-full lg:w-1/2 md:pl-2">
                    <div className='flex justify-center lg:justify-start'>
                        <div className='my-2 max-w-xl py-6 font-light tracking-tight'>
                            <p>
                                {ABOUT_TEXT}
                            </p>
                            <h3 className='mt-10 mb-4 text-3xl font-semibold'>Awards</h3>
                            <ul>
                                <li>Project Manager Of The Year Award in 2022</li>
                                <li>Project Leader Of The Year Award in 2016 and 2017</li>
                            </ul>
                            <h3 className='mt-10 mb-4 text-3xl font-semibold'>Attended Courses</h3>
                            <ul>
                                <li>Agile Project Management in 2023</li>
                                <li>Architecting on AWS in 2022</li>
                                <li>Training Course on Project Management Body of Knowledge in 2016</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
        </div>
    </div>
  )
}