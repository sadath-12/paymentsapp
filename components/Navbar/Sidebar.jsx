import { Drawer, IconButton, makeStyles } from '@mui/material'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React, { useState } from 'react'
import { navItems } from '../../utils/dummy'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import close from '../../public/img/close.svg'
import Image from 'next/image'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'


const Sidebar = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [showSubMenu, setShowSubMenu] = useState('')
    return (
        <div className='flex overflow-y-scroll relative transition-all ease-in-out duration-200 lg:hidden'>
        
            <Drawer
                open={open}
                anchor='left'
                onClose={handleClose}
            >
                  
                <div
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))` }}
                    className="h-full overflow-hidden max-h-screen relative">
                          <div className='absolute top-2 right-2 bg-black'>
<Image src={close} alt=""  className='bg-black ' />
            </div>
                    <div
                        className="min-w-[20rem] backdrop-blur-md  flex flex-col h-screen items-stretch">
                        <div
                            onClick={() => setOpen(false)} className={`w-fit ml-auto cursor-pointer flex lg:hidden hover:rotate-180 font-medium bg-themeYellow  text-white text-lg  p-3 transition-all duration-300 `}>
                            <RiCloseLine />
                        </div>
                        <ul className='flex-col px-6 pt-6 md:hidden flex'>
                            {navItems.map(({ title, link, subMenu }, i) => (
                                <>
                                    <motion.li
                                        key={i}
                                        initial={{ x: -200, y: 0 }}
                                        animate={{ x: 0, y: 0 }}
                                        transition={{
                                            duration: "0.8",
                                            delay: `0.${i + 1}`,
                                            type: 'tween'
                                        }}
                                        className='flex py-3 z-20 justify-between'>
                                        <Link href={link}>

                                            <a className='relative link-effect w-fit '>
                                                {title}
                                            </a>

                                        </Link>
                                        {subMenu &&
                                            <div onClick={() => setShowSubMenu(showSubMenu === title ? '' : title)} className="ml-auto transition-all duration-500 hover:text-themeYellow cursor-pointer">
                                                <HiOutlineChevronDoubleRight className={`${showSubMenu === title ? 'rotate-90' : ''}`} />
                                            </div>
                                        }
                                    </motion.li>
                                    {subMenu &&
                                        <div className={`pb-2 h-fit mt-2 ${showSubMenu === title ? ' opacity-100 flex flex-col' : 'opacity-0 hidden'} transition-all duration-500 px-4 z-10  space-y-4 `}>
                                            {subMenu.map(({ title,subLinks }, i) => (
                                                <>
                                                <motion.li
                                                    key={i}
                                                    initial={{ x: 200, y: -200 }}
                                                    animate={{ x: 0, y: 0 }}
                                                    transition={{
                                                        duration: "0.8",
                                                        delay: `0.${i + 1}`,
                                                        type: 'tween'
                                                    }}
                                                    className='flex text-gray-500 font-semibold justify-between'>
                                                        
                                                        {title}
                                                </motion.li>
                                                <div className='h-[2px] w-[100px] bg-gray-700' />
                                                {subLinks.map(({title,link})=>(
                                                    <>
                                                    <div className='hover:bg-blue-100 rounded-full py-2 px-3'>
<Link href={link}>
                                                     <motion.li
                                                     key={i}
                                                     initial={{ x: 200, y: -200 }}
                                                     animate={{ x: 0, y: 0 }}
                                                     transition={{
                                                         duration: "0.8",
                                                         delay: `0.${i + 1}`,
                                                         type: 'tween'
                                                        }}
                                                        className='flex font-semibold text-gray-800 hover:text-blue-800 justify-between cursor-pointer'>
                                                        {title}
                                                 </motion.li>
                                                         </Link>
                                                 </div>
                                                 </>
                                                ))}
                                                

                                                    </>
                                            ))}
                                        </div>
                                    }
                                </>
                            ))}
                        </ul>
                    </div >
                </div >
            </Drawer >
        </div >
    )
}

export default Sidebar