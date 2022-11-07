import { type ChangeEvent, useState } from 'react'
import './Textarea.scss'

type TextareaProps = {
    placeholder: string
    title: string
    className?: string
    textareaName: string
    disabled?: boolean
}

export const Textarea = ({placeholder, title, className, textareaName, disabled}: TextareaProps) => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const { value: targetValue }  = event.target
        setValue(targetValue)
    }
    const id = String(Math.random() * 10)
  return (
    <div className='textarea'>
        <p className='textarea__title'>{title}</p>
        <textarea 
        name={textareaName} 
        id={id} 
        placeholder={placeholder}
        className={`textarea__textarea textarea__textarea--${className}`}
        disabled={disabled}
        onChange={onChange}
        >
        </textarea>
    </div>
  )
}
