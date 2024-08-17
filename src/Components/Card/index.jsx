import "./card.css";
import { Link } from "react-router-dom";
const Card = ({ pokemon, to, saveChoise }) => {
  return (
    <>
      <Link
        to={to}
        className="link-card"
        onClick={() => {
          saveChoise(pokemon);
        }}
      >
        <div className="card-container">
          <p className="card-id">#{pokemon.id}</p>
          <div className="card-div">
            <img
              src={pokemon.sprites.front_default}
              alt="Imagem do pokemon"
              className="card-img"
            />
          </div>
          <div className="card-name-div">
            <h3 className="card-name">{pokemon.species.name.toUpperCase()}</h3>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Card;
