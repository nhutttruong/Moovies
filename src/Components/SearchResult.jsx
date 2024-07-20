import React, { useContext } from "react";
import { AppContext } from "../App";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./Skeletons/MovieCardSkeleton";
import { useLocation, useParams } from "react-router-dom";

const SearchResult = () => {
  const { movies, isLoading } = useContext(AppContext);

  const { id } = useParams();

  return (
    <div>
      <div className={`flex justify-center`}>
        <div
          className={
            (movies.length === 1
              ? "h-screen"
              : "flex flex-wrap justify-center") +
            " gap-1 min-[1500px]:w-[1400px] min-[1500px]:block"
          }
        >
          {isLoading && <MovieCardSkeleton cards={8} />}
          {movies.map((item, index) => (
            <MovieCard key={index} movie={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="">
            <div className="text-gray-400 text-lg italic">
              There are no movies contain the keyword "{searchTerm}"
            </div>
          </div> */
}

export default SearchResult;
