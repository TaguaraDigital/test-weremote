import Image from "next/image";
import Link from "next/link";
import styles from "./PostCard.module.scss";
const Footer = ({ post }) => {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <Link href={`/articulos/${post.id}`}>
          <a>
            <h2 className={styles.title}>{post.title} </h2>
          </a>
        </Link>
      </div>
      <div className={styles.body}>
        <div className={styles.imgcontainer}>
          <Image
            className={styles.img}
            src={post.featured_media.thumbnail}
            alt={post.slug}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <p> {post.excerpt}</p>
      </div>
    </article>
  );
};

export default Footer;
