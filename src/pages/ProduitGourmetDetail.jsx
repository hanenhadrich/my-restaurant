
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduitById, unselectProduit } from "../store/produitsGourmetSlice";
import { Spinner, Alert } from "react-bootstrap";
import ProduitCardDetail from "../components/ProduitCardDetail";

function ProduitGourmetDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const produit = useSelector((state) => state.produitsGourmet.selected);
  const loading = useSelector((state) => state.produitsGourmet.loading);
  const error = useSelector((state) => state.produitsGourmet.error);

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

export default ProduitGourmetDetail;
