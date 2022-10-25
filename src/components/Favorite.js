import React from "react";

const Favorite = ({
  responseData,
  favorites,
  setFavorites,
  urlList,
  setUrlList,
}) => {
  const removeSong = (item) => {
    let tempFavs = favorites.filter((i) => i.url !== item.url);
    setFavorites(tempFavs);
    let tempUrls = urlList.filter((i) => i !== item.url);
    setUrlList(tempUrls);
  };
  return (
    <div className="list">
      <h3>Favorite Songs</h3>
      <ol>
        <tr>
          <th className="number">Number</th>
          <th className="song">Song</th>
          <th className="artist">Artist</th>
          <th className="button"></th>
        </tr>
        {favorites.map((item) => (
          <tr key={item.url}>
            <td className="number">{favorites.indexOf(item) + 1}</td>
            <td className="song">{item.name}</td>
            <td className="artist">{item.artist}</td>
            <td className="button">
              <button onClick={() => removeSong(item)}>Remove</button>
            </td>
          </tr>
        ))}
      </ol>
    </div>
  );
};

export default Favorite;
