import React from "react";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";
import "../css/index.css";
function Sidebar() {
    const location = useLocation(); 

    return ( 
        <Nav className="d-flex flex-column p-3 bg-dark text-white vh-100" style={{ width: "250px" }}>
            <h4 className="text-center mb-4">Admin Panel</h4>
            <Nav.Link 
                as={Link} 
                to="/admin/dashboard" 
                className={`text-white ${location.pathname === '/admin/dashboard' ? 'active' : ''}`}
            >
                Dashboard
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/admin/controlgourment" 
                className={`text-white ${location.pathname === '/admin/controlgourment' ? 'active' : ''}`}
            >
                Repas Gourmet
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/admin/controltraditionnel"  
                className={`text-white ${location.pathname === '/admin/controltraditionnel' ? 'active' : ''}`}
            >
                Plat Traditionnel
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/admin/controlsucrees" 
                className={`text-white ${location.pathname === '/admin/controlsucrees' ? 'active' : ''}`}
            >
                Desserts Sucrés
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to="/home" 
                className={`text-white ${location.pathname === '/home' ? 'active' : ''}`}
            >
                Retour au site
            </Nav.Link>
        </Nav>
    );
}

export default Sidebar;
