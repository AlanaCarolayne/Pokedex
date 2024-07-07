import Cards from "../../../Components/Cards";
import Header from "../../../Components/Header";
const Home = ({ pokemons, setPokemons, saveChoise, setSearch }) => {
  return (
    <>
      <Header setSearch={setSearch} />
      <Cards
        pokemons={pokemons}
        setPokemons={setPokemons}
        saveChoise={saveChoise}
      />
    </>
  );
};

export default Home;
