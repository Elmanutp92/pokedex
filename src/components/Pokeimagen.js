import React, { useState, useEffect } from "react";

const Pokeimagen = ({ url }) => {
  const [imagen, setImagen] = useState(null);

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setImagen(data));
  }, [url]);

  if(!imagen){
    return(
        <div>Cargando...</div>
    )
  }

  return (
    <>
      <div className="card">
        <img className="img" src={imagen.sprites.front_default} alt={imagen.name}></img>
      </div>
    </>
  );
};

export default Pokeimagen;
