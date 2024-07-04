import React from "react";

const countries = [
  "Country",
  "United States of America",
  "United Kingdom",
  "Vietnam",
  "France",
  "Italy",
  "South Korea",
  "China",
  "Germany",
  "Thailand",
  "Russia",
];

const genres = [
  "Genres",
  "Action",
  "Adventure",
  "Adventure",
  "Comedy",
  "Crime",
  "Horror",
  "Music",
  "Mystery",
  "Romance",
  "Science Fiction",
  "Documentary",
  "Drama",
  "Family",
];

const yearRange = [
  "Year Range",
  "2020-now",
  "2010-2019",
  "2000-2009",
  "1990-1999",
  "1980-1989",
  "1970-1979",
];

const languages = [
  "Language",
  "English",
  "French",
  "Vietnamese",
  "Japanese",
  "Spanish",
  "Italian",
  "Mandarin",
  "Spanish",
  "Korean",
  "Thai",
  "Portugese",
];

const sortOptions = [
  "Sort By",
  "Released Year latest to oldest",
  "Released Year oldest to latest",
  "Rating high to low",
  "Rating low to high",
];

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
