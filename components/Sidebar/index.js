import styles from "./Sidebar.module.scss";
import Categories from "../Categories";
import PostWidget from "../PostWidget";
const Search = () => {
  return (
    <div className={styles.container}>
      <Categories />
      <PostWidget />
    </div>
  );
};

export default Search;
