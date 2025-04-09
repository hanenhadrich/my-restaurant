
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduitById, unselectProduit } from "../store/produitsTraditionnelSlice";
import { Spinner, Alert } from "react-bootstrap";
import ProduitCardDetail from "../components/ProduitCardDetail";

function ProduitTraditionnelDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const produit = useSelector((state) => state.produitsTraditionnel.selected);
  const loading = useSelector((state) => state.produitsTraditionnel.loading);
  const error = useSelector((state) => state.produitsTraditionnel.error);

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

export default ProduitTraditionnelDetail;
