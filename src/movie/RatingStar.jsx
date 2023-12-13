import React, { useEffect, useState } from "react";
import { StarIcon, ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

const RatingStar = ({ movie }) => {
  const [active, setActive] = useState(1);
  const [movieLs, setMovieLs] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    const movieId = JSON.parse(localStorage.getItem("The-Movie-db")) || [];
    setMovieLs(movieId);
  }, []);

  useEffect(() => {
    if (movie.vote_average > 9) {
      setActive(5);
    } else if (movie.vote_average > 8) {
      setActive(4);
    } else if (movie.vote_average > 6) {
      setActive(3);
    } else if (movie.vote_average > 4) {
      setActive(2);
    } else {
      setActive(1);
    }
  }, [movie.vote_average]);

  const isAlreadyHave = () =>
    movieLs.find((movieLs) => movieLs.id === movie.id);

  const handleLocalStorage = () => {
    if (!isAlreadyHave()) {
      const updatedMovieLs = [
        ...movieLs,
        {
          id: movie.id,
          poster_path: movie.poster_path,
          title: movie.title,
          genre_ids: movie.genres.map((genre) => genre.id),
          vote_average: movie.vote_average,
        },
      ];
      setMovieLs(updatedMovieLs);
      localStorage.setItem("The-Movie-db", JSON.stringify(updatedMovieLs));
    } else {
      const updatedMovieLs = movieLs.filter(
        (movieLs) => movieLs.id !== movie.id
      );
      setMovieLs(updatedMovieLs);
      localStorage.setItem("The-Movie-db", JSON.stringify(updatedMovieLs));
    }
  };

  return (
    <div className="w-full pt-2 pb-4 px-10">
      <div className="flex items-center w-full">
        <button
          className="hover:translate-y-[-2px] transition-transform"
          onClick={() => {
            navigator(-1);
          }}
        >
          <ArrowLongLeftIcon className="text-yellow-500 w-[40px] cursor-pointer" />
        </button>
        <div className="flex ml-auto gap-1">
          {Array.from({ length: 5 }, (_, index) => (
            <StarIcon
              className={`w-[18px] ${index < active ? "text-yellow-500" : ""}`}
              key={index}
            />
          ))}
          <span className="ml-1 text-yellow-500 font-semibold">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      <button
        className={`font-Poppins hover:scale-105 active:scale-100 active:translate-y-0   transition-transform absolute right-[20px] xs:right-[40px] ss:right-[50px] sm:right-[180px] md:right-[240px] z-[30] rounded-sm top-12 ${
          isAlreadyHave()
            ? "bg-yellow-500"
            : "border-2 border-yellow-400 bg-slate-500"
        } py-2 px-4 rounded-md text-white text-[14px] sm:text-[16px]`}
        onClick={handleLocalStorage}
      >
        {isAlreadyHave() ? "Remove from Favorite" : "Add to Favorite"}
      </button>
    </div>
  );
};

export default RatingStar;
