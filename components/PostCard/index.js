import Image from "next/image";
import Link from "next/link";
import styles from "./PostCard.module.scss";
const Footer = ({ post }) => {
  return (
    <Link href={`/post/${post.id}`} passHref>
      <article className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>{post.title} </h2>
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
    </Link>
  );
};

export default Footer;
