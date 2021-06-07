import styles from '../styles/modules/Pagination.module.scss'
import Button from './Button';

type PaginationProps = {
  pages: number;
}

export default function Pagination({
  pages
}: PaginationProps) {
  let pagesList = [];

  for (let i = 1; i <= pages; i++) {
    pagesList.push(i);
  }

  return (
    <div className={styles.pagination}>
      {
        pagesList.map(page => (
          <Button className={styles.page} key={page}>
            {page}
          </Button>
        ))
      }
    </div>
  )
}
