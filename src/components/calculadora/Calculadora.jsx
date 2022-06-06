import React from 'react'

const Calculadora = () => {

    const logicaCalculadora = () => {
        let numero1 = document.getElementById("numero1").value;
        let numero2 = document.getElementById("numero2").value;
        let operacion = document.getElementById("operacion").value;
        let resultado = 0;

        if (operacion === "+") {
            resultado = parseInt(numero1) + parseInt(numero2);
        } else if (operacion === "-") {
            resultado = parseInt(numero1) - parseInt(numero2);
        } else if (operacion === "*") {
            resultado = parseInt(numero1) * parseInt(numero2);
        } else if (operacion === "/") {
            resultado = parseInt(numero1) / parseInt(numero2);
        }

        document.getElementById("resultado").value = resultado;
    }    

    const operario = 518;
    const operarioGeneral = 538;
    const operarioCalificado = 557;
    const medioOficial = 583;
    const oficial = 636;
    const oficialGeneral = 674;
    const oficialCalificado = 705;
    
  return (
    <div>
       

        <form  className='container form formulario'>
            <div>

                <label className='letrasForm container'  >Horas trabajadas</label>
                <input type="number" required id="numero1" placeholder="Ingresar horas trabajadas" className='form-control container'   />
                
            </div>

            <div>
                <label className='letrasForm container' >Precio por hora(seleccionar Categoria)</label>
                <select name="" id="numero2" className='container select' >
                    <option value={operario} selected>Operario</option>    
                    <option value={operarioGeneral}>Operario General</option>
                    <option value={operarioCalificado}>Operario Calificado</option>
                    <option value={medioOficial}>Medio oficial</option>
                    <option value={oficial}>Oficial</option>
                    <option value={oficialGeneral}>Oficial General</option>
                    <option value={oficialCalificado}>Oficial Calificado</option>
                </select>
            
            </div>

            <input type="hidden" id='operacion' value="*"/>

            <input type="button" value="Calcular" onClick={logicaCalculadora} className='resultado container'  />
            <hr />
            <input type="text" id="resultado" className='container result'/>

        </form>


      
        
    </div>
  )
}

export default Calculadora