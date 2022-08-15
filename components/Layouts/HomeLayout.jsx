import React from 'react'
import { Navbar } from '..'
import {Footer} from '..'


const HomeLayout = ({children}) => {
  return (
    <div className='w-full' >
<Navbar/>
{children}
<Footer/>
    </div>
  )
}

export default HomeLayout