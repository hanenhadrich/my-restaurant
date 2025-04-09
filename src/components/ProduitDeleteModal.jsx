import React, { useState } from "react";
import { Modal, Button, Spinner, Alert } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateProduit as updateProduitSucree } from "../store/produitsSucreesSlice"; 
import { updateProduit as updateProduitTraditionnel } from "../store/produitsTraditionnelSlice"; 
import { updateProduit as updateProduitGourmet } from "../store/produitsGourmetSlice";

function ProduitDeleteModal({ show, onHide, produit }) {
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null); 
  const dispatch = useDispatch();

  const handleResetQuantity = async () => {
    try {
      setLoading(true); 
      setError(null); 

      const updatedProduit = {
        ...produit,
        quantite: 0,  
      };

      
      if (produit.type === "sucré") {
        await dispatch(updateProduitSucree({ produitId: produit.id, newData: updatedProduit })).unwrap();
      } else if (produit.type === "traditionnel") {
        await dispatch(updateProduitTraditionnel({ produitId: produit.id, newData: updatedProduit })).unwrap();
      } else if (produit.type === "gourmet") {
        await dispatch(updateProduitGourmet({ produitId: produit.id, newData: updatedProduit })).unwrap();
      } else {
        throw new Error("Produit type inconnu");
      }

      onHide(); 
    } catch (err) {
      setError("Erreur lors de la réinitialisation de la quantité. Veuillez réessayer.");
      console.error("Erreur de mise à jour : ", err);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Réinitialiser la quantité du produit</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Êtes-vous sûr de vouloir réinitialiser la quantité de <strong>{produit.name}</strong> à 0 ?
        
        {error && <Alert variant="danger" className="mt-3">{error}</Alert>} 
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Annuler"}
        </Button>
        <Button variant="warning" onClick={handleResetQuantity} disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : "Réinitialiser"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProduitDeleteModal;
