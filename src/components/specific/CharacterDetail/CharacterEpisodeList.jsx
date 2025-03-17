import React from "react";

const CharacterEpisodeList = ({ episodes }) => {
  
    const createItemList = () =>
    episodes?.map((episode, index) => (
      <li key={index} className="list-group-item">
        {episode}
      </li>
    ));

    //Utilizamos el Optional Changing para consultar si Episodes existe (usamos el signo ?). Como existe, creamos la lista de episodios de manera dinamica

  return <ul className="list-group col-4">{createItemList()}</ul>;
};

export default CharacterEpisodeList;

