import React from "react";
import {
  countries,
  genres,
  languages,
  yearRange,
  sortOptions,
} from "../utils/constants";

const firstThreeOptions = [countries, genres, yearRange];

const nextTwoOptions = [languages, sortOptions];

const MovieFilter = () => {
  return (
    <div className="">
      <div className="flex sm:justify-center ">
        <div
          className="text-gray-100 text-2xl ml-5 mt-3 mb-3 
      sm:basis-[90%] sm:ml-0"
        >
          # Movie Filter
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row ">
        <div className="basis-[90%] flex flex-col sm:flex-wrap sm:flex-row ">
          {firstThreeOptions.map((filter) => (
            <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%] mx-2">
              <select className="rounded-lg mb-2 w-full py-1.5 text-lg bg-gray-700 text-gray-300">
                {filter.map((option) => (
                  <option value="">{option}</option>
                ))}
              </select>
            </div>
          ))}

          {nextTwoOptions.map((filter) => (
            <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%] mx-2">
              <select className="rounded-lg mb-2 w-full py-1.5 text-lg md:basis-1/6 bg-gray-700 text-gray-300">
                {filter.map((option) => (
                  <option value="">{option}</option>
                ))}
              </select>
            </div>
          ))}

          <button className="bg-gray-400 hover:bg-gray-300 mb-2 mx-2 rounded-lg py-1 text-lg sm:basis-[30%] sm:ml-0 lg:basis-[15%]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
