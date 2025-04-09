import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchProduits } from "../store/produitsTraditionnelSlice";
import ProduitCard from '../components/ProduitCard';

function ProduitsTraditionnel() {
  const dispatch = useDispatch();

 
  const produitsList = useSelector((state) => state.produitsTraditionnel?.list || []);
  const produitsLoading = useSelector((state) => state.produitsTraditionnel?.loading);
  const produitsError = useSelector((state) => state.produitsTraditionnel?.error);


  useEffect(() => {
    dispatch(fetchProduits());
  }, [dispatch]);


  if (produitsLoading) {
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner animation="border" />
      </div>
    );
  }


  if (produitsError) {
    return (
      <Alert variant="danger" className="mt-5 text-center">
        {produitsError}
      </Alert>
    );
  }


  return (
    <div className="container mt-4">
      <div className="row">
        {produitsList.length > 0 ? (
          produitsList.map((produit) => (
            <ProduitCard key={produit.id} produit={produit} />
          ))
        ) : (
          <Alert variant="info" className="text-center w-100">
            Aucun produit trouvé.
          </Alert>
        )}
      </div>
    </div>
  );
}

export default ProduitsTraditionnel;
