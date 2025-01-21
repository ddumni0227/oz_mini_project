import "./App.scss";
import MovieHome from "./pages/MovieHome";
import MovieDetail from "./pages/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import useDebounce from "./components/useDebounce";

function App() {
  const [movies, setMovies] = useState([]);
  //검색기능
  const [searchQuery, setSearchQuery] = useState("");

  const debouncedSearchQuery = useDebounce(searchQuery, 1000); //5초 디바운스

  const fetchMovies = async (query = "") => {
    const apiKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN; // 환경변수로 API 키 불러오기
    const url = query
      ? `https://api.themoviedb.org/3/search/movie?query=${query}&language=ko-KR&page=1` //검색(쿼리)값에 입력이되면 적용될 api
      : "https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1"; //기본 인기영화 api

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`, // Bearer 인증 헤더에 API 키 추가
      },
    };

    try {
      const response = await fetch(url, options); //api 호출
      const data = await response.json(); //json 변환
      const filteredMovies = data.results.filter((movie) => !movie.adult); // adult: false인 영화만 필터링
      setMovies(filteredMovies); // 상태에 필터링된 영화 목록 저장
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      fetchMovies(searchQuery); // Debounced 검색어가 변경=> API 호출
    } else {
      fetchMovies(); //검색어 비어있으면 인기영화목록 호출
    }
  }, [debouncedSearchQuery]); //디바운스된 검색어가 변경될때 실핼

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout onSearch={setSearchQuery} />}>
          <Route index element={<MovieHome movies={movies} />} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
