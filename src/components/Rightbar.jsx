import React from "react";
import "./rightbar.css";
import GenreShows from "./GenreShows";

const Rightbar = ({ topstreamingAnime, animeGenre, animeSchedule, animeSeason }) => {
  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  let date = new Date();
  let day = weekday[date.getDay()];
  return (
    <aside className="stream-container">
      <div className="animeList">
        <h3>Top 10 Anime</h3>
        {topstreamingAnime.map((anime) => {
          return (
            <a
              href={`https://www.crunchyroll.com/search?from=&q=${anime.title}`}
              key={anime.id}
              target="_blank"
              rel="noreferrer"
            >
              <p>{anime.title}</p>
            </a>
          );
          })}
    

      <div className="animeSchedule">
        <h3>Season: {animeSeason.season_name} {animeSeason.season_year}</h3>       
        <h3>Airing: {day}</h3> 
        {animeSchedule.map((schedule) => {
          return (
           <div className="schedule-content">
            <a href="#">{schedule.title}</a>
            <p>{new Date(schedule.airing_start).toLocaleString('en-US', {hour24: false})}</p>
            <p>{schedule.type}</p>
            
           </div>

          );
        })}
      </div>

      </div>

      <div className="test">
        {animeGenre.map((genre) => (
          <GenreShows
            key={genre.id}
            genre={genre.genres[0].name}
            title={genre.title}
            image={genre.image_url}
            episodes={genre.episodes}
            score={genre.score}
            type={genre.type}
            description={genre.synopsis}
          />
        ))}
      </div>
    </aside>
  );
};

export default Rightbar;
