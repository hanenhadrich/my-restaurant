import React, { useState } from 'react';
import { Navbar, Container, Nav, Dropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUtensils } from 'react-icons/fa'; 
import { useSelector } from 'react-redux';
import CartModal from './CartModal'; 
import "../css/AppNavbar.css";

function AppNavbar() {
  const cartCount = useSelector((state) => state.cart.count);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container fluid>
        <Navbar.Brand as={NavLink} to="/home" className="d-flex align-items-center" style={{ marginLeft: '20px' }}>
          <FaUtensils className="me-2 navbar-icon" />
          My Restaurant
        </Navbar.Brand>

          <Nav className="d-flex align-items-center" style={{ marginRight: '20px' }}>
            <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
           
            <Dropdown>
              <Dropdown.Toggle variant="dark" id="dropdown-produits">
                Produits
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/produitsGourmet">Repas Gourmet</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/produitsTraditionnel">Plat Traditionnel</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/produitsdessertsucres">Desserts Sucrés</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Nav.Link as={NavLink} to="/admin/dashboard">Admin</Nav.Link>

            <Nav.Link className="position-relative" onClick={() => setShowModal(true)} aria-label="Open Cart">
              <FaShoppingCart className="me-2 navbar-icon" />
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <CartModal show={showModal} handleClose={() => setShowModal(false)} />
    </>
  );
}

export default AppNavbar;
