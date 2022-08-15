import Image from 'next/image'
import React from 'react'
import Button from '../Buttons/Button'
import { FiExternalLink } from 'react-icons/fi'

const Service = ({ title, desc, img }) => {
  return (
    <div className=" backdrop-blur-3xl  bg-opacity-60 relative drop-shadow-2xl bg-white text-gray-800 px-5 min-w-[250px] rounded-lg py-2 space-y-5">
      <h2 className="font-bold text-xl">{title}</h2>
      <Image src={img} width={200} height={100} objectFit="contain" />
      <p className="font-semibold text-sm p-1">{desc}</p>

      <div className="absolute bottom-4 right-2  ">
        <FiExternalLink className="text-2xl" />
      </div>
    </div>
  )
}

export default Service
