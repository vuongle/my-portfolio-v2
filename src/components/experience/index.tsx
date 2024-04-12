import { EXPERIENCES } from "../../constants";
import {motion} from 'framer-motion'
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md"

export default function Experience() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
            className="text-center text-4xl my-20">Experience</motion.h1>
        <div>
            {
                EXPERIENCES.map((e, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity:0, x:-100}}
                            transition={{duration:0.75}}
                        className="w-full lg:w-1/4">
                            <p className="mb-2 text-sm text-neutral-400">{e.year}</p>
                        </motion.div>
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity: 0,x:200}}
                            transition={{duration:0.75, delay:0.5}}
                        className="w-full max-w-xl lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{e.role} - 
                                <span className="text-sm text-purple-200"> {e.company}</span>
                            </h6>
                            <p className="mb-4 text-neutral-400">
                                <ul>
                                    {
                                        e.descriptions.map((desc, index) => (
                                            <li className="flex items-center pl-2 gap-x-2" key={index}><MdOutlineKeyboardDoubleArrowRight /><span> {desc}</span></li>
                                        ))
                                    }
                                </ul>
                            </p>
                            <p className="flex flex-wrap">
                            {
                                e.technologies.map((t, index) => (
                                    <span className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 font-medium text-purple-500" key={index}>{t}</span>
                                ))
                            }
                            </p>
                        </motion.div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}