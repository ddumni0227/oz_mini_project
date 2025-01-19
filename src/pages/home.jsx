import "./App.scss";
import MovieCard from "./components/movieCard";
import movieList from "./assets/data/movieListData.json";
import MovieDetail from "./pages/movieDetail";
// import MovieDetailList from "./assets/data/movieDetailData.json";

function App() {
  const movies = movieList.results;
  //오브젝트에서 키를 지정하고 value를 받아와서 값을 넣어준다.?
  //무비카드의 내용들을 반복시킨다.
  return (
    <>
      <div className="card">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </div>

      <MovieDetail />
    </>
  );
}

export default App;
