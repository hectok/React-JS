import './Store.page.scss';
import * as React from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'    
import { loadProducts } from '../../redux/actions/productos';

export const Component = withRouter(({ history, location }) =>{})
class Store extends React.Component {
    componentDidMount() {
        this.props.loadProducts();
    };
    render(){
        const { history } = this.props
        let abrirProducto = (product) => {
            // Nos devuelve un producto con ID entre 1 y 20 (Ambos incluidos).
            history.push({
                pathname: '/product/' + product.id,
                state: {
                    id: product.id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    category: product.category
                }
            })
        }
        if (this.props.loading) {
            return <div>Loading</div>
        }
        if (this.props.error) {
            return <div style={{color: 'red'}}>ERROR: {this.props.error}</div>
        }
        return (
            <div className="Store">
                <h1>Bienvenido a mi tienda</h1>
                <div className="wrapper">
                    <h1>Lista de productos</h1>
                    <ul className="productList">
                        {this.props.data.map(product => (
                            <li className="productElement" key={product.id} onClick={() => abrirProducto(product)}>
                                <img src={product.image} alt={product.title}/>
                                <h3>{product.title}</h3>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    data: state.productos.data,
    loading: state.productos.loading,
    error: state.productos.error,
});

const mapDispatchToProps = {
    loadProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Store);