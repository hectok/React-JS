import './Product.page.scss';
import { useSelector } from 'react-redux';
import { memo } from 'react';

function Product(props) {
  let { title, image, price, category, description } = props.history.location.state;
  const styleMode = useSelector(state => state).styleMode;

  return (
      <div className={["container",styleMode ? 'darkMode' : 'lightMode'].join(' ')}>
        <div className="row dd-flex justify-content-center">
          <div className="col-md-8">
            <div className="card px-3">
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex flex-row align-items-center"> <span className="fw-bold ms-1 fs-5">{category}</span> </div>
                  <h1 className="fs-1 ms-1 mt-3">{title}</h1>
                  <div className="ms-1"> <span>{description}</span> </div>
                  <div> <button className="button"> <span>{price}€</span> <i className="ms-2 fa fa-long-arrow-right"></i> </button> </div>
                </div>
                <div className="col-md-6">
                  <div className="product-image"> <img src={image} alt={title}/> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};
export default memo(Product);