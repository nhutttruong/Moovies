import React, { useState } from "react";

const MoviePoster = ({ movieStat }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center">
      <div
        className={
          "w-64 mr-2 rounded-lg overflow-hidden bg-slate-100" +
          (isHovered ? "bg-slate-300 opacity-70 cursor-pointer" : "")
        }
      >
        <img
          src={movieStat.Poster}
          alt={`Poster for ${movieStat.Title}`}
          className="object-cover"
          loading="lazy"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></img>
      </div>
    </div>
  );
};

export default MoviePoster;
