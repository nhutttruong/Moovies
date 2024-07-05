import React, { useContext } from "react";
import { AppContext } from "../App";
import MovieCard from "./MovieCard";

const SearchResults = () => {
  const { movies, searchTerm } = useContext(AppContext);
  console.log(movies.length);
  return (
    <div>
      <div
        className={
          "flex justify-center " +
          (movies && movies.length > 1 ? "" : "h-screen")
        }
      >
        {movies && movies.length > 0 ? (
          <div
            className={
              (movies.length === 1
                ? "h-screen"
                : "flex flex-wrap justify-center") +
              " gap-1 min-[1500px]:w-[1400px] min-[1500px]:block"
            }
          >
            {movies.map((item, index) => (
              <MovieCard key={index} movie={item} />
            ))}
          </div>
        ) : (
          <div className="">
            <div className="text-gray-400 text-lg italic">
              There are no movies contain the keyword "{searchTerm}"
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
