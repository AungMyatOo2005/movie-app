import React from "react";
import ContextProvider from "./context/ContextProvider";
import "./App.css";
import Home from "./home/Home";
import { HashRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";
import Movie from "./movie/Movie";
import FavoriteMovieList from "./favorite/FavoriteMovieList";
import PageNotFound from "./page_not_found/PageNotFound";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter basename="/movie-app/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/favorite" element={<FavoriteMovieList />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
