import React, { useContext } from "react";
import genres from "../services/GenreServices";
import { StarIcon } from "@heroicons/react/24/solid";
import { MyContext } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
const MovieCard = ({ movie }) => {
  const { genreId, setIsLoading } = useContext(MyContext);
  const imageUrl = "https://image.tmdb.org/t/p/w500";
  const navigator = useNavigate();
  return (
    <div
      className="relative cursor-pointer hover:scale-105 translate-y-2 transition-all"
      onClick={() => {
        navigator(`/movie-app/movie/${movie.id}`);
        setIsLoading(true);
      }}
    >
      <p className="absolute bg-yellow-500 rounded-full text-[10px] py-[1px] px-2 top-[-5px] right-3 flex items-center gap-1">
        <StarIcon className="w-[8px]" />
        {movie.vote_average.toFixed(1)}
      </p>
      <img
        src={`${imageUrl + movie.poster_path}`}
        className="w-full h-[170px] ss:h-[250px] sm:h-[300px] object-cover rounded-[10px]"
      />
      <div className="mt-4 px-4">
        <h4 className="text-white text-[12px] xs:text-[16px]">{movie.title}</h4>
        <p className="text-gray-500 font-[13px]">
          {!genreId
            ? movie.genre_ids.length > 0 &&
              genres.find((genre) => genre.id === movie.genre_ids[0])?.name
            : genres.find((genre) => genre.id === genreId)?.name}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
