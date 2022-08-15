import React from 'react'
import {TiTick} from 'react-icons/ti'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {RiSecurePaymentLine} from 'react-icons/ri'
import Button from './Buttons/Button'
import Image from 'next/image'
import bannerImg from '../public/img/banner.png'


const features =[
  {
    title:'Easy to use and Reliable',
    Icon:TiTick,
  },
  {
    title:'Trust Worthy and safe',
    Icon:VscWorkspaceTrusted,
  },
  {
    title:'100% faster and Secure',
    Icon:RiSecurePaymentLine,
  }
]

const Hero = () => {
  return (
    <div className='flex  container flex-col lg:px-16 xl:px-0 z-[1] md:px-16 md:flex-row w-full py-10 gap-4  items-center'>
{/* lft  */}
<div className='flex-1 flex flex-col  items-start space-y-7'>

<h1 className='text-themeColor font-poppins font-bold text-4xl gap-4 ss:text-6xl md:text-4xl leading-[50px]  lg:text-5xl ss:leading-[80px] lg:leading-[70px] xl:text-7xl'>Your One Stop <br className='lg:hidden' />Payments Solution </h1>
<ul className='space-y-6 '>
  {features.map(({title,Icon})=>(
    <>
    <div className='flex items-center space-x-3'>
      <div className='bg-green-600 p-1 rounded-full'>

      <Icon className='text-lg text-white' />
      </div>
      <h3 className=' text-md ss:text-lg'>{title}</h3>
    </div>
    </>
  ))}
</ul>

<Button text={'Explore'} />

</div>

{/* right  */}
<div className='flex-1'>
<Image src={bannerImg} />
</div>
    </div>
  )
}

export default Hero