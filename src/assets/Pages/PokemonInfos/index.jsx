import "./pokemonInfo.css";
import Header_Pokemon_Info from "../../../Components/Header_PokemonInfo";
import Info from "../../../Components/Info";
import BaseStats from "../../../Components/BaseStats";
import { useEffect } from "react";

const PokemonInfo = ({ chosen, setColor, color }) => {
  useEffect(() => {
    if (chosen) {
      setColor(chosen.types[0].type.name);
    }
  }, [chosen, setColor]);
  console.log(chosen);
  return (
    <>
      <div className="container-pokemon">
        <Header_Pokemon_Info name={chosen.name} id={chosen.id} />
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
