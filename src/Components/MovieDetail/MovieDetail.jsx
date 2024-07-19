import React from "react";

export const MovieDetail = ({ movieStat }) => {
  if (!movieStat || movieStat.length === 0) {
    return null;
  }
  return (
    <div className="bg-gray-800 basis-3/4 max-w-xl mt-3 sm:mt-0 rounded-lg p-3 text-gray-400  ">
      <div className="uppercase text-xl text-amber-400 font-bold pb-2">
        {movieStat.Title}
      </div>

      <div className="pb-1">{`Year: ${movieStat.Year}`}</div>
      <div className="flex pb-1">
        <div>Ratings:</div>
        <div className="ml-1 text-red-400 font-bold">
          {movieStat.Ratings[0].Value}
        </div>
      </div>

      {movieStat.Director !== "N/A" && (
        <div>{`Duration: ${movieStat.Runtime}`}</div>
      )}
      <div className="flex flex-wrap pb-1">
        <div>Genre: </div>
        {movieStat.Genre.split(", ").map((item, index) => {
          if (index === movieStat.Genre.split(", ").length - 1) {
            return (
              <div className="ml-1 text-blue-300" key={index}>
                {item}
              </div>
            );
          }
          return (
            <div className="ml-1 text-blue-300" key={index}>{`${item}, `}</div>
          );
        })}
      </div>

      {movieStat.Director !== "N/A" && (
        <div className="flex flex-wrap pb-1">
          <div>Director:</div>
          {movieStat.Director.split(", ").map((item, index) => {
            if (index === movieStat.Director.split(", ").length - 1) {
              return (
                <div className="ml-1 italic" key={index}>
                  {item}
                </div>
              );
            }
            return <div className="ml-1 italic" key={index}>{`${item}, `}</div>;
          })}
        </div>
      )}

      {movieStat.Actors !== "N/A" && (
        <div className="pb-1">{`Actors: ${movieStat.Actors}`}</div>
      )}

      {movieStat.Language !== "None" && (
        <div className="flex flex-wrap pb-1.5 items-center">
          <div>Language:</div>
          {movieStat.Language.split(", ").map((item, index) => (
            <div
              key={index}
              className="bg-green-700 text-gray-100 p-1 my-0.5 rounded-md ml-1.5"
            >
              {item}
            </div>
          ))}
        </div>
      )}

      {movieStat.Awards !== "N/A" && (
        <div className="pb-1">Awards: {movieStat.Awards}</div>
      )}

      {movieStat.BoxOffice !== "N/A" && movieStat.BoxOffice && (
        <div className="">BoxOffice: {movieStat.BoxOffice}</div>
      )}
    </div>
  );
};
