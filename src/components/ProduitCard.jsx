import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { Button } from 'react-bootstrap';
import "../css/index.css";

function ProduitCard({ produit }) {
  const dispatch = useDispatch();

  const { name, category, id, price, image } = produit || {};

  const formattedPrice = price && !isNaN(price) ? price.toFixed(2) : 'N/A';
  const productName = name || 'Untitled Product';
  const productCategory = category || 'Category Not Available';

  const getImage = () => {
    const width = window.innerWidth;
    if (width <= 576) {
      return image?.mobile || image?.thumbnail;
    } else if (width <= 992) {
      return image?.tablet || image?.thumbnail;
    } else {
      return image?.desktop || image?.thumbnail;
    }
  };

  const productImage = getImage();

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 p-3">
      <div className="card p-3 h-100">
        <img src={productImage} className="card-img-top product-image" alt={productName} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{productName}</h5>
          <div className="d-flex justify-content-between">
            <p className="card-text">{productCategory}</p>
            <p className="card-text">
              {formattedPrice === 'N/A' ? 'Price Not Available' : `$${formattedPrice}`}
            </p>
          </div>
          <div className="d-flex justify-content-center mt-auto">
            <Button onClick={() => dispatch(addToCart(produit))} className="btn btn-primary">
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitCard;
