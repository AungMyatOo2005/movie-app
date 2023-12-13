import React, { Children, createContext, useState } from "react";
export const MyContext = createContext();
const ContextProvider = ({ children }) => {
  const [genreId, setGenreId] = useState(false);
  const [selectList, setSelectList] = useState("popular");
  const [searchValue, setSearchValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [sidebar, setSidebar] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <MyContext.Provider
      value={{
        genreId,
        setGenreId,
        selectList,
        setSelectList,
        searchValue,
        setSearchValue,
        isLoading,
        setIsLoading,
        currentPage,
        setCurrentPage,
        sidebar,
        setSidebar,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
