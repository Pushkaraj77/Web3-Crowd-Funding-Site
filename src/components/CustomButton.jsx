import React from 'react'

const CustomButton = ({btnType, title, handleClick,
styles }) => {
  return (
    <button
    type={btnType}
    className={`font-epilogue font-semibold
    text-[16px] leading-[20px] text-white 
    min-h-[40px] max-w-fit px-4 rounded-[10px] ${styles}`}
    onClick={handleClick}
    >
        {title}
    </button>
  )
}

export default CustomButton
