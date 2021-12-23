import React from "react";
import "./animeshows.css";
const AnimeShows = ({ anime }) => {
  return (
    <article className="anime-card">
      <a href={anime.url} target="_blank" rel="noreferrer">
        <figure>
          <img src={anime.image_url} alt="Anime image" />
        </figure>
        <h3>{anime.title}</h3>
      </a>
    </article>
  );
};

export default AnimeShows;
