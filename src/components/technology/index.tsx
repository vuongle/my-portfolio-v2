import {RiReactjsLine,RiFlutterLine} from 'react-icons/ri'
import {FaNodeJs,FaAngular,FaAws,FaJenkins,FaGithub,FaDocker} from 'react-icons/fa'
import {SiMongodb,SiMysql,SiJira,SiIonic} from 'react-icons/si'
import { TbBrandReactNative } from "react-icons/tb"
import {motion} from 'framer-motion'

export default function Technology() {
  return (
    <div className="border-b border-neutral-900 pb-24">
        <motion.h1
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:1}}
        className="text-center text-4xl my-20">Technologies</motion.h1>
        <motion.div 
            whileInView={{opacity:1, y:0}}
            initial={{opacity:0,y:150}}
            transition={{duration:0.75}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-4xl text-green-500' />
            </motion.div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className='text-4xl text-red-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-4xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandReactNative className='text-4xl text-cyan-600' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiFlutterLine className='text-4xl text-sky-300' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiIonic className='text-4xl text-blue-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-4xl text-green-500' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className='text-4xl text-cyan-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAws className='text-4xl text-orange-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJenkins className='text-4xl text-neutral-50' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaGithub className='text-4xl text-neutral-50' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaDocker className='text-4xl text-blue-400' />
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJira className='text-4xl text-blue-500' />
            </div>
        </motion.div>
    </div>
  )
}