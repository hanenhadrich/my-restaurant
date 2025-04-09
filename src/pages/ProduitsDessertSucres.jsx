import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchProduits } from '../store/produitsSucreesSlice';
import ProduitCard from '../components/ProduitCard';

function ProduitsDessertSucres() {
  const dispatch = useDispatch();
  const produitsList = useSelector((state) => state.produitsSucrees?.list || []); 
  const produitsLoading = useSelector((state) => state.produitsSucrees?.loading);
  const produitsError = useSelector((state) => state.produitsSucrees?.error);

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
      <Alert variant="danger" className="mt-5">
        {produitsError}
      </Alert>
    );
  }

  return (
    <div className="row">
      {produitsList.length > 0 ? (
        produitsList.map((produit) => (
          <ProduitCard key={produit.id} produit={produit} />
        ))
      ) : (
        <p className="text-center">Aucun produit trouvé.</p>
      )}
    </div>
  );
}

export default ProduitsDessertSucres;
