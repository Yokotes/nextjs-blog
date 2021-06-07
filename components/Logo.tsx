import Link from 'next/link'
import styles from '../styles/modules/Logo.module.scss'

export default function Logo() {
  return (
    <div className={styles.logo}>
      <Link href="/">
        <a>
          NextJS Blog
        </a>
      </Link>
    </div>
  )
}
