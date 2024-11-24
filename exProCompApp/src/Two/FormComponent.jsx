import { useRef, useState, useEffect } from "react"
import {auth, storage} from '../backend/firebase.js'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import SimpleReactValidator from 'simple-react-validator'

const FormComponent = () => {
  // Variables that handles some form const, errores and user's messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Validations using simple-react-validator and its messages
  // We added a dengar message displays in red
  const validator = useRef(new SimpleReactValidator({
    messages: {
      required: 'Es obligatorio',
      email: 'Formato de correo no válido. Debe ser ejemplo@dominio.xxx'
    },
    className: 'text-danger'
  }))

  // We used useEffect to link the errores
  useEffect(() => {
    validator.current.showMessages();
  }, []);

  // The app shows the success messages, depending on sign in or sign up
  const showSuccessMessage = (message) => {
    setSuccessMessage(message);
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  // Handling the registering or logging process
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      if (file) {
        const storageRef = ref(storage, `files/${user.uid}/${file.name}`);
        await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(storageRef);

        // Printing this debugging message. When about to deploy, it must be commented out or deleted.
        console.log('Archivo subido:', downloadURL);
      }
      // Cleaning every input after user log in or sign up
      setEmail('');
      setPassword('');
      setFile(null);
      setError('');

      showSuccessMessage('¡Te has registrado satisfactoriamente!')
    } catch (error) {
      setError(console.log(error.message));
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Debugging message to show it was successful
      console.log('Usuario conectado:', userCredential.user);
      showSuccessMessage('Hola! Te estábamos esperando')
      setEmail('');
      setPassword('');
      setError('');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  console.log(error)

  return (
    <div>
      {/* It shows a successful messages */}
       {successMessage && (
          <div className="alert alert-success alert-dismissible fade show" role="alert">
            {successMessage}
          </div>
        )}
      <h2>Autenticación</h2>
      <div className="mt-4">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => validator.current.showMessageFor('email')}/>
            {validator.current.message('email', email, 'required|email')}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} onBlur={() => validator.current.showMessageFor('password')}/>
            {validator.current.message('password', password, 'required')}
          </div>
          <div className="mb-3">
            <label htmlFor="file" className="form-label">Cargar archivo</label>
            <input type="file" className="form-control" id="file" onChange={handleFileChange}/>
          </div>
          <button type="button" className="btn btn-outline-primary" onClick={handleLogin}>Ingresar</button>
          <button type="button" className="btn btn-primary" onClick={handleRegister}>Registrar</button>
        </form>
      </div>
    </div>
  )
}

export default FormComponent