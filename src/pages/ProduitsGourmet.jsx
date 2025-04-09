import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Spinner } from 'react-bootstrap';
import { useEffect } from 'react';
import { fetchProduits } from '../store/produitsGourmetSlice';
import ProduitCard from '../components/ProduitCard';

function ProduitsGourmet() {
  const dispatch = useDispatch();

  const produitsList = useSelector((state) => state.produitsGourmet?.list || []);
  const produitsLoading = useSelector((state) => state.produitsGourmet?.loading);
  const produitsError = useSelector((state) => state.produitsGourmet?.error);
  const memoizedProduitsList = useMemo(() => produitsList, [produitsList]);

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
        {memoizedProduitsList.length > 0 ? (
          memoizedProduitsList.map((produit) => (
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

export default ProduitsGourmet;
