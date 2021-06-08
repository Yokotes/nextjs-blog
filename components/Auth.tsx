import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import styles from '../styles/modules/Auth.module.scss'
import Button from './Button';

export default function Auth() {
  const profile = useSelector((state: RootState) => state.profile.profile.currentUser);

  return (
    !profile ? (
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
    ) : (
      <div className={styles.profile}>
        <Button className={styles.btn}>
          <Link href="/newPost">
            <a className={styles.btnLink}>Add post</a>
          </Link>
        </Button>
        {profile}
      </div>
    )
  )
}
