import { useEffect } from "react";
import Axios from "axios";
import CharacterCards from "../components/general/CharacterCards/CharacterCards";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import Loader from "../components/general/Loader/Loader";

const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
  
    const handleRequest = async () => {
      setIsLoading
      try {
        const {
          data: {
            results,
            info: { pages },
          },
        } = await Axios(
          `https://rickandmortyapi.com/api/character?page=${currentPage}`
        ); //Desestructuro "data" para poder acceder a sus propiedades
        setCharacters(results); //Cuando la pagina cambie su valor, ingresa al estado y compara el virtual DOM viejo con el nuevo. Si encuentra alguna diferencia, la cambia y renderiza
        setTotalPages(pages);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
  
    useEffect(() => {
      handleRequest(); //Se ejecuta una vez que el componente esta cargado
    }, [currentPage]); //Cuando current page cambia el valor, se ejecuta y actualiza el handlerequest
  
    const createCard = () =>
      characters.map((character) => (
        <CharacterCards key={character.id} character={character} />
      ));
  
    const handlePageClick = (selectedPage) => setCurrentPage(selectedPage + 1);
  
    return (
      <>
        <div className="container-fluid pt-5"> 
          <div className="row justify-content-center gap-5">
            {isLoading ? <Loader/> : createCard()};
          </div>
          <ReactPaginate  //Estilos y funciones del paginate
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
}

export default Home