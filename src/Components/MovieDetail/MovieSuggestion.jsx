import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

const MovieSuggestion = ({ movieStat }) => {
  const { movies } = useContext(AppContext);
  return (
    <div className=" mx-10 w-50  bg-gray-900 mb-10 rounded-lg overflow-hidden ">
      <div className="bg-gray-800 rounded-lg  text-blue-400 py-1 text-center text-lg font-medium ml-1.5">
        SUGGEST FOR YOU
      </div>

      <div className="">
        <div className=" snap-y max-h-96 overflow-auto">
          {movies
            .filter((movie) => movie.Title !== movieStat.Title)
            .map((item, index) => (
              <Link
                to={`/${encodeURIComponent(item.Title.toLowerCase()).replace(
                  /%20/g,
                  "+"
                )}`}
                key={index}
              >
                <div
                  className="snap-start group flex items-center hover:cursor-pointer "
                  onClick={() => {
                    window.scrollTo({
                      top: 0,
                      behavior: "smooth",
                    });
                  }}
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
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieSuggestion;
