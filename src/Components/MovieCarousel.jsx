import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZmNjMTljZWVhNjM5NGQxMTE5Nzc4MTEyMzZkNTg0MCIsInN1YiI6IjY1MDViMzllMTA5ZGVjMDEwY2MxNGVkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iC_Y_PLWA6966G4etEDtlDOSQfUWlIfH6eKe1J6V2hk",
  },
};

const THEMOVIEDB_API_POPUPLAR =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

const MovieCarousel = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetch(THEMOVIEDB_API_POPUPLAR, options)
      .then((response) => response.json())
      .then((response) => {
        setPopularMovies(response?.results);
        console.log(response?.results);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log("popuplar: ");
  console.log(popularMovies[0]);

  return (
    <Carousel showArrows={true}>
      {/* {popularMovies?.map((movie) => {
        <div>
          <img
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          ></img>
          <p>{movie.original_title}</p>
        </div>;
      })} */}
    </Carousel>
  );
};

export default MovieCarousel;
