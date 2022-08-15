import React from 'react'
import { Button as ButtonMui } from '@mui/material'

const Button = ({ text }) => {
  return (
    <ButtonMui className="bg-themeColor hover:scale-95 hover:bg-blue-800 px-8 transition-all ease-in-out duration-500 py-2 text-white font-bold">
      {text}
    </ButtonMui>
  )
}

export default Button
