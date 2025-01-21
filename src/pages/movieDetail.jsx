import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

const MovieDetail = () => {
  const baseUrl = "https://image.tmdb.org/t/p/original";
  const { id } = useParams(); // URL에서 영화 ID 가져오기
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const apiKey = import.meta.env.VITE_TMDB_ACCESS_TOKEN; // 환경변수로 API 키 불러오기
    console.log(apiKey);
    const url = `https://api.themoviedb.org/3/movie/${id}?language=ko-KR`;

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
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovie(); // 컴포넌트가 마운트될 때 영화 목록을 가져옴
  }, []);

  console.log(movie);
  return (
    <div className="detail">
      <img src={`${baseUrl}${movie?.poster_path}`} />
      <div className="head">
        <div>
          <h2>{movie?.title}</h2>
          <p>⭐️ {movie?.vote_average}</p>
        </div>
        <div className="genre">
          {movie?.genres.map((genre) => (
            <span key={genre.id}>{genre.name},</span>
            //map으로 렌더링된 span에 키가 없어서 디테일 화면을 클릭하자 에러가 발생했었음
            //span에 키값을 주니까 해결되었음
          ))}
        </div>
        <span className="overview">{movie?.overview}</span>
      </div>
    </div>
  );
};
export default MovieDetail;
