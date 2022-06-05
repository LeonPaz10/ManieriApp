import React from 'react'


const Reloj = () => {
    function generarReloj() {
        /* Capturamos la hora actual */
        let timeNow = new Date();
    
        let hora = timeNow.getHours().toString().length<2 ? "0"+timeNow.getHours() : timeNow.getHours();
        let minuto = timeNow.getMinutes().toString().length<2 ? "0"+timeNow.getMinutes() : timeNow.getMinutes();
        let segundo = timeNow.getSeconds().toString().length<2 ? "0"+timeNow.getSeconds() : timeNow.getSeconds();
    
        let mainTime = ` ${hora}:${minuto}:${segundo}`;
    
        document.getElementById("reloj").innerHTML = mainTime;


    
    }
    setInterval(() => {
        generarReloj();
    }, 1000);

    // Generamos la fecha actual

    const fecha = new Date();
    const dia = fecha.getDay();
    const mes = fecha.getMonth()+1;
    const anio = fecha.getFullYear();
    const diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];

    let diaActual = diaSemana[dia];
    let completa = `${diaActual}, ${fecha.getDate()}/${mes}/${anio}`;
       

    
    



  return (
    <div>
        <h1 className='main_time container' id="reloj"> </h1>
        <h3 className='main_date container'>{completa}</h3>
        <hr/>
    </div>
  )
}

export default Reloj



