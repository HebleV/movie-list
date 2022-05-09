import React from "react";
import { img_300, unavailable } from "../../config/config";
import "./MovieCard.css";

const MovieCard = ({ poster, title, date }) => {
  return (
    <div className="media">
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="releaseDate">{date}</span>
    </div>
  );
};

export default MovieCard;
