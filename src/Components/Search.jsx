import React, { useContext } from "react";
import SearchIconEnabled from "../Assets/Images/search2.svg";
import SearchIconDisabled from "../Assets/Images/search1.svg";
import { AppContext } from "../App.js";

const Search = () => {
  const { setTempTerm, handleKeyPress, setSearchTerm, searchMovies, tempTerm } =
    useContext(AppContext);
  return (
    <div className="m-5 mb-0 flex justify-center items-center ">
      <input
        className=" rounded-full text-xl w-80 mr-2 p-2 text-gray-400 bg-gray-800 shadow-xl"
        placeholder="Type in a keyword"
        value={tempTerm}
        onChange={(e) => setTempTerm(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        style={{ opacity: 0.5 }}
      />
      {!tempTerm ? (
        <img className="w-6" src={SearchIconDisabled} alt="search icon" />
      ) : (
        <img
          className="w-6 cursor-pointer"
          src={SearchIconEnabled}
          alt="search icon"
          onClick={() => {
            setSearchTerm(tempTerm);
            searchMovies(tempTerm);
          }}
        />
      )}
    </div>
  );
};

export default Search;
