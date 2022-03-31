import styles from "./Search.module.scss";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
const Search = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.flex}>
          <input type="text" placeholder="Enter your search" />
          <button>
            <FaSearch /> <span>Search</span>
          </button>
        </div>
      </form>

      <div className={styles.row}>
        <button className={styles.prev} aria-label="prev">
          <FaChevronLeft />
        </button>
        <span> 1 </span>
        <button className={styles.next} aria-label="next">
          <FaChevronRight />
        </button>
      </div>

      <div>
        <label htmlFor="per-page">Per Page:</label>
        <select id="per-page">
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>
    </div>
  );
};

export default Search;
