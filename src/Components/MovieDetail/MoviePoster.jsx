import React, { useState } from "react";
import playImg from "../../Assets/Images/play.svg";

const MoviePoster = ({ movieStat }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center relative">
      <div
        className={
          "w-64 mr-2 rounded-lg overflow-hidden bg-slate-50" +
          (isHovered ? "bg-slate-300 opacity-70 cursor-pointer" : "")
        }
      >
        {isHovered && (
          <img
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12"
            src={playImg}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() =>
              window.alert(
                "This feature is not integrated yet, sorry for the inconvenence"
              )
            }
          ></img>
        )}
        <img
          src={movieStat.Poster}
          alt={`Poster for ${movieStat.Title}`}
          className="object-cover"
          loading="lazy"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() =>
            window.alert(
              "This feature is not integrated yet, sorry for the inconvenence"
            )
          }
        ></img>
      </div>
    </div>
  );
};

export default MoviePoster;
