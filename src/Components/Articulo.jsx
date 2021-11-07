import React, { Component } from "react";
import PilasConvencionales from "./Pilas";
import BateriasLitio from "./Bateria";
import Hidrogeno from "./Hidrogeno";
import Likes from "./Likes";
import Bitcoin from "./BItcoin";

class Articulos extends Component{
    render() {
        return(
            <div>
                <PilasConvencionales/>
                <BateriasLitio/>
                <Hidrogeno/>
                <Likes/>
                <Bitcoin/>
            </div>
        )
    }
}

export default Articulos;