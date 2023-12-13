import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

import { MyContext } from "../context/ContextProvider";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import PageChange from "./PageChange";
const MovieList = () => {
  const {
    genreId,
    selectList,
    searchValue,
    isLoading,
    setIsLoading,
    currentPage,
    setCurrentPage,
    movies,
    setMovies,
  } = useContext(MyContext);
  const apiUrl = "https://api.themoviedb.org/3/";
  const api_key = "04c35731a5ee918f014970082a0088b1";
  const [error, setError] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  useEffect(() => {
    const getMovie = async () => {
      if (searchValue === "") {
        if (!genreId) {
          try {
            const res = await axios.get(
              `${apiUrl}movie/${selectList}?api_key=${api_key}&page=${currentPage}`
            );
            setMovies(res.data.results);
            setIsLoading(false);
            setTotalPage(selectList === "popular" ? 500 : res.data.total_pages);
          } catch (error) {
            console.error("Error fetching movies:", error);
            setError("Error at data fetching");
          }
        } else {
          try {
            const res = await axios.get(
              `${apiUrl}/discover/movie?api_key=${api_key}&with_genres=${genreId}&page=${currentPage}`
            );
            setMovies(res.data.results);
            setIsLoading(false);
            setTotalPage(500);
          } catch (error) {
            console.error(error);
            setError("Error at data fetching");
          }
        }
      } else {
        try {
          const res = await axios.get(
            `${apiUrl}search/movie?api_key=${api_key}&query=${searchValue}&page=${currentPage}`
          );
          setMovies(res.data.results);
          setIsLoading(false);
          setTotalPage(res.data.total_pages);
        } catch (error) {
          console.error(error);
          setError("Error at data fetching");
        }
      }
    };
    getMovie();
  }, [selectList, genreId, searchValue, currentPage, totalPage, isLoading]);
  const paginationChange = (e, value) => {
    window.scrollTo(0, 0);
    if (currentPage !== value) {
      setCurrentPage(value);
      setIsLoading(true);
    }
  };
  return (
    <>
      {error && (
        <div className="w-full bg-[#171934] flex justify-center items-center min-h-screen">
          <h1 className="text-[28px] font-Poppins text-yellow-500">{error}</h1>
        </div>
      )}
      {!error && (
        <div className="w-full bg-[#171934] flex justify-start min-h-screen flex-col pb-10">
          {!movies.length > 0 && !isLoading && (
            <h1 className="text-yellow-500 font-Poppins font-semibold text-[32px] w-full text-center pt-56">
              There is no movie in the data base.
            </h1>
          )}
          <div className="w-fit grid grid-cols-3 sm:grid-cols-4 gap-5 sm:gap-10 py-10 sm:px-10 px-5">
            {isLoading && !error && <Loading />}
            {!isLoading && !genreId
              ? movies
                  .filter((movie) => movie.poster_path)
                  .map((movie) => <MovieCard movie={movie} key={movie.id} />)
              : movies
                  .filter((movie) => movie.poster_path)
                  .sort((a, b) => b.vote_average - a.vote_average)
                  .map((movie) => <MovieCard movie={movie} key={movie.id} />)}
          </div>
          {totalPage > 1 && (
            <PageChange
              paginationChange={paginationChange}
              totalPage={totalPage}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default MovieList;
