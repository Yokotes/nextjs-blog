import { GetStaticProps } from "next";
import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PostsList from "../components/PostsList";

export default function Index({ posts }) {
  return (
    <Layout title="Home page">
      <div className="page">
        <PageTitle>
          Home page
        </PageTitle>
        <PostsList 
          posts={posts}
        />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const response = await fetch('http://localhost:4200/posts');
  const posts = await response.json();

  return {
    props: {
      posts
    }
  }
}