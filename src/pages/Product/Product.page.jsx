import { useParams } from 'react-router-dom';
import './Product.page.scss';

export default function Product(props) {
  let { id, vistoEnStore, enOferta } = props.history.location.state;

  return (
    <div className="Product">
      <div><strong>Aquí irán los datos del producto:</strong> {id}</div>
      <div><strong>Visto en la tienda:</strong> {(vistoEnStore) ? 'SI' : 'NO'}</div>
      <div><strong>En oferta:</strong> {(enOferta) ? 'SI' : 'NO'}</div>
    </div>
  );
}