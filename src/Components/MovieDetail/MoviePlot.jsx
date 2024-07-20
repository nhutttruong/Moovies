import React, { useContext } from "react";
import { AppContext } from "../../App";

const MoviePlot = ({ movieStat }) => {
  const { langDict } = useContext(AppContext);

  return (
    <div className=" p-3 mt-3 bg-gray-800 rounded-lg">
      <div className="text-amber-400 font-medium ">{langDict.Plot}</div>
      <div className="text-gray-400 max-w-2xl">
        {movieStat.Plot !== "N/A"
          ? movieStat.Plot
          : "This movie's plot is not updated"}
      </div>
    </div>
  );
};

export default MoviePlot;
