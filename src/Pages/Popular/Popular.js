import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./Popular.css";

const Popular = () => {
  const [trendContent, setTrendContent] = React.useState([]);

  const fetchPopularContent = async () => {
    return await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
    );
  };

  const { data } = useQuery("popularData", fetchPopularContent);

  React.useEffect(() => {
    let movieDetails = data;
    if (movieDetails) {
      setTrendContent(data.data.results);
    }
  }, [data]);

  return (
    <div>
      <div className="trending">
        {trendContent &&
          trendContent.map((item) => (
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
    </div>
  );
};

export default Popular;
