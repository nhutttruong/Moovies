import React from "react";

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
          <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%] mx-2 ">
            <select className="rounded-lg  mb-2 py-1.5 text-lg w-full bg-gray-700 text-gray-300">
              <option value="">Country</option>
              <option value="">United States of America</option>
              <option value="">United Kingdom</option>
              <option value="">Vietnam</option>
              <option value="">France</option>
              <option value="">Italy</option>
              <option value="">South Korea</option>
              <option value="">China</option>
              <option value="">France</option>
              <option value="">Germany</option>
              <option value="">Thailand</option>
              <option value="">Russia</option>
            </select>
          </div>
          <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%]  mx-2">
            <select className="rounded-lg mb-2 w-full py-1.5 text-lg bg-gray-700 text-gray-300">
              <option value="">Genres</option>
              <option value="">Action</option>
              <option value="">Adventure</option>
              <option value="">Animation</option>
              <option value="">Comedy</option>
              <option value="">Crime</option>
              <option value="">Horror</option>
              <option value="">Music</option>
              <option value="">Crime</option>
              <option value="">Mystery</option>
              <option value="">Romance</option>
              <option value="">Science Fiction</option>
              <option value="">Documentary</option>
              <option value="">Drama</option>
              <option value="">Family</option>
            </select>
          </div>
          <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%]  mx-2">
            <select className="rounded-lg  mb-2 w-full py-1.5 text-lg  bg-gray-700 text-gray-300">
              <option value="">Year Range</option>
              <option value="">2020-now</option>
              <option value="">2010-2019</option>
              <option value="">2000-2009</option>
              <option value="">1990-1999</option>
              <option value="">1980-1989</option>
              <option value="">1970-1979</option>
            </select>
          </div>
          <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%]  mx-2">
            <select className="rounded-lg  mb-2 w-full   py-1.5 text-lg md:basis-1/6 bg-gray-700 text-gray-300">
              <option value="">Language</option>
              <option value="">English</option>
              <option value="">French</option>
              <option value="">Vietnamese</option>
              <option value="">Japanese</option>
              <option value="">Spanish</option>
              <option value="">Italian</option>
              <option value="">China</option>
              <option value="">Spanish</option>
              <option value="">Korean</option>
              <option value="">Mandarin</option>
            </select>
          </div>
          <div className="basis-full sm:basis-[30%] sm:ml-0 lg:basis-[15%]  mx-2">
            <select className="rounded-lg mb-2 w-full py-1.5 text-lg md:basis-1/6 bg-gray-700 text-gray-300">
              <option value="">Sort By</option>
              <option value="">Released Year latest to oldest</option>
              <option value="">Released Year oldest to latest</option>
              <option value="">Rating high to low</option>
              <option value="">Rating high to low</option>
            </select>
          </div>
          <button className="bg-gray-400 hover:bg-gray-300  mb-2 mx-2 rounded-lg  py-1 text-lg sm:basis-[30%] sm:ml-0 lg:basis-[15%]">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieFilter;
