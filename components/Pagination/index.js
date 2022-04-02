import { useContext, useState } from "react";
import styles from "./Pagination.module.scss";
import { FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";
import { Store } from "../../utils/store";

const Pagination = () => {
  const { search, searchResult, setSearch } = useContext(Store);
  const [page, setPage] = useState(search.currentPage);
  const [limit, setLimit] = useState(10);

  const handlePagination = (nextPage) => {
    alert("buscando la pagina " + nextPage);
    setPage(nextPage);
    setSearch({ ...search, currentPage: nextPage });
  };

  return (
    <div className={styles.pagination}>
      <div>
        <div className="row">
          <button
            onClick={() => handlePagination(page - 1)}
            disabled={page === 1}
          >
            <FaChevronLeft />
          </button>
          <span>
            {page} / {searchResult.pages}
          </span>
          <button onClick={() => handlePagination(page + 1)}>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div>
        Resultado de la busqueda : hay {searchResult.size}{" "}
        {searchResult.size > 1 ? "articulos" : "articulo"}
      </div>
    </div>
  );
};

export default Pagination;
