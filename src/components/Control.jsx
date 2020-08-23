import React from 'react';
import { revisarPresupuesto } from '../helpers';

import PropTypes from 'prop-types';

const Control = ({presupuesto, restante}) => {
    return ( 
        <>
            <div className="alert alert-primary">
                Presupuesto: $ {presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto, restante)}>
                Restante: $ {restante}
            </div>
        </>
     );
}
 
Control.propTypes = {
    presupuesto: PropTypes.number.isRequired,
    restante: PropTypes.number.isRequired 
} 
export default Control;