import React, { useEffect, useRef, useState, createContext } from "react";

import BelowHeader from "./Components/BelowHeader";
import Search from "./Components/Search";
import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import { useNavigate } from "react-router-dom";
import MovieFilter from "./Components/MovieFilter";
import Routerr from "./Components/Router";

//a4e628c7

const API_URL = "https://www.omdbapi.com?apikey=a4e628c7";

export const AppContext = createContext();

const Vi = {
  Movie: "Phim lẻ",
  Series: "Phim bộ",
  PlaceHolder: "Nhập một từ khóa",
  Genre: "Thể loại",
  Country: "Quốc gia",
  MovieFilter: "Bộ lọc",
  CompleteState: "Hoàn thành",
  InCompleteState: "Chưa hoàn thành",
  PrivacyPolicy: "Chính sách bảo mật",
  ContentPolicy: "Chính sách nội dung",
  SuggestForYou: "ĐỀ XUẤT CHO BẠN",
  Year: "Năm",
  Ratings: "Đánh giá",
  Duartion: "Thời lượng",
  Actors: "Diễn viên",
  Language: "Ngôn ngữ",
  Awards: "Danh hiệu",
  Plot: "Cốt truyện",
};

const En = {
  Movie: "Movie",
  Series: "Series",
  PlaceHolder: "Type in a keyword",
  Genre: "Genres",
  Country: "Countries",
  MovieFilter: "Movie filter",
  CompleteState: "Complete",
  InCompleteState: "Incomplete",
  PrivacyPolicy: "Privacy policy",
  ContentPolicy: "Content policy",
  SuggestForYou: "SUGGEST FOR YOU",
  Year: "Year",
  Ratings: "Ratings",
  Duartion: "Duartion",
  Actors: "Actors",
  Language: "Language",
  Awards: "Awards",
  Plot: "Plot",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempTerm, setTempTerm] = useState("");
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [showSideInfo, setShowSideInfo] = useState(false);
  const [showMovieFilter, setShowMovieFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const divRef = useRef(null);
  const barRef = useRef(null);

  const searchMovies = async (title) => {
    setIsLoading(true);
    await fetch(`${API_URL}&s=${title}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.Response === "False") {
          setMovies([]);
        } else {
          console.log(data.Search);
          setMovies(data.Search);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Fetch error: ", error);
      });
  };

  const defaultMoviesDisplay = async (titles) => {
    setMovies([]);
    const fetchedMovies = [];

    for (const title of titles) {
      const response = await fetch(`${API_URL}&s=${title}`);
      if (response.ok) {
        const data = await response.json();
        fetchedMovies.push(...data.Search);
      }
    }

    setMovies(fetchedMovies);
    setIsLoading(false);
    localStorage.setItem(
      "default_homepage_movies",
      JSON.stringify(fetchedMovies)
    );
  };

  useEffect(() => {
    defaultMoviesDisplay(["home", "avenger"]);
  }, []);

  //show to-the-top button when scrolling down
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
      navigate("/Moovies");
    }
  }

  const handleHomeClick = () => {
    const defaultMovies = localStorage.getItem("default_homepage_movies");
    if (defaultMovies) {
      setMovies(JSON.parse(defaultMovies));
      setIsLoading(false);
    }
    setTempTerm("");
    setSearchTerm("");
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
        isLoading,
      }}
    >
      <div className=" bg-gray-900 ">
        <Header />

        <Sidebar />

        <Search />

        <BelowHeader />

        {showMovieFilter && <MovieFilter />}

        {/* <MovieCarousel /> */}

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
