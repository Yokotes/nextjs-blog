import Link from 'next/link'
import styles from '../styles/modules/Post.module.scss'
import Button from './Button'

export type PostProps = {
  id: string;
  title: string;
  preview: string;
  date: string;
}

export default function Post({
  id,
  title,
  preview,
  date
}: PostProps) {
  return (
    <div className={styles.post}>
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>
        {preview}
      </p>
      <div className={styles.panel}>
        <Button className={styles.btn}>
          <Link href='/posts/[id]' as={`/posts/${id}`}>
            <a className={styles.btnContent}>Read more</a>
          </Link>
        </Button>
        <div className={styles.date}>
          {date}
        </div>
      </div>
    </div>
  )
}
