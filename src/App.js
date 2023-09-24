import React, { useEffect, useRef, useState, createContext } from "react";

import Header from "./Components/Header";
import Search from "./Components/Search";
import Sidebar from "./Components/Sidebar";
import MovieFilter from "./Components/MovieFilter";
import Routerr from "./Components/Routerr";
import { Link } from "react-router-dom";

//a4e628c7

const API_URL = "https://www.omdbapi.com?apikey=a4e628c7";

export const AppContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempTerm, setTempTerm] = useState("");
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [showSideInfo, setShowSideInfo] = useState(false);
  const [showMovieFilter, setShowMovieFilter] = useState(false);
  const divRef = useRef(null);
  const barRef = useRef(null);

  const searchMovies = async (title) => {
    fetch(`${API_URL}&s=${title}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.Search);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  };

  const defaultMoviesDisplay = async (title1, title2) => {
    setMovies([]);
    fetch(`${API_URL}&s=${title1}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
      });
    fetch(`${API_URL}&s=${title2}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMovies((prevMovies) => [...prevMovies, ...data.Search]);
      });
  };

  useEffect(() => {
    defaultMoviesDisplay("batman", "dragon");
  }, []);

  //show the button when scrolling down
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowScrollToTopBtn(true);
      } else {
        setShowScrollToTopBtn(false);
      }
    });
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //handle clicking outside the sidebar when it's showing
  const handleClickOutside = (e) => {
    if (
      divRef.current &&
      !divRef.current.contains(e.target) &&
      !barRef.current.contains(e.target)
    ) {
      setShowSideInfo(false);
    }
  };

  //Handle hitting enter after typing in a movie name
  function handleKeyPress(e) {
    if (e.key === "Enter" || e.keyCode === 13) {
      let buttonElement = document.querySelector("img");
      buttonElement.click();
    }
  }

  const handleHomeClick = () => {
    defaultMoviesDisplay("batman", "dragon");
    setMovies([]);
  };

  return (
    <AppContext.Provider
      value={{
        movies,
        setMovies,
        searchTerm,
        setSearchTerm,
        tempTerm,
        setTempTerm,
        showScrollToTopBtn,
        setShowScrollToTopBtn,
        showSideInfo,
        setShowSideInfo,
        searchMovies,
        handleClickOutside,
        handleKeyPress,
        handleHomeClick,
        showMovieFilter,
        setShowMovieFilter,
        divRef,
        API_URL,
      }}
    >
      <div className=" bg-gray-900">
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
            <Link to="/">
              <p className="bg-gradient-to-r from-orange-400 inline-block text-transparent bg-clip-text">
                MovieLand
              </p>
            </Link>
          </div>
        </div>

        <Sidebar />

        <Search />

        <Header />

        {showMovieFilter && <MovieFilter />}

        <Routerr />

        {showScrollToTopBtn && (
          <button
            id="back-to-top-btn"
            className="fixed bottom-4 right-4 bg-blue-500 rounded-full z-10 hover:bg-blue-600 text-white transition duration-300 ease-in-out "
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2px"
                d="M5 10l7-7m0 0l7 7m-7-7v18"
              />
            </svg>
          </button>
        )}
      </div>
    </AppContext.Provider>
  );
}
export default App;
