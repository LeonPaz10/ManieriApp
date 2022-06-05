import React from 'react';
import Reloj from '../Reloj/Reloj';
import firebaseApp from '../firebase/Config'
import {getAuth, } from 'firebase/auth'
import logoPosta1 from '../../assets/img/logoPosta1.png'
import Swal from 'sweetalert2';
import Tabla from '../tabla precios/Tabla';
const auth = getAuth(firebaseApp);



const Home = () => {


  const cerrarSession = () => {
    auth.signOut()
  }   
    

  // async function pedirDatos (){
  //   const { value: formValues } = await Swal.fire({
  //     title: 'Dame estos datos tuyos mi viejo!',
  //     html: 
  //     '<input id="swal-input1" class="swal2-input" placeholder="Nombre" >' +
  //     '<input id="swal-input2" class="swal2-input" placeholder="Apellido" >' +
  //     '<input id="swal-input3" class="swal2-input" placeholder="Categoria" >',
  //     focusConfirm: false,
     
  //   })
    
  //   if (formValues) {
  //     Swal.fire({
  //       title: 'Joya mi rey!',
  //       icon: 'success',
  //     })
  //   }
    
  
    
  // 

  //Funcion para aparecer y desaparecer la tabla
  const mostrarTabla = () => {
    let tabla = document.getElementById("tabla");
    let miValue = document.querySelector('input[name="mostrar"]');
    if (miValue.value === "Ver tabla salarial") {
      tabla.style.display = "block";
      miValue.value = "Ocultar";
    } else {
      tabla.style.display = "none";
      miValue.value = "Ver tabla salarial";
    }


  }
  //

  






  return (
    <div className='homePage'>
      <div className='botones container'>
         <button onClick={cerrarSession} className="cerrarSesion">Cerrar sesión</button>
          <div className='logoHome container'>

              <img src={logoPosta1} alt="logo Manieri"  className='logoimg1'  hre/> 
              

          </div>
      </div>

      <Reloj/> 

      

      <div className='container'>
        <h1 className='bienvenido'>¡Bienvenido!</h1>
        <p className='finalidad'>La finalidad de esta app es poder controlar nuestras horas trabajadas y sacar la cuenta automaticamente.</p>
      </div>
      
      <div > 


          <input type="button" id='mostrarTabla' onClick={mostrarTabla} className='pedidaDatos container mostrarTabla' value="Ver tabla salarial" name='mostrar' />

            
            <div className='tablaSalarial' id='tabla'>
              <Tabla/>
            </div>
        <button className='pedidaDatos container'>Calular mi sueldo</button>

      </div>

    
  
      
      

      
    

      



    

       
    </div>
  )
}

export default Home