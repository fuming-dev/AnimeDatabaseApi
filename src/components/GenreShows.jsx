import { useState } from "react";
import "./genreshows.css";

const GenreShows = ({
  image,
  episodes,
  genre,
  title,
  score,
  type,
  description,
}) => {
  const [descript, setDescript] = useState(false);


  return (
    <div className="test">
      <div className="test-info">
        <img src={image} alt="anime image" />
        <div className="test-description">
          <p>Episodes: {episodes}</p>
          <p>Genre: {genre}</p>
          <p>Title: {title}</p>
          <p>Score: {score}</p>
          <p>Type: {type}</p>
        </div>

        <div className="description">
          {descript ? <button>Sypnosis| {description}</button> : ""}
          <button onClick={() => setDescript(!descript)}>
            {descript ? "Close" : "Read Here"}
          </button>
        </div>
        <div className="btn-center">
          <a href="#">
            <button>Watch Here</button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default GenreShows;
