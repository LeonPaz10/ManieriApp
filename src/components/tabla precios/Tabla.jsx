import React from 'react'

const Tabla = () => {
  return (
    <div> 
            <table class="table table-bordered border-dark container mt-3">
                    <thead>
                        <tr>
                        <th scope="col" className='categoria'>CATEGORIA</th>
                        <th scope="col" className='totalHora'>TOTAL$XHORA</th>
                       
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <th scope="row">Operario</th>
                        <td>$517.65</td>
                        </tr>

                        <tr>
                        <th scope="row">Operario General</th>
                        <td>$537.93</td>
                        </tr>

                        <tr>
                        <th scope="row">Operario Calificado</th>
                        <td colspan="2">$557.49</td>
                        </tr>

                        <tr>
                        <th scope="row">Medio oficial</th>
                        <td colspan="2">$583.10</td>
                        </tr>

                        <tr>
                        <th scope="row">Oficial</th>
                        <td colspan="2">$635.89</td>
                        </tr>

                        <tr>
                        <th scope="row">Oficial General</th>
                        <td colspan="2">$673.76</td>
                        </tr>

                        <tr>
                        <th scope="row">Oficial Calificado</th>
                        <td colspan="2">$705.18</td>
                        </tr>
                        

                    </tbody>
            </table>
    </div>
  )
}

export default Tabla