import React from "react";

const CharacterCards = ({character : {image, name, status, specie }}) => {
  return (
    <div className="card col-12 col-lg-3 bg-dark pt-2" >
      <img src= {image} className="card-img-top" alt={name} />
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
