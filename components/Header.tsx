import styles from '../styles/modules/Header.module.scss'
import Auth from './Auth'
import Logo from './Logo'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.container}`}>
        <Logo />
        <Auth />
      </div>
    </header>
  )
}
