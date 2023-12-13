import React, { useContext } from "react";
import { MyContext } from "../context/ContextProvider";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
const Head = () => {
  const {
    setSearchValue,
    searchValue,
    setIsLoading,
    setCurrentPage,
    sidebar,
    setSidebar,
  } = useContext(MyContext);
  return (
    <div
      className="py-5 px-4 sm:px-8 flex flex-col items-center gap-4 fixed backdrop-blur-[5px] w-full z-10 bg-[#00000036]"
      onClick={() => setSidebar(false)}
    >
      <div className="gap-6 md:gap-10items-center justify-between w-full flex items-center">
        <h3 className="text-[22px] sm:text-[30px] font-Poppins text-yellow-500 font-bold">
          Metflix
        </h3>
        <input
          className="bg-[#1C223A] hidden ss:block w-[400px] sm:w-[500px] rounded-full py-2 px-4 placeholder:text-gray-500 outline-none text-white"
          placeholder="Search Movies..."
          onChange={(e) => {
            setSearchValue(e.target.value);
            setIsLoading(true);
            window.scrollTo(0, 0);
            setCurrentPage(1);
          }}
          value={searchValue}
        />
        <button
          onClick={(e) => {setSidebar((pre) => !pre);e.stopPropagation()}}
          className="md:hidden block"
        >
          {sidebar ? (
            <XMarkIcon className="w-[30px] text-yellow-500" />
          ) : (
            <Bars3BottomRightIcon className="w-[30px] text-yellow-500" />
          )}
        </button>
      </div>
      <input
        className="bg-[#1C223A] block ss:hidden w-full rounded-full py-2 px-4 placeholder:text-gray-500 outline-none text-white"
        placeholder="Search Movies..."
        onChange={(e) => {
          setSearchValue(e.target.value);
          setIsLoading(true);
          window.scrollTo(0, 0);
          setCurrentPage(1);
        }}
        value={searchValue}
      />
    </div>
  );
};

export default Head;
