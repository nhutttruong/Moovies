import React, { useContext } from "react";
import SearchIcon from "../search.svg";
import { ThemeContext } from "../App.js";

const Search = () => {
  const {
    setTempTerm,
    handleKeyPress,
    setSearchTerm,
    searchMovies,
    setSelectedMovie,
    tempTerm,
  } = useContext(ThemeContext);
  return (
    <div className="m-5 mb-0 flex justify-center items-center ">
      <input
        className=" rounded-full text-xl w-80 mr-2 p-2 text-gray-400 bg-gray-800 shadow-xl"
        placeholder="Search for a movie"
        value={tempTerm}
        onChange={(e) => setTempTerm(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
      />
      <img
        className="w-8 cursor-pointer"
        src={SearchIcon}
        alt="search icon"
        onClick={() => {
          setSearchTerm(tempTerm);
          searchMovies(tempTerm);
          setSelectedMovie("");
        }}
      />
    </div>
  );
};

export default Search;
