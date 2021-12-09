import './Store.page.scss';
import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Store() {
    const history = useHistory();
    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    useEffect(() => {
        if(!products){
            fetchProducts()
        }
    }, []);

    let abrirProducto = (index) => {

        // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
        history.push({
            pathname: '/product/' +index,
            state: {
                id: index,
                vistoEnStore: true,
                enOferta: false
            }
        })
    }

    return (
        <div className="Store">
            <h1>Bienvenido a mi tienda</h1>
            <div className="wrapper">
                <h1>Lista de productos</h1>
                <ul>
                    {products && products.map(product => (
                        <li key={product.id}>
                            <h3>{product.title}</h3>
                            <div>
                                Image: {product.image}
                            </div>
                            <button onClick={abrirProducto(product.id)}>Ir al producto</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}