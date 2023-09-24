import React, { useContext } from "react";
import { AppContext } from "../App";

const Sidebar = () => {
  const { showSideInfo, divRef } = useContext(AppContext);
  return (
    <div ref={divRef} className="flex fixed z-30  ">
      <div
        className={`fixed w-72 z-20 h-full bg-gray-50  overflow-scroll border-orange-500 ${
          !showSideInfo ? "left-[-18rem]" : "left-0"
        } duration-500`}
      >
        <div className=" my-4 py-4">
          <div className="flex items-center ml-8 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              viewBox="0 0 512 512"
            >
              <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z" />
            </svg>
            <div className="ml-8 text-lg font-medium hover:text-blue-500 hover:cursor-pointer">
              Privacy policy
            </div>
          </div>

          <div className="flex items-center ml-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.25em"
              fill="currentColor"
              className="bi bi-body-text"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M0 .5A.5.5 0 0 1 .5 0h4a.5.5 0 0 1 0 1h-4A.5.5 0 0 1 0 .5Zm0 2A.5.5 0 0 1 .5 2h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm9 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-9 2A.5.5 0 0 1 .5 4h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm5 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5Zm-12 2A.5.5 0 0 1 .5 6h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5Zm8 0a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm-8 2A.5.5 0 0 1 .5 8h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5Zm7 0a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5Zm-7 2a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5Zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"
              />
            </svg>
            <div className="ml-8 text-lg font-medium hover:text-blue-500 hover:cursor-pointer">
              Content policy
            </div>
          </div>
        </div>
        <p className="p-5 font-['Open_Sans'] text-lg">
          All videos and pictures are collected from the Internet, and the
          copyright belongs to the original creator.
        </p>
        <p className="px-5 font-['Open_Sans'] text-lg border-b border-b-gray-300 mb-10">
          This website only provides web page services, does not provide
          resource storage, and does not participate in recording or uploading.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
