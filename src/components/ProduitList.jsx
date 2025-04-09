import { useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProduitDeleteModal from "./ProduitDeleteModal";

function ProduitList({ produits }) {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduit, setSelectedProduit] = useState(null);

  const handleShowDeleteModal = (produit) => {
    setSelectedProduit(produit);  
    setShowDeleteModal(true);      
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);    
    setSelectedProduit(null);      
  };

  return (
    <>
      <ListGroup>
        {produits.map((produit) => (
          <ListGroup.Item
            key={produit.id}
            className="d-flex justify-content-between align-items-center"
          >
            
            <span className="fw-bold flex-grow-1">{produit.name}</span>

            
            <div
              className={`fw-bold d-flex align-items-center justify-content-center ${produit.quantite > 0 ? 'text-success' : 'text-danger'}`}
              style={{ minWidth: "150px", height: "100%" }}
            >
              {produit.quantite > 0 ? 'Disponible' : 'Non disponible'}
            </div>

            
            <div className="d-flex gap-2">
              
              <Button
                variant="info"
                as={Link}
                to={
                  produit.type === "sucré"
                    ? `/admin/controlsucrees/${produit.id}`
                    : produit.type === "traditionnel"
                    ? `/admin/controltraditionnel/${produit.id}`
                    : `/admin/controlgourment/${produit.id}`
                }
                
                aria-label={`Voir ${produit.name}`}
              >
                <i className="bi bi-eye"></i>
              </Button>

              
              <Button
                variant="warning"
                as={Link}
                to={
                  produit.type === "sucré"
                    ? `/admin/controlsucrees/update/${produit.id}`
                    : produit.type === "traditionnel"
                    ? `/admin/controltraditionnel/update/${produit.id}`
                    : `/admin/controlgourment/update/${produit.id}`
                }
                aria-label={`Modifier ${produit.name}`}
              >
                <i className="bi bi-pencil-square"></i>
              </Button>

              
              <Button
                variant="danger"
                onClick={() => handleShowDeleteModal(produit)}  
                aria-label={`Supprimer ${produit.name}`}
              >
                <i className="bi bi-trash"></i>
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      
      {selectedProduit && (
        <ProduitDeleteModal
          show={showDeleteModal}
          onHide={handleCloseDeleteModal} 
          produit={selectedProduit}
        />
      )}
    </>
  );
}

export default ProduitList;
