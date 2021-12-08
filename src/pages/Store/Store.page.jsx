import './Store.page.scss';
import { useHistory } from 'react-router-dom';

export default function Store() {
    const history = useHistory();

    let abrirProducto = () => {
        let id = Math.floor(Math.random() * 20 + 1);

        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        history.push({
            pathname: '/product/' + id,
            state: {
                id: id,
                vistoEnStore: true,
                enOferta: false
            }
        })
    }


    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>
            <button className="Product-link" onClick={abrirProducto}>
                Ir al producto
            </button>
        </div>
    )
}