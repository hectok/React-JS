import React, { Component } from "react";
import PropTypes from 'prop-types';

class Autonomia extends Component {
    render(){
        console.log(this.props.km);
        return(
            <ul>
                <li>Autonomia {this.props.km}</li>
            </ul>
        )
    }   
}

Autonomia.propTypes = {
    km: PropTypes.string.isRequired
}

export default Autonomia;