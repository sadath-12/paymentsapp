import React from 'react'
import PricingCard from './Cards/PricingCard'
import { motion } from 'framer-motion'

const Pricing = () => {
  return (
   <div className='w-full bg-opacity-50 bg-[#FFF2F2] px-16 lg:px-16 py-4 transition-all ease-in-out '>

<div>
  <h1 className='text-themeColor heading' > Pricing</h1>
  <div className='w-[70px] h-[2px] bg-themeColor' />
</div>

<div className='flex flex-wrap mt-10 gap-10   items-center  justify-center' >
{[1,2,3].map(()=>(
  <>
  <motion.div initial={{scale:1}} whileHover={{scale:1.1}}  className='hover:scale-110 '>
    <PricingCard/>
  </motion.div>
  </>
))}
</div>

   </div>
  )
}

export default Pricing