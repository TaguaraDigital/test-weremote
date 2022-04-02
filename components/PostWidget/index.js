import styles from "./PostWidget.module.scss";

const PostWidget = () => {
  return (
    <div className={styles.container}>
      <h2>New Post</h2>
      <p> Aqui debe mostras los 3 ultimos post</p>
    </div>
  );
};

export default PostWidget;
