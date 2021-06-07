import React from 'react'
import styles from '../styles/modules/PageTitle.module.scss'

type PageTitleProps = {
  children: React.ReactChild;
}

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <h1 className={styles.title}>
      { children }
    </h1>
  )
}
