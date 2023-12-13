import React, { useContext, useState } from "react";
import genres from "../services/GenreServices";
import ToggleSelect from "./ToggleSelect";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { MyContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [selectText, setSelectText] = useState("Popular");
  const navigator = useNavigate();
  const {
    setSearchValue,
    setGenreId,
    genreId,
    setIsLoading,
    setCurrentPage,
    setSidebar,
    movies,
    setMovies,
  } = useContext(MyContext);
  return (
    <div className="mt-3 flex flex-col gap-2 h-[450px] overflow-y-auto overflow-x-hidden side-bar fixed scroll-smooth ">
      <button
        className="bg-yellow-500 py-2 px-2 rounded-sm text-[12px] font-Poppins hover:scale-105  active:scale-100 active:translate-y-0 w-[100px] mb-2 mx-auto"
        onClick={() => {
          navigator("/favorite");
          setIsLoading(true);
        }}
      >
        My Favorite
      </button>
      <div
        className={`text-blue-500 text-[18px] select-none relative w-full genre py-4 px-8 ${
          !genreId ? "bg-[#8f8f8f28]" : ""
        }`}
        onClick={() => {
          setGenreId(false);
        }}
      >
        <div className="flex items-center gap-2 z-10 w-full text-[16px]">
          {selectText}
          <button
            className=" cursor-pointer p-2"
            onClick={() => {
              setGenreId(false);
              // setSearchValue("");
              setCurrentPage(1);
              setIsToggle((pre) => !pre);
            }}
          >
            {isToggle ? (
              <ChevronUpIcon className="w-[20px] text-white" />
            ) : (
              <ChevronDownIcon className="w-[20px] text-white" />
            )}
          </button>
        </div>
        <ToggleSelect
          styles={"bg-[#1C223A]"}
          setIsToggle={setIsToggle}
          isToggle={isToggle}
          callBack={(text, toggle) => {
            setSelectText(text);
            setIsToggle(toggle);
          }}
        />
      </div>
      {genres.map((genre) => (
        <p
          className={`text-blue-500 text-[18px] py-4 px-8 genre select-none relative w-full ${
            genreId === genre.id ? "bg-[#8f8f8f28]" : ""
          }`}
          key={genre.id}
          onClick={() => {
            setGenreId(genre.id);
            setSearchValue("");
            setIsLoading(genreId !== genre.id && true);
            setCurrentPage(1);
            setSidebar(false);
            setMovies(genreId !== genre.id ? [] : movies);
            window.scrollTo(0, 0);
          }}
        >
          {genre.name}
        </p>
      ))}
    </div>
  );
};

export default SideBar;
