import './App.css';
import React, { useState } from 'react';
import Home from './components/home/Home';
import Login from './components/login/Login';

import firebaseApp from './components/firebase/Config';
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const auth = getAuth(firebaseApp);





function App() {
  
  const [usuario, setUsuario] = useState(null);

  onAuthStateChanged(auth, usuarioFirebase => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  })
 
    return (
    <div className="App">

      {usuario ? <Home correoUsuario={usuario.email}/> : <Login usuario={usuario} />}
      
      
      
    </div>
  );
}

export default App;
