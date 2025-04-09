
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduitById, unselectProduit } from "../store/produitsSucreesSlice";
import { Spinner, Alert } from "react-bootstrap";
import ProduitCardDetail from "../components/ProduitCardDetail";

function ProduitDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const produit = useSelector((state) => state.produitsSucrees.selected);
  const loading = useSelector((state) => state.produitsSucrees.loading);
  const error = useSelector((state) => state.produitsSucrees.error);

  useEffect(() => {
    dispatch(fetchProduitById(id));
    return () => {
      dispatch(unselectProduit());
    };
  }, [dispatch, id]);

  if (loading) return <Spinner animation="border" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (!produit) return <Alert variant="danger">Produit non trouvé ou non sélectionné</Alert>;

  return <ProduitCardDetail produit={produit} />; 
}

export default ProduitDetails;
