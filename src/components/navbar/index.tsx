import {FaLinkedin, FaGithub}  from 'react-icons/fa'


export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        {/*Logo on the left*/}
        <div className="flex flex-shrink-0 content-end">
            <span className='text-white text-6xl font-bold self-end mb-[-2px]'>V</span>
            <span className='text-white self-end ml-[-2px] font-bold inline-block'>LE</span>
        </div>

        <div className='flex items-center justify-center gap-4 text-4xl'>
            <a className='cursor-pointer' target='_blank' href='https://www.linkedin.com/in/vuong-le/'><FaLinkedin /></a>
            <a className='cursor-pointer' target='_blank' href='https://github.com/vuongle'><FaGithub /></a>
        </div>
    </nav>
  )
}