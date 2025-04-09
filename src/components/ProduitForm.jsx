import { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; 

function ProduitForm({ initialData, onSubmit, produit }) {
  const [produitName, setProduitName] = useState("");
  const [produitCategory, setProduitCategory] = useState("");
  const [produitPrice, setProduitPrice] = useState("");
  const [produitQuantite, setProduitQuantite] = useState("");

  const navigate = useNavigate(); 


  useEffect(() => {
    if (initialData) {
      setProduitName(initialData.name || "");
      setProduitCategory(initialData.category || "");
      setProduitPrice(initialData.price || "");
      setProduitQuantite(initialData.quantite || "");
    }
  }, [initialData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedProduit = {
      name: produitName,
      category: produitCategory,
      price: Number(produitPrice),
      quantite: Number(produitQuantite),
    };
    onSubmit(updatedProduit); 

 
    if (produit.type === "sucré") {
      navigate("/admin/controlsucrees"); 
    } else if (produit.type === "traditionnel") {
      navigate("/admin/controltraditionnel"); 
    } else if (produit.type === "gourmet") {
      navigate("/admin/controlgourment"); 
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label htmlFor="name">Nom du produit</Form.Label>
        <Form.Control
          id="name"
          placeholder="Nom du produit"
          required
          value={produitName}
          onChange={(e) => setProduitName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="category">Catégorie</Form.Label>
        <Form.Control
          id="category"
          placeholder="Catégorie"
          required
          value={produitCategory}
          onChange={(e) => setProduitCategory(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="price">Prix</Form.Label>
        <Form.Control
          id="price"
          type="number"
          placeholder="Prix"
          required
          value={produitPrice}
          onChange={(e) => setProduitPrice(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label htmlFor="quantite">Quantité</Form.Label>
        <Form.Control
          id="quantite"
          type="number"
          placeholder="Quantité"
          required
          value={produitQuantite}
          onChange={(e) => setProduitQuantite(e.target.value)}
        />
      </Form.Group>

      <Button type="submit" className="d-block mx-auto">
        Mettre à jour
      </Button>
    </Form>
  );
}

export default ProduitForm;
