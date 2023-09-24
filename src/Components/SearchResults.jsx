import React, { useContext } from "react";
import { AppContext } from "../App";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const { movies } = useContext(AppContext);
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-1 min-[1500px]:w-[1400px] min-[1500px]:block ">
        {movies.map((item, index) => (
          <MovieCard key={index} movie={item} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
