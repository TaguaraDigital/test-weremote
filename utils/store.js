import { createContext, useState } from "react";

export const Store = createContext();

export const StoreProvider = ({ children }) => {
  const [search, setSearch] = useState({ word: "", order: "" });
  const [searchResult, setSearchResult] = useState({
    size: 0,
    pages: 0,
    status: "",
  });
  const [posts, setPosts] = useState([]);

  const value = {
    search,
    setSearch,
    searchResult,
    setSearchResult,
    posts,
    setPosts,
  };

  return <Store.Provider value={value}>{children}</Store.Provider>;
};
