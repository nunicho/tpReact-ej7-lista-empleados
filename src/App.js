import 'bootstrap/dist/css/bootstrap.min.css';
import Persons from './components/Persons';



function App() {
  
return (
  <div className="App container text-center contenedorGeneral row">    
    <h1 className='display-2 text-center my-5 '>Lista de empleados</h1>
        <Persons></Persons>
  </div>

);
}

export default App;
