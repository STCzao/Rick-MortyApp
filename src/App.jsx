import { useEffect } from "react";
import Navbar from "./components/general/Navbar";
import Axios from "axios";

function App() {

  const [characters, setCharacters] = useState([]); //Utilizo los estados para que el componente entre en fase de actualizacion.
  const [totalPages, setTotalPages] = useState(0);


  const handleRequest = async () => {
    try {
      const {data: {results, info: {pages}}} = await Axios ("https://rickandmortyapi.com/api/character"); //Desestructuro "data" para poder acceder a sus propiedades
    setCharacters(results); //Cuando la pagina cambie su valor, ingresa al estado y compara el virtual DOM viejo con el nuevo. Si encuentra alguna diferencia, la cambia y renderiza
    setTotalPages(pages);
    
    } catch (error) {

    } finally {

    }
  };

  useEffect(() => {
    
    handleRequest(); //Se ejecuta una vez que el componente esta montado
  }, []);
  

  return (
    <>
      <Navbar />
    </>
  );
}

export default App;
