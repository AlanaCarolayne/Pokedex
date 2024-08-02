import { FiSearch } from "react-icons/fi";
import "./input.css";
import React from "react";
import { useEffect } from "react";
const Input = ({ setSearch}) => {
  const inputRef = React.createRef();
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchQuery = inputRef.current.value.trim();
    setSearch(searchQuery);
  };

  return (
    <form>
      <input
        ref={inputRef}
        type="text"
        placeholder="Pesquisar"
        className="input"
        id="search"
      />
      <button className="input-btn" onClick={handleSubmit} type="submit">
        <FiSearch />
      </button>
    </form>
  );
};

export default Input;
