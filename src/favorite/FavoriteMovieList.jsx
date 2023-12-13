import React, { useEffect, useState } from "react";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router-dom";
const FavoriteMovieList = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    const movieLs = JSON.parse(localStorage.getItem("The-Movie-db"));
    setMovie(movieLs ? movieLs.reverse() : []);
  }, []);
  const navigator = useNavigate();
  return (
    <div className="w-full py-6 sm:px-16 px-6 ">
      <button
        onClick={() => navigator(-1)}
        className="hover:scale-105 hover:translate-y-[-2px] transition-transform"
      >
        <ArrowLongLeftIcon className="w-[40px] text-yellow-500" />
      </button>
      <h1 className="w-full text-yellow-500 font-semibold text-[24px] text-center underline">
        Favorite Movie List
      </h1>
      {movie && (
        <div className="grid grid-cols-3 sm:grid-cols-4 sm:gap-10 gap-4 pt-10">
          {movie.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoriteMovieList;
