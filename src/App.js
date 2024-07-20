import React, { useEffect, useState, createContext } from "react";

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

const VietLang = {
  Movie: "Phim lẻ",
  Series: "Phim bộ",
  Placeholder: "Nhập một từ khóa",
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
  Duration: "Thời lượng",
  Actors: "Diễn viên",
  Director: "Đạo diễn",
  Language: "Ngôn ngữ",
  Awards: "Danh hiệu",
  Plot: "Cốt truyện",
  PrivacyPolicy_c:
    "Tất cả video và hình ảnh được sưu tầm từ Internet và bản quyền thuộc về người sáng tạo ban đầu.",
  ContentPolicy_c:
    "Trang web này chỉ cung cấp dịch vụ trang web, không cung cấp dịch vụ lưu trữ tài nguyên và không tham gia ghi âm hoặc tải lên.",
  HelpInfo:
    "Trang web này được xây dựng chỉ để tìm kiếm phim và xem thông tin phim. Tính năng phát trực tuyến chưa được tích hợp trên trang này do thiếu ngân sách.",
};

const EngLang = {
  Movie: "Movie",
  Series: "Series",
  Placeholder: "Type in a keyword",
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
  Duration: "Duration",
  Actors: "Actors",
  Director: "Director",
  Language: "Language",
  Awards: "Awards",
  Plot: "Plot",
  PrivacyPolicy_c:
    "All videos and pictures are collected from the Internet, and the copyright belongs to the original creator.",
  ContentPolicy_c:
    "This website only provides web page services, does not provide resource storage, and does not participate in recording or uploading.",
  HelpInfo:
    "This site is built solely for searching movies and viewing their statistics. Streaming feature is not yet integrated on this site due to a lack of budget.",
};

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempTerm, setTempTerm] = useState("");
  const [showScrollToTopBtn, setShowScrollToTopBtn] = useState(false);
  const [showSideInfo, setShowSideInfo] = useState(false);
  const [showMovieFilter, setShowMovieFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEn, setIsEn] = useState(true);
  const [langDict, setLangDict] = useState(EngLang);
  const navigate = useNavigate();

  //set lang whenever there's a change
  useEffect(() => {
    if (isEn) {
      setLangDict(EngLang);
    } else {
      setLangDict(VietLang);
    }
  }, [isEn]);

  //set default movies
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

  //Handle hitting enter after typing in a movie name
  function handleKeyPress(e) {
    if (tempTerm === "") {
      return;
    }
    if (e.key === "Enter" || e.keyCode === 13) {
      let buttonElement = document.querySelector("img");
      buttonElement.click();
      navigate(
        `/Moovies/search/keyword/${encodeURIComponent(
          tempTerm.toLowerCase()
        ).replace(/%20/g, "+")}`
      );
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
        handleKeyPress,
        handleHomeClick,
        showMovieFilter,
        setShowMovieFilter,
        API_URL,
        isLoading,
        isEn,
        setIsEn,
        langDict,
      }}
    >
      <div className=" bg-gray-900">
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
