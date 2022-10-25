import React, { useState } from "react";

const Seach = ({ setKeyWord }) => {
  const [input, setInput] = useState("");
  let onChangeHandler = (e) => {
    setInput(e.target.value);
    setKeyWord(input);
  };
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={onChangeHandler}
        placeholder="enter something (etc.: 'BTS' , 'yağmurlar') "
      />
    </div>
  );
};

export default Seach;
