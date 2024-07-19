import React, { useContext } from "react";
import { AppContext } from "../App.js";
import { Link } from "react-router-dom";

const Header = () => {
  const { barRef, showSideInfo, setShowSideInfo, handleHomeClick } =
    useContext(AppContext);
  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
          className="mx-5 fill-white mt-1 text-2xl hover:cursor-pointer hover:fill-yellow-400"
          ref={barRef}
          onClick={() => {
            showSideInfo ? setShowSideInfo(false) : setShowSideInfo(true);
          }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
        <div className="hover:cursor-pointer text-left text-4xl font-bold">
          <Link to="/Moovies" onClick={handleHomeClick}>
            <p className="bg-gradient-to-r from-orange-400 inline-block text-transparent bg-clip-text">
              MovieLand
            </p>
          </Link>
        </div>
      </div>
      <div className=""></div>

      <div className="flex items-center w-28 h-10 border border-yellow-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="1.5em"
        >
          <path
            fill="#d2d5da"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>
        <div className="bg-slate-200 rounded-md px-1">En</div>
      </div>
    </div>
  );
};

export default Header;
