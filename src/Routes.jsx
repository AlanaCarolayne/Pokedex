import styled from "styled-components";
import Footer from "./Components/Footer";
import "styled-components";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./assets/Pages/NotFound";
import Home from "./assets/Pages/Home";
import PokemonInfo from "./assets/Pages/PokemonInfos";

function AppRoutes() {
  const StyledBody = styled.div`
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
    background-color: ${(props) => props.color || "#dc0a2d"};
    width: 100%;
    height: 100%;
  `;
  const [types, setTypes] = useState([
    {
      category: "bug",
      color: "#A7B723",
    },
    {
      category: "dark",
      color: "#75574C",
    },
    {
      category: "dragon",
      color: "#7037FF",
    },
    {
      category: "electric",
      color: "#F9CF30",
    },
    {
      category: "fairy",
      color: "#E69EAC",
    },
    {
      category: "fighting",
      color: "#C12239",
    },
    {
      category: "fire",
      color: "#F57D31",
    },
    {
      category: "flying",
      color: "#A891EC",
    },
    {
      category: "ghost",
      color: "#70559B",
    },
    {
      category: "normal",
      color: "#AAA67F",
    },
    {
      category: "grass",
      color: "#74CB48",
    },
    {
      category: "ground",
      color: "#DEC16B",
    },
    {
      category: "ice",
      color: "#9AD6DF",
    },
    {
      category: "poison",
      color: "#A43E9E",
    },
    {
      category: "psychic",
      color: "#FB5584",
    },
    {
      category: "rock",
      color: "#B69E31",
    },
    {
      category: "steel",
      color: "#B7B9D0",
    },
    {
      category: "water",
      color: "#6493EB",
    },
  ]);
  const [pokemons, setPokemons] = useState([]);
  const [chosen, setChosen] = useState(null);
  const [color, setColor] = useState();
  const [search, setSearch] = useState("");
  const [nextPokemon, setNextPokemon] = useState("");
  const [previousPokemon, setPreviousPokemon] = useState("");
  const saveChoise = (pokemon) => {
    setChosen(pokemon);
  };
  const changePokemon = () => {
    
  };

  const setColorType = (category) => {
    const type = types.find((type) => type.category === category);
    if (type) {
      setColor(type.color);
    } else {
      setColor("#dc0a2d");
    }
  };

  useEffect(() => {
    if (search && search.length > 0) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}/`)
        .then((response) => response.json())
        .then((data) => {
          setPokemons([data]);
        })
        .catch((error) => {
          console.error(error);
          setPokemons([]);
        });
    } else {
      const promises = [];
      for (let i = 1; i < 13; i++) {
        promises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}/`).then((response) =>
            response.json()
          )
        );
      }
      Promise.all(promises).then((pokemonsArray) => {
        setPokemons(pokemonsArray);
      });
    }
  }, [search]);

  return (
    <BrowserRouter>
      <StyledBody color={color}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                pokemons={pokemons}
                setPokemons={setPokemons}
                saveChoise={saveChoise}
                setSearch={setSearch}
              />
            }
          />
          <Route path="/*" element={<NotFound setSearch={setSearch} />} />
          <Route
            path="/pokemonInfo"
            element={
              <PokemonInfo
                chosen={chosen}
                setColor={setColorType}
                color={color}
              />
            }
          />
        </Routes>
        <Footer />
      </StyledBody>
    </BrowserRouter>
  );
}

export default AppRoutes;
