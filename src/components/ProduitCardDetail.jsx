// ProduitCard.jsx
import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProduitCardDetail({ produit }) {
  return (
    <Card className="shadow-lg p-4">
      <Card.Body>
        <Card.Title className="text-center">{produit.name}</Card.Title>
        <Card.Text>
          <strong>Catégorie:</strong> {produit.category}
        </Card.Text>
        <Card.Text>
          <strong>Prix:</strong> {produit.price} €
        </Card.Text>
        <Card.Text>
          <strong>Disponibilité:</strong>
          <span
            className={produit.quantite > 0 ? "text-success" : "text-danger"}
          >
            {produit.quantite > 0 ? "Disponible" : "Non disponible"}
          </span>
        </Card.Text>
        <div className="text-center">
          <Button variant="primary" className="mx-auto" as={Link}  to={
                  produit.type === "sucré"
                    ? `/admin/controlsucrees`
                    : produit.type === "traditionnel"
                    ? `/admin/controltraditionnel`
                    : `/admin/controlgourment`
                }>
            Retour à la liste
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProduitCardDetail;
