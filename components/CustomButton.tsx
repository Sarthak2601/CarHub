'use client'; 
import React from 'react'
import Image from 'next/image'; 
import { CustomButtonProps } from '@/types';



const CustomButton = ({title, containerStyles, handleOnClick}: CustomButtonProps) => {
  return (
    <button
        disabled = {false}
        type={'button'}
        className={`custom-btn ${containerStyles}`}
        onClick={handleOnClick}
    >
        <span className={'flex-1'}>
            {title}
        </span>
    </button>
  )
}

export default CustomButton