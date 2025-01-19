import MovieDetailData from "../assets/data/movieDetailData.json";

const MovieDetail = () => {
  const baseUrl = "https://image.tmdb.org/t/p/w500";
  const overview = MovieDetailData.overview;
  const poster = MovieDetailData.poster_path;
  const title = MovieDetailData.title;
  const average = MovieDetailData.vote_average;
  const genres = MovieDetailData.genres
  return (
    <div className="detail">
      <img src={`${baseUrl}${poster}`} />
      <div className="head">
        <div>
          <h2>{title}</h2>
          <p>평점: {average}</p>
        </div>
        {genres.map((genre) => (
            <span className="genre">{genre.name},</span>
          ))}
        <span className="overview">{overview}</span>
      </div>
    </div>
  );
};
export default MovieDetail;
