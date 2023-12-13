import React, { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const ToggleSelect = ({ isToggle, callBack, styles }) => {
  const {
    setGenreId,
    setSelectList,
    setSearchValue,
    setIsLoading,
    setCurrentPage,
    setSidebar
  } = useContext(MyContext);
  const selectValue = [
    {
      id: 1,
      name: "popular",
      text: "Popular",
    },
    {
      id: 2,
      name: "top_rated",
      text: "Top Rated",
    },
    {
      id: 3,
      name: "now_playing",
      text: "Now Playing",
    },
  ];
  return (
    <div
      className={` absolute  w-full left-0 px-2 overflow-hidden z-30 select-toggle ${
        isToggle ? "open" : ""
      }`}
    >
      {selectValue.map((select, index) => (
        <p
          className={`hover:text-black transition-colors hover:bg-yellow-500 py-1 px-4  ${styles} text-yellow-500 cursor-pointer select-none ${
            index === 0 && "rounded-t-lg"
          } ${index === 2 && "rounded-b-lg"}`}
          key={select.id}
          onClick={() => {
            setSelectList(select.name);
            callBack(select.text, false);
            setGenreId(false);
            setSearchValue("");
            setIsLoading(true);
            setCurrentPage(1);
            setSidebar(false)
            window.scrollTo(0, 0);
          }}
        >
          {select.text}
        </p>
      ))}
    </div>
  );
};

export default ToggleSelect;
