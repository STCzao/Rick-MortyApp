import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CharacterCard from "../components/general/CharacterCards/CharacterCards";
import CharacterEpisodeList from "../components/specific/CharacterDetail/CharacterEpisodeList";

const CharacterDetail = () => {
  const [CharacterDetail, setCharacterDetail] = useState({}); //Creamos un estado para almacenar nuestra peticion

  const { id } = useParams(); //Desestructuramos id y lo utilizamos como una funcion

  const fetchData = async () => {
    //Despues de que se ejecute la promesa, continuamos con la sentencia de código siguiente
    try {
      const { data } = await axios(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      setCharacterDetail(data); //Data es un objeto, una vez desestructurado, lo guardamos en CharacterDetail mediante SetCharacter Detail
    } catch (error) {
      //Si el codigo tiene algun error, lo capturamos a traves del catch
      console.log(error);
    }
  };

  useEffect(() => {
    //Lo utilizamos para cargar primero el componente y despues ejecutar lo que se encuentre dentro de el
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="row p-5 gap-5 align-items-start">
        <CharacterCard character={CharacterDetail} col={6} /> 
        <CharacterEpisodeList episodes={CharacterDetail.episode}/>
      </div> 
    </div>
  ); //Extraemos la informacion de cada componente y la almacenamos en una direccion de CharacterDetail
};

export default CharacterDetail;
