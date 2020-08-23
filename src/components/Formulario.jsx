import React, { useState }from 'react';
import Message from './Message';
import shortid from 'shortid'; // npm i shortid

import PropTypes from 'prop-types';

const Formulario = ({guardarGasto, guardarCrearGasto}) => {

    //states 
    const [ nombre, guardarNombre ] = useState('');
    const [ cantidad, guardarCantidad ] = useState(0);
    const [ message, guardarMessage ] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();

        // validar 
        if(cantidad < 1 || isNaN(cantidad) || nombre.trim() === ""){
            guardarMessage(true);
            return;
        }

        guardarMessage(false);

        // construir gasto
        const Array_gastos = {
            id: shortid.generate(),
            nombre,
            cantidad,
        }

        // pasar el gasto al componente principal
        guardarGasto(Array_gastos);
        guardarCrearGasto(true);

        // resetaer form
        guardarNombre("");
        guardarCantidad(0);
    }

    return (
        <form
            onSubmit={agregarGasto}
        >

            {
                message ? <Message message="Ambos campos son ofligatorios o Presupeusto Incorrecto"/> : null
            }

            <div className="campo">
                <label>Descripción</label>
                <input 
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre}
                    onChange={e => guardarNombre(e.target.value) }
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 15000"
                    value={cantidad}
                    onChange={e => guardarCantidad( parseInt(e.target.value) )}
                />
            </div>

            <input 
                type="submit"
                className="btn btn-primary"
                value="Agregar Gasto"
            />
        </form>

     );
}

Formulario.prototype = {
    guardarGasto: PropTypes.func.isRequired,
    guardarCrearGasto: PropTypes.func.isRequired
}
 
export default Formulario;