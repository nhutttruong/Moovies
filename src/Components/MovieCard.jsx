import React, { useState } from "react";

const MovieCard = ({ movie, handleSelectedMovie }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDisplayTitle, setIsDisplayTitle] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setIsDisplayTitle(false);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDisplayTitle(true);
  };

  return (
    <div className="relative basis-[45%] min-[575px]:basis-[20%] m-2 rounded-lg overflow-hidden">
      <img
        src={
          movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/400"
        }
        alt={movie.Title}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="object-cover min-h-[300px] hover:scale-105 hover:duration-500 duration-500 hover:cursor-pointer"
        onClick={() => handleSelectedMovie(movie.Title)}
      />

      {!movie.Year.endsWith("–") ? (
        <span className="absolute badge text-center font-medium bg-gradient-to-r from-green-300 to-green-700">
          COMPLETE
        </span>
      ) : (
        <div className="absolute badge text-center font-medium bg-gradient-to-r from-orange-300 to-orange-700">
          INCOMPLETE
        </div>
      )}

      {isHovered && (
        <div className="absolute top-2 px-2 rounded-lg text-xl bg-gray-500 text-white font-bold m-2 ">
          {movie.Year}
        </div>
      )}

      {isDisplayTitle && (
        <div className="duration-500 absolute bottom-0 pl-4 py-4  bg-gray-800 w-full ">
          <div className="uppercase text-stone-400 sm:text-lg">{movie.Type}</div>
          <p className="font-bold break-words text-yellow-400 text-base min-[575px]:text-sm min-[786px]:text-lg hover:text-blue-400 hover:cursor-pointer"
          onClick={() => handleSelectedMovie(movie.Title)}>
            {movie.Title}
          </p>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
