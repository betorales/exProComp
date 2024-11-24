import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import FatherComponent from './One/FatherComponent';
import FormComponent from './Two/FormComponent';

function App() {
  return (
    <div className="container text-center">
      <div className="row justify-content-center ">
        <div className="col-4">
          <p>Ejercicio 1</p>
          <FatherComponent />
        </div>
        <div className="col-4">
          <p>Ejercicio 2</p>
          <FormComponent />
        </div>
      </div>
    </div>
)
}

export default App
