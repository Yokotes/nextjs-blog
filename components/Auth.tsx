import Link from 'next/link';
import styles from '../styles/modules/Auth.module.scss'

export default function Auth() {
  return (
    <div className={styles.auth}>
      <Link 
        href="/signIn"
      >
        <a
          className={styles.link}
        >
          Sign In
        </a>
      </Link>
      <span className={styles.line}>/</span>
      <Link 
        href="/signUp"
      >
        <a
          className={styles.link}
        >
          Sign Up
        </a>
      </Link>
    </div>
  )
}
