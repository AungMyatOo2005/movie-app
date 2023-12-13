import React from "react";
import ContextProvider from "./context/ContextProvider";
import "./App.css";
import Home from "./home/Home";
import {
  HashRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Movie from "./movie/Movie";
import FavoriteMovieList from "./favorite/FavoriteMovieList";
import PageNotFound from "./page_not_found/PageNotFound";

const App = () => {
  return (
    <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/favorite" element={<FavoriteMovieList />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
    </ContextProvider>
  );
};

export default App;
