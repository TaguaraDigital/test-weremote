import styles from "../styles/Home.module.scss";
import PostsList from "../components/PostsList";
import Search from "../components/Search";
import Sidebar from "../components/Sidebar";
import { Store } from "../utils/store";
import { useContext, useEffect, useState } from "react";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc"
  );
  const resJSON = await res.json();
  return {
    props: { postsInitial: resJSON.data },
  };
};

const Home = ({ postsInitial }) => {
  const { search, searchResult, setSearchResult } = useContext(Store);
  const [state, setState] = useState({
    posts: [],
    loading: false,
    error: "",
  });

  const fetchData = async () => {
    setState({ ...state, loading: true });
    try {
      let URL = `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${search.word}`;
      if (search.order === "relevance") {
        URL += "&page=1&orderby=relevance";
      }
      const res = await fetch(URL);
      const data = await res.json();
      setState({ ...state, posts: data.data, loading: false });
      setSearchResult({
        size: data.size,
        pages: data.pages,
        status: "ok",
      });
    } catch (err) {
      console.log("hay un error", err);
      setState({ ...state, error: err.message, loading: false });
    }
  };

  useEffect(() => {
    if (search.word !== "") {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  let articulos = state.posts.length > 0 ? state.posts : postsInitial;
  const { loading, error } = state;

  return loading ? (
    <div> Cargando data</div>
  ) : error ? (
    <div> {error} </div>
  ) : (
    <main className={styles.main}>
      <h1 className={styles.title}>Welcome</h1>
      <Search />
      {searchResult.status === "ok" && searchResult.size > 0 && (
        <div>Resultado de la busqueda : hay {searchResult.size} </div>
      )}
      {searchResult.status === "ok" && searchResult.size === 0 && (
        <div>¡No hay artículos relacionados con el término de búsqueda! </div>
      )}
      <div className={styles.grid}>
        <PostsList posts={articulos} />
        <Sidebar />
      </div>
    </main>
  );
};

export default Home;
