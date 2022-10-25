import React from "react";

const Filtered = ({
  responseData,
  favorites,
  setFavorites,
  urlList,
  setUrlList,
}) => {
  const addRemove = (item) => {
    if (!urlList.includes(item.url)) {
      setFavorites([...favorites, item]);
      setUrlList([...urlList, item.url]);
      console.log(urlList);
    } else {
      let tempFavs = favorites.filter((i) => i.url !== item.url);
      setFavorites(tempFavs);
      let tempUrls = urlList.filter((i) => i !== item.url);
      setUrlList(tempUrls);
    }
  };
  return (
    <div className="list">
      <h3>Filtered Songs</h3>
      <ol>
        <tr>
          <th className="number">Number</th>
          <th className="song">Song</th>
          <th className="artist">Artist</th>
          <th className="button"></th>
        </tr>
        {responseData.map((item) => (
          <tr key={item.url}>
            <td className="number">{responseData.indexOf(item) + 1}</td>
            <td className="song">{item.name}</td>
            <td className="artist">{item.artist}</td>
            <td className="button">
              <button onClick={() => addRemove(item)}>
                {urlList.includes(item.url) ? "Remove" : "Add"}
              </button>
            </td>
          </tr>
        ))}
      </ol>
    </div>
  );
};

export default Filtered;
