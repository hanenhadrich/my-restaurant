import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduitById, unselectProduit, updateProduit } from "../store/produitsSucreesSlice";
import { Spinner, Alert } from "react-bootstrap";
import ProduitForm from "../components/ProduitForm"; 

function UpdateProduit() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const produit = useSelector((state) => state.produitsSucrees.selected);
  const loading = useSelector((state) => state.produitsSucrees.loading);
  const error = useSelector((state) => state.produitsSucrees.error);

  useEffect(() => {
    dispatch(fetchProduitById(id));
    return () => dispatch(unselectProduit());
  }, [dispatch, id]);

  const handleUpdate = (updatedProduit) => {
    dispatch(updateProduit({ produitId: Number(id), newData: updatedProduit }))
      .unwrap()
      .then(() => {
        // Redirect based on product type after update
        if (produit?.type === "sucré") {
          navigate("/admin/controlsucrees");
        } else if (produit?.type === "traditionnel") {
          navigate("/admin/controltraditionnel");
        } else if (produit?.type === "gourmet") {
          navigate("/admin/controlgourment");
        } else {
          navigate("/admin/controlsucrees"); // Default to controlsucrees if no type is found
        }
      })
      .catch((error) => {
        console.error("❌ Erreur lors de la mise à jour :", error);
      });
  };

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!produit) return <Alert variant="danger">Produit non trouvé</Alert>;

  return <ProduitForm initialData={produit} onSubmit={handleUpdate} />;
}

export default UpdateProduit;
