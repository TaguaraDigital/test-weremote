import { useContext, useState } from "react";
import styles from "./Search.module.scss";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { Store } from "../../utils/store";
const Search = () => {
  const [searchLocal, setSearchLocal] = useState("");
  const { search, setSearch } = useContext(Store);

  const searchData = (criterio, search) => {
    let URL = `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${search}`;
    if (criterio === "relevance") {
      URL = `https://beta.mejorconsalud.com/wp-json/mc/v3/posts?search=${search}&page=1&orderby=relevance`;
    }
    console.log(URL);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (searchLocal === "") {
      alert("debe indicar el criterio de busqueda");
    } else {
      setSearch({ word: searchLocal, order: "relevance" });
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <div className={styles.flex}>
          <input
            type="text"
            placeholder="Buscar artículos, noticias, etc...."
            value={searchLocal}
            onChange={(e) => setSearchLocal(e.target.value)}
          />
          <button onClick={handleClick}>
            <FaSearch /> <span>Search</span>
          </button>
        </div>
      </form>
      <div>
        <label htmlFor="relevance"> Order By:</label>
        <select id="relevance" className={styles.select}>
          <option value="date"> Date</option>
          <option value="relevance">Relevance</option>
        </select>
      </div>

      {/* <div className={styles.row}>
        <button className={styles.prev} aria-label="prev">
          <FaChevronLeft />
        </button>
        <span> 1 </span>
        <button className={styles.next} aria-label="next">
          <FaChevronRight />
        </button>
      </div> */}

      {/* <div>
        <label htmlFor="per-page">Per Page:</label>
        <select id="per-page">
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div> */}
    </div>
  );
};

export default Search;
