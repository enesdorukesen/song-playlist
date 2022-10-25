import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Favorite from "./components/Favorite";
import Filtered from "./components/Filtered";
import Search from "./components/Seach";

function App() {
  const [keyWord, setKeyWord] = useState("manga");
  const [responseData, setResponseData] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [urlList, setUrlList] = useState([]);
  let url = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${keyWord}&api_key=0b323aba795f3ac625e85352f08e65b1&format=json`;

  let data = () => {
    axios
      .get(url)
      .then((response) =>
        setResponseData(response.data.results.trackmatches.track)
      );
  };
  useEffect(() => {
    data();
  }, [keyWord]);

  return (
    <div className="outer-container">
      <Search setKeyWord={setKeyWord} />
      <div className="inner-container">
        <Filtered
          responseData={responseData}
          favorites={favorites}
          setFavorites={setFavorites}
          urlList={urlList}
          setUrlList={setUrlList}
        />
        <Favorite
          responseData={responseData}
          favorites={favorites}
          setFavorites={setFavorites}
          urlList={urlList}
          setUrlList={setUrlList}
        />
      </div>
    </div>
  );
}

export default App;
