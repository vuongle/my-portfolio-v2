import { CONTACT } from "../../constants";
import {motion} from 'framer-motion'

export default function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <motion.h1
          whileInView={{opacity:1, y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1}}
          className="text-center text-4xl my-10">Get In Touch</motion.h1>
        <div className="text-center tracking-tighter">
            <p className="my-4">
                {CONTACT.address}
            </p>
            <p className="my-4">
                {CONTACT.phoneNo}
            </p>
            <a className="cursor-pointer border-b">{CONTACT.email}</a>
        </div>
    </div>
  )
}