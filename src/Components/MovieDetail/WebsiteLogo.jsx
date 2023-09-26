import React, { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
const WebsiteLogo = () => {
  const { barRef, showSideInfo, setShowSideInfo } = useContext(AppContext);
  return (
    <div className="flex items-center ">
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
        <Link to="/moovies">
          <p className="bg-gradient-to-r from-orange-400 inline-block text-transparent bg-clip-text">
            MovieLand
          </p>
        </Link>
      </div>
    </div>
  );
};

export default WebsiteLogo;
