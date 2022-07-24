import { NavBar } from './Components/NavBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Footer}  from './Components/Footer';
function App() {
  return (
    <>
    <NavBar/>
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>Hello World</h1>
        </div>
      </div>
    </div>
    
    <Footer />
    </>
  );
}

export default App;
