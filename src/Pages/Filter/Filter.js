import React from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Filter.css";
import {GENRES} from '../../constants/genres';

const Filter = () => {
  const [content, setContent] = React.useState([]);
  const [contentType, setContentType] = React.useState("movie");
  const [releaseYear, setYearRelease] = React.useState('');
  const [rating, setRating] = React.useState();
  const [genre, setGenre] = React.useState("");

  const genreId = [];

  GENRES.filter((g) => {
    if (genre === g.name) genreId.push(g.id);
  });


  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/${contentType}?api_key=${process.env.REACT_APP_API_KEY}&vote_average.gte=${rating}&year=${releaseYear}&with_genres=${genreId[0]}&include_adult=false`
      );
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [contentType, releaseYear, rating, genreId[0]]);

  return (
    <>
      <div className="filterContent">
        <h3 style={{color:'dodgerblue'}}>Filter Content</h3>
        <select
          name="movie"
          id="movie"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="movie">Movies</option>
          <option value="tv">TV</option>
        </select>
        <select
          name="rating"
          id="vote"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <input
          type="text"
          placeholder="Enter release year"
          className="releaseYear"
          onChange={(e) => setYearRelease(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter genre"
          className="genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
      </div>
      <div className="trending">
        {content &&
          content.map((item) => (
            <MovieCard
              key={item.id}
              id={item.id}
              poster={item.poster_path}
              title={item.title || item.name}
              date={item.first_air_date || item.release_date}
              media_type={item.media_type}
              vote_average={item.vote_average}
            />
          ))}
      </div>
    </>
  );
};

export default Filter;
