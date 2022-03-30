import styles from "../styles/Home.module.scss";
import PostsList from "../components/PostsList";
import Search from "../components/Search";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc"
  );
  const resJSON = await res.json();
  return {
    props: { posts: resJSON.data },
  };
};

const Home = ({ posts }) => {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome</h1>
      <Search />
      <PostsList posts={posts} />
    </main>
  );
};

export default Home;
