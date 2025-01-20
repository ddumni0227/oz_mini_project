import "./App.scss";
import MovieHome from "./pages/MovieHome";
// import movieList from "./assets/data/movieListData.json";
import MovieDetail from "./pages/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const apiKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN; // 환경변수로 API 키 불러오기
    // console.log(apiKey);
    const url =
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiKey}`, // Bearer 인증 헤더에 API 키 추가
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      const filteredMovies = data.results.filter((movie) => !movie.adult); // adult: false인 영화만 필터링
      setMovies(filteredMovies); // 상태에 필터링된 영화 목록 저장
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(); // 컴포넌트가 마운트될 때 영화 목록을 가져옴
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MovieHome movies={movies} />} />
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
