import React, { useState, useEffect }from 'react';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Control from './components/Control';

function App() {

  //definir state
  const [ presupuesto, guardarPresupuesto ] = useState(0);
  const [ restante, guardarRestante ] = useState(0);
  const [ mostrar, actualizar ] = useState(true);
  const [ gastos, guardarGastos ] = useState([]);
  const [ gasto, guardarGasto ] = useState({});
  const [ craergasto, guardarCrearGasto] = useState(false)

  //UseEffect que actualiza el restante
  useEffect(() => {
    if(craergasto){

      //agrega el nuevo presupuesto
      guardarGastos([
        // los 3 putos es para que conseve el valor anterior del objeto
        ...gastos,
        gasto
      ]);

      //resta del presupuesto
      const presupuestoRestante = restante - gasto.cantidad;
      guardarRestante(presupuestoRestante);

      

      guardarCrearGasto(false);
    }

  }, [gasto, craergasto, gastos, restante])


  return (
    <div className="container">
      <header>
        <h1>Gastos Semanal</h1>
      </header>

      <div className="contenido-principal contenido">
          {
            mostrar ?
              <Pregunta 
                guardarPresupuesto={guardarPresupuesto}
                guardarRestante={guardarRestante}
                actualizar={actualizar}
              />
            :
           
              <div className="grid">
                  <div className="column">
                    <Formulario 
                      guardarGasto={guardarGasto}
                      guardarCrearGasto={guardarCrearGasto}
                    />
                  </div>
                  <div className="column">
                    <Listado 
                      gastos={gastos}
                    />

                    <Control
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
              </div>
          }
      </div>
    </div>
  );
}

export default App;
