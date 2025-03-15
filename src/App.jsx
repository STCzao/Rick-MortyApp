import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/general/Navbar";
import Home from "./pages/Home";
import CharacterDetail from "./pages/CharacterDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App