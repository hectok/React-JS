import { useParams } from 'react-router-dom';
import './Product.page.scss';

export default function Product(props) {
  let { title, image, price, category } = props.history.location.state;

  return (
    <div className="Product">
      <img className="Product-image" src={image} alt={title}/>
      <div className="Product-container">
        <div className="Product-title">{title}</div>
        <div className="Product-price">{price}</div>
        <div className="Product-category">{category}</div>
      </div>
    </div>
  );
}