import React, { useState, useEffect } from "react";
import Pokeimagen from "./Pokeimagen";
import Paginacion from "./Paginacion";

const Pokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setPokemons(data.results));
  }, [url]);

  function onChangeUrl(_url) {
    setUrl(_url);
  }

  return (
    <>
      Hecho con React por Manuel Terán
      <div>
        <h1>Pokémon</h1>
        <div></div>
        <div className="pokemon">
          {pokemons.map((element, index) => {
            return (
              <ul className="lista">
                <il className="name" key={index}>
                  {element.name}
                </il>
                <br></br>
                <Pokeimagen url={element.url} />
              </ul>
            );
          })}
        </div>
        <Paginacion onChangeUrl={onChangeUrl} />
      </div>
    </>
  );
};

export default Pokemon;
