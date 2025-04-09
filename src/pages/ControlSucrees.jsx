import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduits } from "../store/produitsSucreesSlice";
import ProduitList from "../components/ProduitList";
import { Alert, Spinner } from "react-bootstrap";
import Sidebar from "../components/Sidebar";
import "../css/index.css";

function ControlSucrees() {
    const dispatch = useDispatch();
    
    const produitsList = useSelector((state) => state.produitsSucrees?.list || []); 
    const produitsLoading = useSelector((state) => state.produitsSucrees?.loading);
    const produitsError = useSelector((state) => state.produitsSucrees?.error);

    useEffect(() => {
        dispatch(fetchProduits());  
    }, [dispatch]);

    

    return (
        <div className="d-flex vh-100">
            <Sidebar />
            <div className="flex-grow-1 p-4">
                {produitsLoading ? (
                    <div className="text-center mt-5">
                        <Spinner animation="border" />
                        <p>Chargement des produits...</p>
                    </div>
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

export default ControlSucrees;
