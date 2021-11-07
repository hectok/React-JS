import React, { Component } from "react";
import PropTypes from 'prop-types';

const Carga = (props) => {
    
    return(
        <ul>
            <li>Carga rápida en estación de repostaje: {props.carga}</li>
        </ul>
    )   
}

Carga.propTypes = {
    carga: PropTypes.string.isRequired
}

export default Carga;