import Image from 'next/image'
import React from 'react'
import { payTakenBy } from '../utils/dummy'
import Button from './Buttons/Button'

const PaymentSection = () => {
  return (
    <div
   
    className=" px-16 lg:px-16 py-10">
      <div className="container flex flex-col gap-5 items-center md:flex-row">
        <div
         data-aos="fade-right"
         data-aos-delay="500"
         data-aos-duration="1000"
        className="flex flex-col space-y-7 flex-1">
          <div>
            <h1 className="text-themeColor heading">Payments Accepted By</h1>
            <div className="w-[100px] h-[2px] bg-blue-800" />
          </div>

          <p className="text-gray-700 leading-[35px] font-semibold text-md">
            Deliver and capture secured transitions in one go with Fintola your
            one-stop payment solution. PayMe is an excellent platform for a
            merchant who wants to provide the quickest and most convenient
            payment options to their customers. we make payments easy for your
            customers and your team.
          </p>
<div className='max-w-[200px]' >

<Button text={'Try Now'} />
</div>

        </div>

        <div className="grid grid-cols-2 space-x-3 space-y-5 flex-1">
          {payTakenBy.map(({ title,Icon },i) => (
            <>
              <div
               data-aos="zoom-in"
               data-aos-delay={`${500 + i*100}`}
               data-aos-duration="1000"
              className="rounded-md shadow-lg flex flex-col items-center py-3 justify-center">
                <Image
                  src={Icon}
                  width={300}
                  height={100}
                  objectFit="contain"
                  className=""
                />
                <h3 className='text-gray-800 font-bold text-lg'>{title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PaymentSection
