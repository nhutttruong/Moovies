import React, { useContext, useState } from "react";
import { AppContext } from "../App.js";
import { Link } from "react-router-dom";

const Header = () => {
  const {
    showSideInfo,
    setShowSideInfo,
    handleHomeClick,
    isEn,
    setIsEn,
    langDict,
  } = useContext(AppContext);

  const [showHelp, setShowHelp] = useState(false);

  return (
    <div className="flex justify-between">
      <div className="flex items-center">
        {!showSideInfo ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 448 512"
            className="mx-5 fill-white mt-1 text-2xl hover:cursor-pointer"
            onClick={() => {
              setShowSideInfo(true);
            }}
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        ) : (
          <svg
            width="35px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            className="mx-3 fill-white mt-1 text-2xl hover:cursor-pointer"
            onClick={() => {
              setShowSideInfo(false);
            }}
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g id="Menu / Close_MD">
                {" "}
                <path
                  id="Vector"
                  d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18"
                  stroke="#fafafa"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>{" "}
              </g>{" "}
            </g>
          </svg>
        )}

        <div className="hover:cursor-pointer text-left text-4xl font-bold">
          <Link to="/Moovies" onClick={handleHomeClick}>
            <p className="bg-gradient-to-r from-orange-400 inline-block text-transparent bg-clip-text">
              MovieLand
            </p>
          </Link>
        </div>
      </div>
      <div className=""></div>

      <div className="flex items-center w-32 h-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          height="1.5em"
          onMouseEnter={() => setShowHelp(true)}
          onMouseLeave={() => setShowHelp(false)}
        >
          <path
            fill="#d2d5da"
            d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
          />
        </svg>

        <div
          className="w-[24px] bg-[#d2d5da] rounded-md px-1 mx-2 hover:cursor-pointer grid justify-items-center "
          title="Language"
          onClick={() => {
            isEn ? setIsEn(false) : setIsEn(true);
          }}
        >
          {isEn ? "en" : "vi"}
        </div>
      </div>

      {showHelp && (
        <div
          className="fixed right-0 translate-y-8 -translate-x-10 z-50 w-48 bg-gray-700 rounded-md text-white p-2"
          onMouseEnter={() => setShowHelp(true)}
          onMouseLeave={() => setShowHelp(false)}
        >
          {langDict.HelpInfo}
        </div>
      )}
    </div>
  );
};

export default Header;
