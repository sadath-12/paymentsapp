import React from 'react'
import { Navbar } from '..'
import {Footer} from '..'


const HomeLayout = ({children}) => {
  return (
    <div className='w-full' >

<Navbar/>
      <main className='mt-10'>
{children}
<Footer/>
      </main>
    </div>
  )
}

export default HomeLayout