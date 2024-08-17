import "./cards.css";
import Card from "../Card";
const Cards = ({ pokemons, saveChoise }) => {
  return (
    <>
      <main className="container">
        <div className="main-container">
          {pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.id} to={'/pokemonInfo'} saveChoise={saveChoise}/>
          ))}
        </div>
      </main>
    </>
  );
};

export default Cards;
