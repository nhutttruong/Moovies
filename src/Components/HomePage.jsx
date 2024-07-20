import React, { useContext } from "react";
import { AppContext } from "../App";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./Skeletons/MovieCardSkeleton";

const HomePage = () => {
  const { movies, isLoading } = useContext(AppContext);

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

export default HomePage;
