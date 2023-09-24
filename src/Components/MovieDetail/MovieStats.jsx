import React, { useContext, useEffect, useState } from "react";
import { MovieDetail } from "./MovieDetail";
import { AppContext } from "../../App";
import MoviePlot from "./MoviePlot";
import MoviePoster from "./MoviePoster";
import MovieSuggestion from "./MovieSuggestion";
import { useLocation, useParams } from "react-router-dom";

export const MovieStats = () => {
  const location = useLocation();
  const [movieStat, setMovieStat] = useState([]);
  const { API_URL } = useContext(AppContext);

  const { id } = useParams();

  async function fetchMovieDetails() {
    try {
      const response = await fetch(`${API_URL}&t=${id}`);
      const data = await response.json();

      // Update the movieStat of the movie being selected
      setMovieStat(data);
      console.log("retrieving data");
    } catch (error) {
      console.error("API call failed: ", error);
    }
  }

  // Call fetchMovieDetails once the location is changed
  useEffect(() => {
    fetchMovieDetails();
  }, [location]);

  return (
    <div className="flex flex-col md:flex-row justify-center">
      <div className="flex flex-col justify-center m-10 mt-0 ">
        <div className="flex flex-col sm:flex-row items-left">
          <MoviePoster movieStat={movieStat} />

          <MovieDetail movieStat={movieStat} />
        </div>

        <MoviePlot movieStat={movieStat} />
      </div>

      <MovieSuggestion movieStat={movieStat} />
    </div>
  );
};
