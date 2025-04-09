import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../store/cartSlice';
import { FaTrash } from 'react-icons/fa';

function CartModal({ show, handleClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);


  if (cartItems.length === 0) {
    return null; 
  }

  
  const groupedByCategory = cartItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    const existingItem = acc[item.category].find((prod) => prod.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc[item.category].push({ ...item, quantity: 1 });
    }
    return acc;
  }, {});

 
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>🛒 Mon Panier</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          Object.keys(groupedByCategory).map((category) => (
            <div key={category}>
              <h5>{category}</h5>
              <ul className="list-unstyled">
                {groupedByCategory[category].map((item) => (
                  <li key={item.id} className="d-flex justify-content-between align-items-center mb-2"> 
                    <span>
                      {item.name} - {item.quantity} x ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <Button variant="danger" size="sm" onClick={() => dispatch(removeFromCart(item.id))}>
                      <FaTrash /> 
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))
        )}
        <hr />
        <h5>Total: ${totalPrice}</h5>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Fermer</Button>
        <Button variant="primary">Commander</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
