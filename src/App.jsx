import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

const App = () => {
  return (
    //El App se va a encargar solo de las rutas en este caso. Vamos a navegar entre componentes sin salir de la page.
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
