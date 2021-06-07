import Layout from "../components/Layout";
import PageTitle from "../components/PageTitle";
import PostsList from "../components/PostsList";

export default function Index() {
  return (
    <Layout title="Home page">
      <div className="page">
        <PageTitle>
          Home page
        </PageTitle>
        <PostsList 
          posts={[{
            id: 1,
            title: "New post",
            preview: "Random preview text",
            date: "2020-07-06"
          }]}
        />
      </div>
    </Layout>
  )
}
