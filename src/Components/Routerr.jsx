import React from "react";
import { Route, Routes } from "react-router-dom";
import SearchResults from "./SearchResults";
import { MovieStats } from "./MovieDetail/MovieStats";

const Routerr = () => {
  return (
    <div>
      <Routes>
        <Route path="/moovies" element={<SearchResults />} />
        <Route path="/moovies/:id" element={<MovieStats />} />
      </Routes>
    </div>
  );
};

export default Routerr;
