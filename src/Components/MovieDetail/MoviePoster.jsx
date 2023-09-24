import React, { useContext } from "react";

const MoviePoster = ({ movieStat }) => {
  return (
    <div className="max-h-[435px] flex justifby-center">
      <div className="bg-gray-700 w-64 mr-2 rounded-lg overflow-hidden">
        <img
          src={movieStat.Poster}
          alt={`Poster for ${movieStat.Title}`}
          className="object-cover"
          loading="lazy"
        ></img>
        <div className="flex justify-center">
          <button className="bg-green-500 my-2 py-2 font-bold text-gray-100  hover:bg-green-400 rounded-lg w-28 items-center justify-center">
            Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
