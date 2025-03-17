import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCards = ({
  character: { image, name, status, specie, id },
  col,
}) => {
  //Desestructure Col para hacer las columnas dinamicas y utilizarlas con un valor particular tanto en el home como en Character Detail
  const navigate = useNavigate();

  return (
    //Utilice la funcion onClick para que useNavigate, nos direccione a character y luego al ID de cada card.
    <div
      className={`card col-12 col-lg-${col} bg-dark pt-2`}
      onClick={() => navigate(`/character/${id}`)}
    >
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title text-white">{name}</h5>
        <ul>
          <li className="card-text text-white">Specie: {specie}</li>
          <li className="card-text text-white">Status: {status}</li>
        </ul>
      </div>
    </div>
  );
};

export default CharacterCards;
