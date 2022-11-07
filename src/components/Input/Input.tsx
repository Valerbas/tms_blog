import {type ChangeEvent, useState, ReactElement} from 'react'
import './Input.scss'

type InputProps = {
    title: string
    placeholder: string
    type?: string
    className?: string
    disabled?: boolean
    error?: boolean
    errorText?: string
}

export const Input = ({title, placeholder, className, type, disabled,error, errorText}: InputProps) => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value: targetValue }  = event.target
        setValue(targetValue)
    }
    const id = String(Math.random() * 10)
  return (
    <div className="input">
      <label className="input__label" htmlFor={id}>
          {title}
      </label>
      <input
        id={id}
        className={`input__input ${error ? 'input__input--error' : null}`}
        type={type ?? 'text'}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      <span className="input__error">{error && errorText}</span>
    </div>
  )
}
