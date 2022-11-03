import React, { ButtonHTMLAttributes, ReactElement } from 'react'

import './Button.scss'

type ButtonProps = {
  text?: string
  disabled?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  className?: string
  icon?: ReactElement
}

export const Button = ({ className, text, disabled, onClick, icon}: ButtonProps) => {
  return (
    <button 
      className={className} 
      disabled={disabled}
      onClick={onClick}
    >   
      {icon}
      {text && <span className='button__text'>{text}</span>}
    </button>
  )
}
