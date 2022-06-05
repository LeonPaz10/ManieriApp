import React, { useState } from 'react'
import logoPosta1 from '../../assets/img/logoPosta1.png'
import Swal from 'sweetalert2'
import firebaseApp from '../firebase/Config'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const auth = getAuth(firebaseApp);




const Login = () => {

  
  const [registro, setRegistro] = useState(false)

  const handlerSubmit = async(e) =>{
    e.preventDefault()
    const email = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    if(registro)(
      await createUserWithEmailAndPassword(auth, email, contraseña)
      
    )
    else(
      await signInWithEmailAndPassword(auth, email, contraseña) 
    )

   

  } 

  const iniciarSesion = () =>{
    const contraseña = document.getElementById('contraseña').value;

    if (contraseña.auth  < 6){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Contraseña incorrecta',
      })
    }
    if (setRegistro(false)){
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido',
        text: 'Has iniciado sesión correctamente',
      })
    }
  } 

  const registros = () =>{
    
    const contraseña = document.getElementById('contraseña').value;

      if (contraseña.length < 6){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'La contraseña debe tener al menos 6 caracteres',
        })
      }
      if (contraseña.length > 6){
        Swal.fire({
          icon: 'success',
          title: 'Bienvenido! ',
          text: 'Ya estas registrado en ManieriAPP',
        })
      }

      const email = document.getElementById('email').value;

      if (email === ''){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'El email no puede estar vacio',
        })
      } 


 

    
  }

  
  

  return (
    <div className='loginContainer'>

          <div className='logo'>

            <img src={logoPosta1} alt="logo Manieri"  className='logoimg' /> 

          </div>


      <div className='container inicio'>

         <h1 className='container title'> La app de la gente  </h1>     

          <div>
            <h1 className='InRe container'>{registro? '¡Registrate!' : 'Inicia sesión'}</h1>
          </div>


      </div>

      

      <form  onSubmit={handlerSubmit} className="container form">
        <div className='mb-3  '>

          <label className='form-label'> Direccion de Email: </label>
          <input type="email" className='form-control formIn' placeholder='ingresar Email' id='email' required/>

        </div>

        <div className='mb-3'>
          <label className='form-label'> Contraseña: </label>
          <input type="password" className='form-control formIn' placeholder='ingresar contraseña' id='contraseña' required/>
        </div>


        <button className='btn btn-primary' type='submit' >

          {registro?
            <div><span onClick={registros} >Registrarse</span></div>
           :
           <div><span onClick={iniciarSesion}>Iniciar Sesión</span></div>
           }

        </button>
      </form>


        <div className='form-grup container'>
          <button className='btn btn-secondary mt-4' onClick={()=>setRegistro(!registro)}>
            {registro? '¿Ya tenes cuenta? Inicia sesión.' : '¿No tenes cuenta? Registrate.'}
          </button>
        </div>

        <br />      
            
                 
           
          

            


    </div>  )
}

export default Login