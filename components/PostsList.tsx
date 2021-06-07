import styles from '../styles/modules/PostsList.module.scss'
import Pagination from './Pagination'
import Post, { PostProps } from './Post'

type PostsListProps = {
  posts: PostProps[];
}

export default function PostsList({ posts }) {
  return (
    <>
      <div className={styles.list}>
        {
          posts.map(({id, title, preview, date}) => (
            <Post 
              id={id}
              title={title}
              preview={preview}
              date={date}
            />
          ))
        }
        {
          !posts.length && <div>There is no posts</div>
        }
      </div>
      <Pagination
        pages={5}
      />
    </>
  )
}
