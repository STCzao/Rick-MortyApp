import { useEffect } from "react";
import Axios from "axios";
import CharacterCards from "../components/general/CharacterCards/CharacterCards";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../components/general/Loader/Loader";

const Home = ({ characterName }) => {
  const [characters, setCharacters] = useState([]);//Lo utilizo para guardar las caracteristicas de results
  const [totalPages, setTotalPages] = useState(0); //Lo utilizo para guardar las paginas
  const [currentPage, setCurrentPage] = useState(1); //Lo utilizo para contabilizar las paginas y guardar aca el resultado
  const [isLoading, setIsLoading] = useState(false);//Lo utilizo para cargar las cards segun la interaccion del usuario

  const handleRequest = async () => {
    try {
      const {
        data: {
          results,
          info: { pages },
        },
      } = await Axios(
        `https://rickandmortyapi.com/api/character?page=${currentPage}&name=${characterName}`); 
      setCharacters(results); 
      setTotalPages(pages);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
};


  useEffect(() => {

    setIsLoading(true); //Cuando se monte el useEffect, setIsLoading se coloca en true y el SetTimeOut ejecuta el HandleRequest despues de cierto tiempo

    const searchInterval = setTimeout(() => { 
      handleRequest(); //Se ejecuta y monta el componente cuando esta cargado
    },1000);

    return () => {
      clearInterval(searchInterval); //Una vez que dejo de escribir caracteres, limpiamos el intervalo de SetTimeOut para que el HandleRequest se ejecute
    }
  }, [currentPage, characterName]); //Cuando currentpage/charactername cambia el valor, se ejecuta y actualiza el handle request

  const createCard = () =>
    characters.map((character) => (
      <CharacterCards key={character.id} character={character} col={3} />
    )); //El map ingresa al string de characters. Luego, cada card es una posicion del string y esta determinado por un Id, para traer sus caracteristicas, hay que pasarle una key que busque ID dentro de Character

  const handlePageClick = (selectedPage) => setCurrentPage(selectedPage + 1);

  return (
    <>
      <div className="container-fluid pt-5">
        <div className="row justify-content-center gap-5">
          {isLoading ? <Loader /> : createCard()}; 
        </div> 
        <ReactPaginate //Estilos y funciones del react-paginate
          pageCount={totalPages}
          onPageChange={(data) => handlePageClick(data.selected)}
          containerClassName="pagination justify-content-center mt-5"
          activeClassName="active"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          previousLinkClassName="page-link"
          nextLinkClassName="page-link"
          breakClassName="page-item disabled"
          breakLinkClassName="page-link"
        />
      </div>
    </>
  );
};

export default Home;

//Aca establecemos las bases de nuestros componentes
