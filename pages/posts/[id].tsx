import styles from '../../styles/modules/postPage.module.scss'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
import PageTitle from '../../components/PageTitle';
import Button from '../../components/Button';
import Link from 'next/link';
import { GetStaticPaths, GetStaticProps } from 'next';

export default function postPage({ post: { title, date, text } }) {

  return (
    <Layout title="Post">
      <div className="page">
        <PageTitle>
          {title}
        </PageTitle>
        <p className={styles.text}>
          {text}
        </p>
        <div className={styles.panel}>
          <Button>
            <Link href="/">
              <a className={styles.link}>Back to home</a>
            </Link>
          </Button>
          <div className={styles.date}>
            {date}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await fetch(`http://localhost:4200/posts/${ctx.params.id}`);
  const post = await response.json();

  return {
    props: {
      post
    }
  }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: false
  }
}