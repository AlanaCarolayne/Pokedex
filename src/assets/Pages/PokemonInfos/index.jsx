import "./pokemonInfo.css";
import Header_Pokemon_Info from "../../../Components/Header_PokemonInfo";
import Info from "../../../Components/Info";
import BaseStats from "../../../Components/BaseStats";
import { useEffect } from "react";
import Category from "../../../Components/Category";

const PokemonInfo = ({
  chosen,
  setColor,
  color,
  initial,
  backPokemon,
  nextPokemon,

}) => {
  useEffect(() => {
    if (chosen) {
      setColor(chosen.types[0].type.name);
    }
    
  }, [chosen, setColor]);


  return (
    <>
      <div className="container-pokemon">
        <Header_Pokemon_Info
          name={chosen.name}
          id={chosen.id}
          initial={initial}
          backPokemon={backPokemon}
          nextPokemon={nextPokemon}
        />
        <div className="pokemonImage">
          <img
            src={chosen.sprites.other["official-artwork"].front_default}
            alt={chosen.name}
          />
        </div>
        <main className="main-pokemon">
          <Info
            weight={chosen.weight}
            height={chosen.height}
            ability01={chosen.abilities[0].ability.name}
            ability02={
              chosen.abilities.length > 1
                ? chosen.abilities[1].ability.name
                : ""
            }
          />

          <Category
            type={chosen.types[0].type.name}
            type02={chosen.types.length > 1 ? chosen.types[1].type.name : ""}
            color={color}
          />
          <h5 style={{ color: color }}>Status Base</h5>
          {chosen.stats &&
            chosen.stats.length > 0 &&
            chosen.stats.map((stat) => (
              <BaseStats
                key={stat.stat.name}
                stat={stat.base_stat}
                nameStat={stat.stat.name}
                color={color}
              />
            ))}
        
        </main>
      </div>
    </>
  );
};

export default PokemonInfo;
