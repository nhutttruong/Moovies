import React, { useContext } from "react";

import { AppContext } from "../App";

const Header = () => {
  const { showMovieFilter, setShowMovieFilter } = useContext(AppContext);
  return (
    <div className="flex gap-4  text-gray-400 font-medium pl-5  h-10 mt-2">
      <div className="relative inline-block text-left group">
        <a href="#" className="hover:bg-gray-600 rounded-lg text-lg">
          Genres▾
        </a>

        <div className="hidden absolute left-0 py-2 w-64 bg-gray-800 z-10 group-hover:flex group-hover:rounded-sm">
          <div>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Action
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Adventure
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Anime
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Comedy
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Crime
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Documentary
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Drama
            </a>
          </div>
          <div>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Family
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Fantasy
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              History
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Horror
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Music
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Mystery
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Romance
            </a>
          </div>
        </div>
      </div>
      <div className="relative inline-block text-left group">
        <a href="#" className="hover:bg-gray-600 rounded-lg text-lg">
          Countries▾
        </a>

        <div className="hidden absolute left-0 py-2 w-64 bg-gray-800 z-10 group-hover:flex group-hover:rounded-sm">
          <div>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              USA
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Canada
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Spain
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Hungary
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              South Korea
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Japan
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              China
            </a>
          </div>
          <div>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Hongkong
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Vietnam
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Italy
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              France
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Germany
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              India
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Brazil
            </a>
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
        Movie Filter
      </div>
    </div>
  );
};

export default Header;
