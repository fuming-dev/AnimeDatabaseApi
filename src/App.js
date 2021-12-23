import { useState, useEffect } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Rightbar from "./components/Rightbar";
function App() {
  /*https://api.jikan.moe/v3/schedule/day */

  const [animeMovie, setanimeMovie] = useState([]);
  const [topstreamingAnime, settopStreamingAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [animeGenre, setanimeGenre] = useState([]);

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    settopStreamingAnime(temp.top.slice(0, 10));
  };

  const getAnimeGenre = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/genre/anime/1`).then(
      (res) => res.json()
    );

    setanimeGenre(temp.anime);
    console.log(temp.anime);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchAnime(search);
  };

  const fetchAnime = async (query) => {
    const temp = await fetch(`https://api.jikan.moe/v3/search/anime?q=${query}
    &order_by=title&sort=asc&limit=10`).then((res) => res.json());
    setanimeMovie(temp.results);
    console.log(animeGenre);
  };

  useEffect(() => {
    getAnimeGenre();
    getTopAnime();
  }, []);

  return (
    <div>
      <Navbar
        search={search}
        handleSearch={handleSearch}
        setSearch={setSearch}
      />
      <Header />
      
      <Container
        topstreamingAnime={topstreamingAnime}
        search={search}
        handleSearch={handleSearch}
        animeMovie={animeMovie}
        setSearch={setSearch}
      />

      <Rightbar topstreamingAnime={topstreamingAnime} animeGenre={animeGenre} />

      <Button />
    </div>
  );
}

export default App;
