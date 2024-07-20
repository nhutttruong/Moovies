import React, { useContext, useEffect, useState } from "react";
import { MovieDetail } from "./MovieDetail";
import { AppContext } from "../../App";
import MoviePlot from "./MoviePlot";
import MoviePoster from "./MoviePoster";
import MovieSuggestion from "./MovieSuggestion";
import { useLocation, useParams } from "react-router-dom";
import MovieStatsSkeleton from "../Skeletons/MovieStatsSkeleton";

export const MovieStats = () => {
  const location = useLocation();
  const [isMovieStatsReady, setIsMovieStatsReady] = useState(false);
  const [movieStat, setMovieStat] = useState([]);
  const { API_URL } = useContext(AppContext);

  const { id } = useParams();

  // Call fetchMovieDetails once the location is changed
  useEffect(() => {
    fetchMovieDetails();
  }, [location]);

  async function fetchMovieDetails() {
    try {
      const response = await fetch(`${API_URL}&t=${id}`);
      const data = await response.json();

      //handle api response error
      if (data.Response === "False") {
        console.error("API error:", data.Error);
        return;
      }

      // Update the movieStat of the movie being selected
      setMovieStat(data);
      setIsMovieStatsReady(true);
    } catch (error) {
      console.error("API call failed: ", error);
    }
  }

  return (
    <div className="flex flex-col md:flex-row justify-center h-screen">
      <div className="flex flex-col justify-start m-10 mt-0 ">
        {!isMovieStatsReady && <MovieStatsSkeleton />}

        {isMovieStatsReady && (
          <div className="flex flex-col sm:flex-row items-left">
            <MoviePoster movieStat={movieStat} />

            <MovieDetail movieStat={movieStat} />
          </div>
        )}
        {isMovieStatsReady && <MoviePlot movieStat={movieStat} />}
      </div>

      <MovieSuggestion movieStat={movieStat} />
    </div>
  );
};
