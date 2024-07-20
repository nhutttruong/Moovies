import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import { MovieStats } from "./MovieDetail/MovieStats_main";
import SearchResult from "./SearchResult";

const Routerr = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Moovies" replace={true} />} />
        <Route path="/Moovies" element={<HomePage />} />
        <Route path="/Moovies/search/keyword/:id" element={<SearchResult />} />
        <Route path="/Moovies/info/:id" element={<MovieStats />} />
      </Routes>
    </div>
  );
};

export default Routerr;
