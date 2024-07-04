import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SearchResults from "./SearchResults";
import { MovieStats } from "./MovieDetail/MovieStats_main";

const Routerr = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Moovies" replace={true} />} />
        <Route path="/Moovies" element={<SearchResults />} />
        <Route path="/:id" element={<MovieStats />} />
      </Routes>
    </div>
  );
};

export default Routerr;
