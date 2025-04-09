import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduits } from "../store/produitsGourmetSlice";
import ProduitList from "../components/ProduitList";
import { Alert, Spinner } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../css/index.css";
function ControlGourmet() {
    const dispatch = useDispatch();
    
    const produitsList = useSelector((state) => state.produitsGourmet?.list || []); 
    const produitsLoading = useSelector((state) => state.produitsGourmet?.loading);
    const produitsError = useSelector((state) => state.produitsGourmet?.error);

    useEffect(() => {
        
        dispatch(fetchProduits());
    }, [dispatch]);

    return (
        <div className="d-flex vh-100">
            <Sidebar />
            <div className="flex-grow-1 p-4">
                {produitsLoading ? (
                    <Spinner animation="border" />
                ) : produitsError ? (
                    <Alert variant="danger">{produitsError}</Alert>
                ) : produitsList.length > 0 ? (
                    <ProduitList className="produit-list" produits={produitsList} />
                ) : (
                    <Alert variant="info">Aucun produit disponible.</Alert>
                )}
            </div>
        </div>
    );
}

export default ControlGourmet;
