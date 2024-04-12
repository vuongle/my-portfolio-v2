import { PROJECTS } from "../../constants";
import {motion} from 'framer-motion'

export default function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
        className="text-center text-4xl my-20">Projects</motion.h1>
        <div>
            {
                PROJECTS.map((p, index) => (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity:0, x:-100}}
                            transition={{duration:0.75}}
                        className="w-full lg:w-1/4">
                            <a href={p.url} target={p.url.startsWith('javascript') ? '' :'_blank'}>
                            <img className="mb-6 rounded" src={p.image} alt="" width={240} height={220} /></a>
                        </motion.div>
                        <motion.div 
                            whileInView={{opacity: 1, x:0}}
                            initial={{opacity: 0,x:200}}
                            transition={{duration:0.75, delay:0.5}}
                            className="w-full max-w-xl lg:w-3/4 md:pl-2">
                            <h6 className="mb-2 font-semibold">{p.title}</h6>
                            <p className="mb-4 text-neutral-400">{p.description}</p>
                            <p className="flex flex-wrap">
                            {
                                p.technologies.map((tech, index) =>(
                                    <span className="mr-2 mt-2 rounded bg-neutral-800 px-2 py-1 font-medium text-purple-500" key={index}>{tech}</span>
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