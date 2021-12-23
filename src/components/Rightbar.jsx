import React from 'react'
import "./rightbar.css";
import GenreShows from './GenreShows';
const Rightbar = ({topstreamingAnime,animeGenre}) => {

    return (
        <aside className='stream-container'>
       
                <div className="animeList">
                    <h3>Top 10 Anime</h3>
                    {topstreamingAnime.map((anime)=>{
                        return(
                            <a href={`https://www.crunchyroll.com/search?from=&q=${anime.title}`}  key={anime.id} target="_blank" rel="noreferrer">
                            <p>{anime.title}</p>
                        </a>
                        )
                    })}

                </div>
                
                <div className="test">

                    {animeGenre.map((genre)=>
                    <GenreShows 
                        key={genre.id} 
                        genre={genre.name} 
                        title={genre.title}
                        image={genre.image_url}
                        episodes={genre.episodes}
                        score={genre.score}
                        type={genre.type}
                        description = {genre.synopsis}
                        />)}
                </div>
      
        </aside>
    )
}

export default Rightbar
