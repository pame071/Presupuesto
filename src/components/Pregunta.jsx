import React, { useState }from 'react';
import Message from './Message';

import PropTypes from 'prop-types';


const Pregunta = ({guardarPresupuesto, guardarRestante, actualizar}) => {

    //definir el state
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ error, guardarError ] = useState(false);
    
    //Funcion que captura el presupuesto
    const capturaPresupuesto = e => {
        //capturo el valor y lo convierto a numero
        guardarCantidad(parseInt( e.target.value, 10 ));
    }
    
    //Submit validad presupuesto
    const submit = e => {
        e.preventDefault();
    
        // Validar 
        if(cantidad < 1 || isNaN(cantidad)){
            //isNaN es un metodo para revisar si es un numero
            guardarError(true);
            return;
        }

        
        // si se pasa de la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizar(false);
        return;
    }

    return ( 
        <>
            <h2>Coloca tu presupuesto</h2>
            { error ? <Message message="Este es un Error"/> : null }
            <form
                onSubmit={submit}
            >
                <input
                    type="number"
                    className=""
                    placeholder="Colocar presupuesto"
                    onChange={capturaPresupuesto}
                />
                <input 
                    type="submit"
                    className="btn btn-primary"
                    value="DEFINE TU PRESUPUESTO"
                />
            </form>
        </>
    );
}

Pregunta.prototype = {
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarPresupuesto: PropTypes.func.isRequired,
    actualizar: PropTypes.func.isRequired
}
 
export default Pregunta;