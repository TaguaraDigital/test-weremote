import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ArticleDetail.module.scss";

export function getServerSideProps(cxt) {
  return {
    props: { id: cxt.params.id },
  };
}

const ArticleDetail = ({ id }) => {
  const [state, setState] = useState({
    article: null,
    loading: true,
    error: "",
  });

  const { article, loading, error } = state;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/${id}`
        );
        const data = await res.json();
        console.log("es aqui", data);
        setState({ ...state, article: data, loading: false });
      } catch (err) {
        console.log("hay un error", err);
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div> Cargando data</div>
  ) : error ? (
    <div> {error} </div>
  ) : (
    <section className={styles.section}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.row}>
        <div className={styles.left}>
          <div>Codigo: {article.id}</div>
          <div>Slug: {article.slug}</div>
          <div>Product: {article.link}</div>
          <div>Product: {article.excerpt}</div>
          <div>Product: {article.content}</div>
        </div>
        <div className={styles.right}>
          <Image
            src={article.featured_media.medium_large}
            alt=""
            width={400}
            height={400}
          />
        </div>
      </div>
      <div className={styles.autor}>
        <div className={styles.avatar}>
          <Image
            src={article.author.picture}
            alt={article.author.name}
            layout="fill"
          />
        </div>
        <div>Autor: {article.author.name}</div>
      </div>

      <div className={styles.categories}>
        <div>Categoria: {article.categories[0].name}</div>
      </div>
    </section>
  );
};

export default ArticleDetail;
