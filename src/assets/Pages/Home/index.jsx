import Cards from "../../../Components/Cards";
import Header from "../../../Components/Header";
import { useEffect } from "react";
const Home = ({ pokemons, setPokemons, saveChoise, setSearch, setColorType,  }) => {
  useEffect(() => {
    setColorType("#dc0a2d"); 
  }, []);
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
