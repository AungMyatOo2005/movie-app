import React from "react";
import ContextProvider from "./context/ContextProvider";
import "./App.css";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Movie from "./movie/Movie";
import FavoriteMovieList from "./favorite/FavoriteMovieList";
import PageNotFound from "./page_not_found/PageNotFound";
const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/movie-app" element={<Home />} />
          <Route path="/movie-app/movie/:id" element={<Movie />} />
          <Route path="/movie-app/favorite" element={<FavoriteMovieList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
