import React, { useState } from "react";
import { useDispatch } from "react-redux";
import style from "../SearchBar/SearchBar.module.css"
import { getCountries } from "../../redux/actions";

const SearchBar = () => {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  const homeHandler = () => {
    dispatch(getCountries());
  };

  return (
    <div className={style.inputsContainer}>
      <input
        className={style.inputText}
        type="text"
        placeholder="Search by name"
        name="input"
        autocomplete="off"
        onChange={(e) => inputHandler(e)}
      />
      <div>
        <button className={style.srctBtn} onClick={() => onClickHandler()}>
          Search
        </button>
        <button className={style.srctBtn} onClick={() => homeHandler()}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
