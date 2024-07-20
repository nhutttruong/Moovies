import React, { useContext } from "react";

import { AppContext } from "../App";

const genres1 = [
  "Action",
  "Adventure",
  "Anime",
  "Comedy",
  "Crime",
  "Drama",
  "Documentary",
];

const genres2 = [
  "Romance",
  "Mystery",
  "Music",
  "Horror",
  "History",
  "Fantasy",
  "Family",
];

const countries1 = [
  "USA",
  "Canada",
  "Spain",
  "Hungary",
  "South Korea",
  "Japan",
  "China",
];

const countries2 = [
  "Brazil",
  "India",
  "Germany",
  "France",
  "Italy",
  "Vietnam",
  "Hongkong",
];

const Header = () => {
  const { showMovieFilter, setShowMovieFilter, langDict } =
    useContext(AppContext);
  return (
    <div className="flex gap-4  text-gray-400 font-medium pl-5  h-10 mt-2">
      <div className="relative inline-block text-left group">
        <a href="#" className="hover:bg-gray-600 rounded-lg text-lg">
          {langDict.Genre}▾
        </a>

        <div className="hidden absolute left-0 py-2 w-64 bg-gray-800 z-10 group-hover:flex group-hover:rounded-sm">
          <div>
            {genres1.map((genre, i) => (
              <a href="#" key={i} className="block px-4 py-2 hover:bg-gray-100">
                {genre}
              </a>
            ))}
          </div>
          <div>
            {genres2.map((genre, i) => (
              <a href="#" key={i} className="block px-4 py-2 hover:bg-gray-100">
                {genre}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="relative inline-block text-left group">
        <a href="#" className="hover:bg-gray-600 rounded-lg text-lg">
          {langDict.Country}▾
        </a>

        <div className="hidden absolute left-0 py-2 w-64 bg-gray-800 z-10 group-hover:flex group-hover:rounded-sm">
          <div>
            {countries1.map((country, i) => (
              <a href="#" key={i} className="block px-4 py-2 hover:bg-gray-100">
                {country}
              </a>
            ))}
          </div>
          <div>
            {countries2.map((country, i) => (
              <a href="#" key={i} className="block px-4 py-2 hover:bg-gray-100">
                {country}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div
        className=" hover:cursor-pointer text-lg"
        onClick={() => {
          !showMovieFilter
            ? setShowMovieFilter(true)
            : setShowMovieFilter(false);
        }}
      >
        {langDict.MovieFilter}
      </div>
    </div>
  );
};

export default Header;
