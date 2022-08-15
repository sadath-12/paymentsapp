import Image from 'next/image'
import React from 'react'
import { payTakenBy } from '../utils/dummy'

const PayBy = () => {
  return (
    <div className='flex flex-col px-16 lg:px-16 py-4'>

<div>
  <h1 className='text-themeColor heading'>Payments Accepted By</h1>
  <div className='w-[100px] h-[2px] bg-blue-800' />
</div>

<div className='flex flex-wrap space-x-5 '>
  {payTakenBy.map(({Icon})=>(
    <>
  <div className='rounded-full' >
    <Image src={Icon} width={200} height={100} objectFit='contain' className='' />
  </div>
    </>
  ))}
</div>

    </div>
  )
}

export default PayBy