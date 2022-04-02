import { useRouter } from "next/router";
import Image from "next/image";
import styles from "./ArticleDetail.module.scss";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://beta.mejorconsalud.com/wp-json/mc/v3/posts?orderby=date&order=desc"
  );
  const resJSON = await res.json();

  const paths = resJSON.data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(
    "https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts/" + id
  );
  const data = await res.json();

  console.log(data);

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: { article: data },
    revalidate: 10,
  };
};

const ProductDetail = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Cargando</h1>;
  }

  console.log("en Post Detail ", article);
  return (
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
          <hr />
          <hr />
          <span>Content : </span>
          <span dangerouslySetInnerHTML={{ __html: article.content }} />
          <hr />
          <hr />
        </div>
        <div className={styles.right}>
          <Image
            src={article?.featured_media.medium_large}
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

export default ProductDetail;
