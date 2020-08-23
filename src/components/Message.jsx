import React from 'react'

import PropTypes from 'prop-types';


const Menssage = ({message}) => {
    return ( 
        <p className="alert error alert-danger">
            {message}
        </p>

     );
}

Menssage.prototype = {
    message: PropTypes.string.isRequired
}
 
export default Menssage;