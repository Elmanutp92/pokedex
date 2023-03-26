import React, { useEffect, useState } from "react";

const Paginacion = ({ onChangeUrl }) => {
  const [current, setCurrent] = useState("https://pokeapi.co/api/v2/pokemon");
  const [previous, setPrevious] = useState();
  const [next, setNext] = useState();

  useEffect(() => {
    onChangeUrl(current);
    fetch(current)
      .then((response) => response.json())
      .then((data) => {
        setPrevious(data.previous);
        setNext(data.next);
      });
  }, [current, onChangeUrl]);

  function onClickPrevious() {
    setCurrent(previous);
  }

  function onClickNext() {
    setCurrent(next);
  }

  return (
    <div>
      <div className="btn">
        <button className="btn-p" disabled={previous == null} onClick={onClickPrevious}>Previous</button> 
        <button className="btn-n" disabled={next == null} onClick={onClickNext}>Next</button>
      </div>
    </div>
  );
};

export default Paginacion;
