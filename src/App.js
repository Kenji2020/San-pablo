import { NavBar } from "./Components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./Screens/Inicio";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
      <Footer/>

    </>
  );
}

export default App;
