import profile from '../../assets/my_profile.jpg'
import {motion} from 'framer-motion'

export default function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-3.5">
        <div className="flex flex-wrap">

            {/* name, job title, description on the left */}
            <div className="w-full lg:w-1/2 pr-2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5}}
                    className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Vuong Le</motion.h1>
                    <motion.span
                        initial={{x:-100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:0.5, delay:0.4}}
                        className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Full Stack Lead</motion.span>
                    <motion.p 
                    initial={{x:-100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5, delay: 1}}
                    className="my-2 max-w-xl py-6 font-light tracking-tight">
                        <p>I specialize in full-stack development with Go, Nodejs/Loopback, MongoDB/MySQL, Angular, Ionic, React/React Native and Flutter frameworks. I also have good experience with AWS, Jenkins, Jira,...</p>
                            <p>
                            I have honed my skills in front-end technologies like React/React Native and Flutter, as well as back-end technologies like Go, Node.js, MySQL/MongoDB and Docker. 
                            </p>
                            <p>
                            My long-term goal is to be a project manager who can motivate and coach team members as well as contribute to the growth of companies that I work with.
                            </p>
                    </motion.p>
                </div>
            </div>

            {/* profile image on the right */}
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center">
                    <motion.img 
                        initial={{x:150, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{duration:1, delay: 1.2}}
                    src={profile} alt="" className="rounded-2xl" />
                </div>
            </div>

        </div>
    </div>
  )
}