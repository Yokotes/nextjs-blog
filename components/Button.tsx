import React from 'react'
import styles from '../styles/modules/Button.module.scss'

type ButtonProps = {
  children: React.ReactChild;
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  className,
  onClick
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
