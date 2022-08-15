import Link from 'next/link'
import React, { useState } from 'react'
import { navItems } from '../../utils/dummy'
import Button from '../Buttons/Button'
import Image from 'next/image'
import menu from '../../public/img/menu.svg'
import { Sidebar } from '..'
import { motion } from 'framer-motion'

const Navbar = () => {

  const [hoverItem,setHovered]=useState('')
  const [toggle,setToggle]=useState(false)


  return (
   <div className='flex  xl:max-w-[1290px] transition-all ease-in-out justify-between items-center  static px-4 py-2'>
    <Sidebar open={toggle} setOpen={setToggle}  />
    <div onClick={()=>setToggle((prev)=>!prev)} className='flex justify-start border-2 absolute ss:hidden cursor-pointer border-gray-700 rounded-full px-2 py-3'>
      <Image src={menu} className='bg-themeColor   ' />
    </div>
 {/* left  */}
<div className='font-extrabold text-4xl text-themeColor' >
<h1 className='font-poppins text-left'>Logo</h1>
</div>

{/* middle  */}
<div className='hidden ss:flex items-center gap-10'>
{navItems.map(({title,Icon,link,subMenu},i)=>(
  <>
  <Link href={link}>
    <div  onMouseLeave={()=>setHovered('')} onMouseEnter={()=>setHovered(title)} className='flex cursor-pointer items-center gap-1 font-semibold relative'>
  <p className='hover:text-blue-800'>{title}</p>
  {Icon && <Icon/> }
  {/* but  */}
  {hoverItem && hoverItem===title && subMenu && (
    <motion.div initial={{x:0,y:100,opacity:0}} animate={{x:0,y:0,opacity:1}} transition={{duration:1}} className='flex border-t-4 backdrop-blur-lg drop-shadow-xl border-t-themeColor z-[1000] absolute top-7 space-x-5  rounded-lg polygon bg-white shadow-lg px-4 py-3'>
      {subMenu.map(({title,subLinks})=>(
        
        <>
       <div  className='flex flex-col gap-3 px-2'>
        <h2 className='text-gray-500 ' >{title}</h2>
        <div className='w-[60px] h-[2px] bg-black' />
        {subLinks.map(({title,link})=>(
<>
<Link href={link} >
  <p className='text-gray-800 text-sm hover:text-blue-900 mt-1 max-w-[90px]' >{title}</p>
</Link>
</>
        ))}
       </div>
        </>
      ))}
    </motion.div>
  ) }
    </div>
  </Link>
  </>
))}
</div>

{/* right  */}
<div className='mr-4 hover:scale-90 '>
<Button text={'Sign In'} />
</div>



   </div>
  )
}

export default Navbar