import React from "react";

const MoviePlot = ({ movieStat }) => {
  return (
    <div>
      <div className=" p-3 mt-3 bg-gray-800 rounded-lg">
        <div className="text-amber-400 font-medium ">PLOT</div>
        <div className="text-gray-400 max-w-2xl">{movieStat.Plot}</div>
      </div>
    </div>
  );
};

export default MoviePlot;
