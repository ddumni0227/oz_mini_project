import "./App.scss";
import MovieHome from "./pages/MovieHome";
import movieList from "./assets/data/movieListData.json";
import MovieDetail from "./pages/MovieDetail";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout";
// import MovieDetailList from "./assets/data/movieDetailData.json";

function App() {
  const movies = movieList.results;

  //오브젝트에서 키를 지정하고 value를 받아와서 값을 넣어준다.?
  //무비카드의 내용들을 반복시킨다.
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MovieHome movies={movies} />} />
          <Route path="/details" element={<MovieDetail />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
