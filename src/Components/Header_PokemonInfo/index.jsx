
import "./header_PI.css";
import {
  IoMdArrowBack,
  IoIosArrowBack,
  IoIosArrowForward,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Header_Pokemon_Info = ({ name, id, initial, backPokemon, nextPokemon }) => {
  const navigate = useNavigate();
  return (
    <header className="header-PI">
      <div className="pokemon-header">
        <button
          className="btn-back"
          onClick={() => {
            navigate(-1);
            initial()
          }}
        >
          <IoMdArrowBack />
        </button>
        <h1>{name.toUpperCase()} </h1>
        <h3>#{id}</h3>
      </div>
      <div className="next-previous-btn">
        <button className="backPokemon" onClick={() => backPokemon(id, name)}>
          <IoIosArrowBack />
        </button>
        <button className="nextPokemon" onClick={() => nextPokemon(id, name)}>
          <IoIosArrowForward />
        </button>
      </div>
    </header>
  );
};

export default Header_Pokemon_Info;
