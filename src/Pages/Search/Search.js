import React from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Search.css";

const Search = () => {

  const [searchText, setSearchText] = React.useState("");
  const [content, setContent] = React.useState([]);
  const [contentType, setContentType] = React.useState("movie");

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${contentType}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${searchText}&include_adult=false`
      );
      setContent(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
  }, [searchText, contentType]);

  return (
    <>
      <div className="search">
        <input
          type="Enter Text"
          className="searchInput"
          placeholder="Search"
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="filterContent">
        <select
          name="movie"
          id="movie"
          value={contentType}
          onChange={(e) => setContentType(e.target.value)}
        >
          <option value="movie">Movies</option>
          <option value="tv">TV</option>
        </select>
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

export default Search;
