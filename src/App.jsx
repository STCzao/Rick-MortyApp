import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";
import React, { useState } from "react";

const App = () => {

  const [characterName, setCharacterName] = useState("");

  return (
    //El App se va a encargar solo de las rutas en este caso. Vamos a navegar entre componentes sin salir de la page
    //Utilizamos el hook de estado para setCharacterName y cada vez que se cambia el valor en el componente Navbar, lo guardamos aca
    //Pasamos la prop a Home, la desestructuramos y la agregamos a la peticion Http que se va a ejecutar cuando el useEffect monte el componente
    <BrowserRouter> 
      <Navbar setCharacterName={setCharacterName} /> 
      <Routes>
        <Route path="/" element={<Home characterName={characterName}/>} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
