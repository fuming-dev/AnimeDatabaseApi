import "./videocontainer.css";
import AnimeShows from "./AnimeShows";


const VideoContainer = ({


  animeMovie,
  handleSearch,
  search,
  setSearch
}) => {

  return (
    <div className="video-container">
      <div className="vid">
        <div className="name">
        </div>
      </div>    

      <div className="anime-list">
        
        {animeMovie.map(anime=>(
          <div className="anime-card">
            <AnimeShows
              anime={anime}
              key={anime.id}
              
            
            />
          </div>

        ))}

      </div>

    </div>
  );
};

export default VideoContainer;
