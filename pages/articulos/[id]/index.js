import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./ArticleDetail.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

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
    setState({ ...state, loading: true });
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/${id}`
        );
        const data = await res.json();
        setState({ ...state, article: data, loading: false });
      } catch (err) {
        console.log("hay un error", err);
        setState({ ...state, error: err.message, loading: false });
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state.loading ? (
    <div className="spinner"></div>
  ) : error ? (
    <div> {error} </div>
  ) : (
    <section className={styles.section}>
      <div className={styles.title}>{article.title}</div>
      <div className={styles.back}>
        <Link href="/">
          <a>
            <FaArrowLeft /> Back to home
          </a>
        </Link>
      </div>
      <p>
        La página única de un artículo debe contener algunos elementos básicos:
        título, categoría, fecha de publicación, contenido (texto legible),
        etiquetas, biografías y nombre del autor.
      </p>

      <div className={styles.row}>
        <div className={styles.left}>
          <div>Codigo: {article.id}</div>
          <div>Slug: {article.slug}</div>
          <div>Link: {article.link}</div>
          <div>Excerpt: {article.excerpt}</div>
          <>{article.content}</>
        </div>
        <div className={styles.right}>
          <Image
            src={article.featured_media.medium_large}
            alt=""
            layout="fill"
          />
        </div>
      </div>
      <div className={styles.autor}>
        <div className={styles.avatar}>
          {/* <Image
            src={article.author?.picture}
            alt={article.author?.name}
            layout="fill"
          /> */}
        </div>
        <div>Autor: {article.author?.name}</div>
      </div>

      <div className={styles.categories}>
        <div>Categoria: {article.categories[0].name}</div>
      </div>
    </section>
  );
};

export default ArticleDetail;
