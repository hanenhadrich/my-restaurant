import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduits } from "../store/produitsTraditionnelSlice";
import ProduitList from "../components/ProduitList";
import { Alert, Spinner } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../css/index.css";
function ControlTraditionnel() {
    const dispatch = useDispatch();
    
    const produitsList = useSelector((state) => state.produitsTraditionnel?.list || []); 
    const produitsLoading = useSelector((state) => state.produitsTraditionnel?.loading);
    const produitsError = useSelector((state) => state.produitsTraditionnel?.error);

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

export default ControlTraditionnel;
