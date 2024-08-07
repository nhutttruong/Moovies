import React, { useContext, useState } from "react";
import SearchIconEnabled from "../Assets/Images/search2.svg";
import SearchIconDisabled from "../Assets/Images/search1.svg";
import { AppContext } from "../App.js";
import { Link } from "react-router-dom";

const Search = () => {
  const {
    setTempTerm,
    handleKeyPress,
    setSearchTerm,
    searchMovies,
    tempTerm,
    langDict,
  } = useContext(AppContext);

  const [isHoverSearchIcon, setIsHoverSearchIcon] = useState(false);
  return (
    <div className="m-5 mb-0 flex justify-center items-center relative">
      <input
        className=" rounded-full text-xl w-80 mr-2 p-2 text-gray-400 bg-gray-800 shadow-xl"
        placeholder={langDict.Placeholder}
        value={tempTerm}
        onChange={(e) => setTempTerm(e.target.value)}
        onKeyDown={(e) => handleKeyPress(e)}
        style={{ opacity: 0.5 }}
      />
      {!tempTerm ? (
        <img
          className="w-6"
          src={SearchIconDisabled}
          onMouseEnter={() => setIsHoverSearchIcon(true)}
          onMouseLeave={() => setIsHoverSearchIcon(false)}
          alt="search icon"
        />
      ) : (
        <Link
          to={`/Moovies/search/keyword/${encodeURIComponent(
            tempTerm.toLowerCase()
          ).replace(/%20/g, "+")}`}
        >
          <img
            className="w-6 cursor-pointer"
            src={SearchIconEnabled}
            alt="search icon"
            onClick={() => {
              setSearchTerm(tempTerm);
              searchMovies(tempTerm);
            }}
          />
        </Link>
      )}

      {isHoverSearchIcon && (
        <div className="absolute text-gray-500 text-sm font-semibold italic translate-x-[265px]">
          Enter something to search
        </div>
      )}
    </div>
  );
};

export default Search;
