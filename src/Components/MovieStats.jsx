import React, { useContext } from "react";
import { MovieDetail } from "./MovieDetail";
import { ThemeContext } from "../App";

export const MovieStats = () => {
  const { movies, movieStat, setSelectedMovie, handleSelectedMovie } =
    useContext(ThemeContext);
  const handleRelatedClick = (title) => {
    setSelectedMovie(title);
    handleSelectedMovie(title);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-center m-10 mt-0 ">
        <div className="flex flex-col sm:flex-row items-left">
          <div className="max-h-[435px] flex justify-center">
            <div className="bg-gray-700 w-64 mr-2 rounded-lg overflow-hidden">
              <img
                src={movieStat.Poster}
                alt={movieStat.Title}
                className="object-cover"
              ></img>
              <div className="flex justify-center">
                <button className="bg-green-500 my-2 py-2 font-bold text-gray-100  hover:bg-green-400 rounded-lg w-28 items-center justify-center">
                  Watch
                </button>
              </div>
            </div>
          </div>

          <MovieDetail movieStat={movieStat} />
        </div>

        <div>
          <div className=" p-3 mt-3 bg-gray-800 rounded-lg">
            <div className="text-amber-400 font-medium ">PLOT</div>
            <div className="text-gray-400 max-w-2xl">{movieStat.Plot}</div>
          </div>
        </div>
      </div>

      <div className=" mx-10 w-50  bg-gray-900 mb-10 rounded-lg overflow-hidden ">
        <div className="bg-gray-800 rounded-lg  text-blue-400 py-1 text-center text-lg font-medium ml-1.5">
          SUGGEST FOR YOU
        </div>

        <div className="">
          <div className=" snap-y max-h-96 overflow-auto">
            {movies
              .filter((movie) => movie.Title !== movieStat.Title)
              .map((item) => (
                <div
                  className="snap-start group flex items-center hover:cursor-pointer "
                  key={item.imdbID}
                  onClick={() => handleRelatedClick(item.Title)}
                >
                  <img
                    className="group-hover:bg-amber-400 rounded-sm w-11 object-cover pl-1.5 my-1 ml-1.5 -translate-x-1.5"
                    src={item.Poster}
                    alt={item.Title}
                  />
                  <div className="text-amber-400 md:text-sm overflow-x-auto group-hover:bg-gray-700 py-1.5 pl-1 justify-center w-full h-11 rounded-lg bg-gray-800 font-semibold ml-1.5">
                    {item.Title}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
