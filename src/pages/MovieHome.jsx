import "../App.scss";
import MovieCard from "../components/MovieCard";
import { useNavigate } from "react-router";
// import MovieDetailList from "./assets/data/movieDetailData.json";

const MovieHome = ({ movies }) => {
  const nav = useNavigate();

  const handleCardClick = (movieId) => {
    nav(`/details/${movieId}`); // 클릭 시 /details로 이동
  };

  //오브젝트에서 키를 지정하고 value를 받아와서 값을 넣어준다.?
  //무비카드의 내용들을 반복시킨다.
  return (
    <div className="card">
      {movies.map((movie) => (
        <div key={movie.id} onClick={() => handleCardClick(movie.id)}>
          <MovieCard
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieHome;
