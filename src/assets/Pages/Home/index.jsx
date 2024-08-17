import Cards from "../../../Components/Cards";
import Header from "../../../Components/Header";
import { useEffect } from "react";
const Home = ({ pokemons, saveChoise, setSearch, setColorType }) => {
  useEffect(() => {
    setColorType("#dc0a2d"); 
  }, []);
  return (
    <>
      <Header setSearch={setSearch} />
      <Cards
        pokemons={pokemons}
        saveChoise={saveChoise}
      />
    </>
  );
};

export default Home;
