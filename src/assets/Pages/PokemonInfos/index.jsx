import "./pokemonInfo.css";
import Header_Pokemon_Info from "../../../Components/Header_PokemonInfo";
import Info from "../../../Components/Info";
import BaseStats from "../../../Components/BaseStats";
import { useEffect } from "react";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import Category from "../../../Components/Category";

const PokemonInfo = ({
  chosen,
  setColor,
  color,
  initial,
  backPokemon,
  nextPokemon,
  fav,
}) => {
  useEffect(() => {
    if (chosen) {
      setColor(chosen.types[0].type.name);
    }
  }, [chosen, setColor]);

  let iconFav = chosen.fav ? (
    <p>
      Remover dos Favoritos <IoIosHeart className="icon-fav"/>
    </p>
  ) : (
    <p>
      Adicionar aos Favoritos
      <IoIosHeartEmpty className="icon-fav"/>{" "}
    </p>
  );
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
            <div className="div-fav-btn">

          <button
            onClick={() => {
              fav(chosen);
            }}
            className="fav-btn"
          >
            {iconFav}
          </button>
            </div>
        </main>
      </div>
    </>
  );
};

export default PokemonInfo;
