import React from "react";

const TitleAndOverview = ({ movie }) => {
  return (
    <div className="sm:px-10 px-4 pt-10">
      <h1 className="text-white font-bold text-[18px] sm:text-[22px] max-w-[500px] tracking-[2px] uppercase flex">
        {movie.title}
        <span className="text-[22px] sm:text-[28px] text-white ml-2">
          ({movie.release_date.slice(0, 4)})
        </span>
      </h1>

      <div className="py-3 mt-2 text-white flex flex-wrap items-center gap-1 text-[14px] ss:text-[16px] sm:text-[18px] font-semibold font-Poppins">
        {movie.genres.map((genre) => (
          <p key={genre.id}>{genre.name} /</p>
        ))}
        <p>{movie.runtime} min</p>
      </div>
      <div className="font-Poppins flex items-center gap-1">
        <span className="text-yellow-500">Release Date</span>
        <span className="text-white">- {movie.release_date}</span>
      </div>
      <div className="font-Poppins flex items-center gap-1">
        {movie.budget && (
          <>
            <span className="text-yellow-500">Budget</span>
            <span className="text-white">
              - ${movie.budget.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
            </span>
          </>
        )}
      </div>
      <p className="mt-5 text-white font-Poppins text-[14px]">
        {movie.overview} /
      </p>
    </div>
  );
};

export default TitleAndOverview;
