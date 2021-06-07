import React from 'react'
import styles from '../styles/modules/Form.module.scss'

type FormProps = {
  children: React.ReactChild;
  onSubmit?: (e: React.FormEvent) => void;
  className?: string;
}

export default function Form({
  children,
  onSubmit,
  className
}: FormProps) {
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles.form} ${className}`}
    >
      {children}
    </form>
  )
}
