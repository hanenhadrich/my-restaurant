import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchProduitById, unselectProduit, updateProduit } from "../store/produitsGourmetSlice"; // Corrected import
import { Spinner, Alert } from "react-bootstrap";
import ProduitForm from "../components/ProduitForm"; 

function UpdateProduitGourmet() {
  const { id } = useParams(); // Get the product ID from the URL
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const produit = useSelector((state) => state.produitsGourmet.selected); // Selected product from state
  const loading = useSelector((state) => state.produitsGourmet.loading); // Loading state
  const error = useSelector((state) => state.produitsGourmet.error); // Error state

  // Fetch the product when the component is mounted
  useEffect(() => {
    dispatch(fetchProduitById(id)); // Fetch product by ID
    return () => dispatch(unselectProduit()); // Unselect product on cleanup
  }, [dispatch, id]); // Dependencies: dispatch, id

  // Handle the update process
  const handleUpdate = (updatedProduit) => {
    dispatch(updateProduit({ produitId: Number(id), newData: updatedProduit })) // Dispatch the update action
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
        console.error("❌ Erreur lors de la mise à jour :", error); // Log error if update fails
      });
  };

  // Show loading spinner when data is loading
  if (loading) return <Spinner animation="border" />;

  // Show error alert if there's an error
  if (error) return <Alert variant="danger">{error}</Alert>;

  // Show error if no product is found
  if (!produit) return <Alert variant="danger">Produit non trouvé</Alert>;

  // Render the form if everything is fine
  return <ProduitForm initialData={produit} onSubmit={handleUpdate} />;
}

export default UpdateProduitGourmet;
