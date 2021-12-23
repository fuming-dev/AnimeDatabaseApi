import "./container.css";
import VideoContainer from "./VideoContainer";

const Container = ({
  topstreamingAnime,
  search,
  handleSearch,
  animeMovie,
  setSearch,
}) => {
  return (
    <div>
      <VideoContainer
        search={search}
        handleSearch={handleSearch}
        animeMovie={animeMovie}
        setSearch={setSearch}
      />
    </div>
  );
};

export default Container;
