import React from "react";
import Autonomia from "./Autonomia";
import Carga from "./Carga";

class Hidrogeno extends React.PureComponent{
    render() {
        const styles = {
            height:250,
            width:250,
        }

        return (
            <div>
                <h3>Baterías de Hidrógeno</h3>
                <p>Las baterías de Hidrógeno son una alternativa muy interesante a las baterías eléctricas</p>
                <img style= { styles }
                    src='https://www.magnuscmd.com/wp-content/uploads/2019/06/Featured.jpg'
                    alt='Baterías Hidrógeno'
                />
                <Autonomia km='500km' />
                <Carga carga='30min' />
            </div>
        )
    }
}

export default Hidrogeno;