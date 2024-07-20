import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../App";

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDisplayTitle, setIsDisplayTitle] = useState(true);
  const [isAppearCompleteMark, setIsAppearCompleteMark] = useState(true);
  const { langDict } = useContext(AppContext);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDisplayTitle(false);
    setIsAppearCompleteMark(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDisplayTitle(true);
    setIsAppearCompleteMark(true);
  };

  return (
    <div
      className="relative 
                  basis-[45%] 
                  sm:basis-1/5
                  min-h-[446px]
                  min-w-[300px]
                  min-[1500px]:inline-block
                  m-2 rounded-lg overflow-hidden"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    >
      {/* link to movie detail */}
      <Link
        to={`/Moovies/info/${encodeURIComponent(
          movie.Title.toLowerCase()
        ).replace(/%20/g, "+")}`}
      >
        <img
          title={movie.Title}
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="object-cover hover:scale-105 hover:duration-500 duration-500 hover:cursor-pointer"
        />
      </Link>

      {isAppearCompleteMark && (
        <span
          className={`absolute badge text-center font-medium bg-gradient-to-r ${
            !movie.Year.endsWith("–")
              ? "from-green-300 to-green-700"
              : "from-orange-300 to-orange-700"
          }`}
        >
          {!movie.Year.endsWith("–")
            ? `${langDict.CompleteState}`
            : `${langDict.InCompleteState}`}
        </span>
      )}

      {isHovered && (
        <div
          className="absolute top-2 px-2 rounded-lg text-xl bg-gray-500 text-white font-bold m-2"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {movie.Year}
        </div>
      )}

      {isDisplayTitle && (
        <div className="duration-500 absolute bottom-0 pl-4 py-4  bg-gray-800 w-full">
          <div className="uppercase text-stone-400 sm:text-lg">
            {movie.Type}
          </div>
          <Link
            to={`/${encodeURIComponent(movie.Title.toLowerCase()).replace(
              /%20/g,
              "+"
            )}`}
          >
            <p className="font-bold break-words text-yellow-400 text-base min-[575px]:text-sm min-[786px]:text-lg hover:text-blue-400 hover:cursor-pointer">
              {movie.Title}
            </p>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
