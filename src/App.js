import { NavBar } from './Components/NavBar';
import { Routes, Route } from "react-router-dom"
import Inicio from "./Screens/Inicio"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Inicio/>}/>
    </Routes>
    </>
  );
}

export default App;
