import Category from "../Category";
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
            {/* <Category
              type={pokemon.types[0].type.name}
              type02={
                pokemon.types.length> 1 ? pokemon.types[1].type.name : ""
              }
            /> */}
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
