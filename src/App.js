import { useState, useEffect } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Rightbar from "./components/Rightbar";
import Videoplayer from "./components/VideoPlayer/Videoplayer";

function App() {

  /*https://api.jikan.moe/v3/schedule/day */

  const [animeMovie, setanimeMovie] = useState([]);
  const [topstreamingAnime, settopStreamingAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [animeGenre, setanimeGenre] = useState([]);
  const [animeSchedule, setanimeSchedule] = useState([]);
  const [animeSeason, setanimeSeason] = useState([]);


 

  // https://api.jikan.moe/v3/season/year/season


  const getSeason = async () => {

    const temp = await fetch(
      `https://api.jikan.moe/v3/season/2022/winter`
    ).then((res) => res.json());

    setanimeSeason(temp);

    console.log(temp);
 

  };


  
  const getSchedulev2 = async () => {

    const temp = await fetch(
      `https://api.jikan.moe/v4/seasons/2022/winter`
    ).then((res) => res.json());

    console.log(temp);
 

  };

  const getDay = () => {
    
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Sat  urday"];
    
    let date = new Date();

    let day = weekday[date.getDay()];

    return day;


  }

  const getTopAnime = async () => {
    const temp = await fetch(
      `https://api.jikan.moe/v3/top/anime/1/bypopularity`
    ).then((res) => res.json());
    settopStreamingAnime(temp.top.slice(0, 10));
  };



  const getSchedule = async () => {

    let day = getDay();
    const temp = await fetch(`https://api.jikan.moe/v3/schedule/${day}`).then(
      (res) => res.json()
    );

    switch (day){

      case 'Monday':
        setanimeSchedule(temp.monday);
        break;

      case 'Tuesday':
        setanimeSchedule(temp.tuesday);
        break;

      case 'Wednesday':
        setanimeSchedule(temp.wednesday);
        break;

      case 'Thursday':
          setanimeSchedule(temp.thursday);
          break;

      case 'Friday':
        setanimeSchedule(temp.friday);
        break;  

      case 'Saturday':
        setanimeSchedule(temp.saturday);
        break;

      case 'Sunday':
        setanimeSchedule(temp.sunday);
        break;

      default:
        console.log('Please enter a date!!!!');


    }


    console.log(temp);


  }

  const getAnimeGenre = async () => {
    const temp = await fetch(`https://api.jikan.moe/v3/genre/anime/1`).then(
      (res) => res.json()
    );

    setanimeGenre(temp.anime);
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
    getSchedulev2();
    getSeason();
    getSchedule();
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
        search={search}
        handleSearch={handleSearch}
        animeMovie={animeMovie}
        setSearch={setSearch}
      />

      <Rightbar 
      topstreamingAnime={topstreamingAnime} 
      animeSchedule={animeSchedule}
      animeSeason = {animeSeason}
      animeGenre={animeGenre} />

      <Button />
    </div>
  );
}

export default App;
