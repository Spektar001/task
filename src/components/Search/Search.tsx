import React, { useState } from "react";
import "./Search.css";

type Props = {
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const Search = (props: Props) => {
  const [value, setValue] = useState(localStorage.getItem('search') || '');

  function inputHandler(event: React.ChangeEvent<HTMLInputElement>) {
    localStorage.setItem('search', event.target.value);
    setValue(event.target.value);
  }

  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      localStorage.setItem('search', value);
      props.setSearch(value);
    }
  };

  const handleFind = () => {
    localStorage.setItem('search', value);
    props.setSearch(value);
  };

  return (
    <div className="main__search-box">
      <input
        value={value}
        onInput={inputHandler}
        className="search"
        type="search"
        placeholder="Search..."
        onKeyDown={handleEnter}
      />
      <button onClick={handleFind} className="search__btn">
        find
      </button>
    </div>
  );
};
