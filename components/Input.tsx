import React from 'react'
import styles from '../styles/modules/Input.module.scss'

type InputProps = {
  id: string;
  label: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  isPassword?: boolean;
}

export default function Input({
  id,
  label,
  name,
  className,
  onChange,
  isPassword
}: InputProps) {
  return (
    <div className={`${styles.container} ${className}`}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input 
        type={`${isPassword ? 'password' : 'text'}`}
        id={id} 
        className={styles.input}
        name={name}
      />
    </div>
  )
}
