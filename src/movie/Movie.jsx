import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import LinkButton from "./LinkButton";
import TitleAndOverview from "./TitleAndOverview";
import RatingStar from "./RatingStar";
import {ClipLoader} from 'react-spinners'
const Movie = () => {
  const { id } = useParams();
  const apiUrl = "https://api.themoviedb.org/3/";
  const api_key = "04c35731a5ee918f014970082a0088b1";
  const imageUrl = "https://image.tmdb.org/t/p/original";
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(`${apiUrl}movie/${id}?api_key=${api_key}`);
        setMovie(await res.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error at data fetching:", error);
        setError("Error at data fetching");
      }
    };
    getMovie();
  }, [id]);
  console.log(movie);
  return (
    <>
      {!error && isLoading && (
        <div className="w-full min-h-screen flex items-center justify-center">
          <ClipLoader color="#eab308" />
        </div>
      )}
      {error && (
        <div className="w-full min-h-screen flex items-center justify-center">
          <h1 className="text-[22px] font-semibold text-yellow-500">{error}</h1>
        </div>
      )}
      {!isLoading && !error && (
        <div
          className={` bg-fixed bg-center bg-no-repeat bg-cover`}
          style={{
            backgroundImage: `url(${imageUrl + movie.backdrop_path})`,
          }}
        >
          <div className="w-full backdrop-blur-[10px] px-0  sm:px-32 md:px-56">
            <div className="w-full bg-[#646290] min-h-screen">
              <RatingStar movie={movie} />
              <div className="relative">
                <img
                  src={imageUrl + movie.backdrop_path}
                  className=" md:h-[450px] w-full object-cover "
                />
                {movie.tagline && (
                  <h4 className="absolute bg-yellow-500 py-2 px-5 -bottom-3 left-5 sm:left-10 italic text-[14px] ss:text-[16px] sm:text-[20px] font-Poppins -skew-x-6 rounded-sm shadow-[5px_2px_15px_rgba(0,0,0)] uppercase w-full max-w-[250px] xs:max-w-[400px]">
                    "{movie.tagline}"
                  </h4>
                )}
              </div>
              <TitleAndOverview movie={movie} />
              <LinkButton
                apiUrl={apiUrl}
                id={id}
                api_key={api_key}
                movie={movie}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Movie;
