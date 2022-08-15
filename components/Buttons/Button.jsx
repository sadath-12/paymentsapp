import React from 'react'
import { Button as ButtonMui } from '@mui/material'

const Button = ({text}) => {
  return (
    <ButtonMui className='bg-themeColor hover:scale-90 hover:bg-blue-600 px-8 py-2 text-white font-bold' >
      {text}
    </ButtonMui>
  )
}

export default Button