import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import NotFound from './pages/NotFound';
import Container from 'react-bootstrap/Container';
import Home from './pages/Home';
import ProduitDetails from './pages/ProduitDetail';
import UpdateProduit from './pages/UpdateProduit';
import ProduitsDessertSucres from './pages/ProduitsDessertSucres';
import ProduitsGourmet from './pages/ProduitsGourmet';
import ProduitsTraditionnel from './pages/ProduitsTraditionnel';
import ControlSucrees from './pages/ControlSucrees';
import ControlGourment from './pages/ControlGourment';
import ControlTraditionnel from './pages/ControlTraditionnel';
import ProduitGourmetDetails from './pages/ProduitGourmetDetail';
import ProduitTraditionnelDetail from './pages/ProduitTraditionnelDetail';
import UpdateProduitGourmet from './pages/UpdateProduitGourment';
import UpdateProduitTraditionnel from './pages/UpdateProduitTraditionnel';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <AppNavbar />
      <Container className="mt-5">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Produits Cart */}
          <Route path="/produitsGourmet" element={<ProduitsGourmet />} />
          <Route path="/produitsTraditionnel" element={<ProduitsTraditionnel />} />
          <Route path="/produitsdessertsucres" element={<ProduitsDessertSucres />} />
          {/* Détails produit */}
          <Route path="/admin/controlsucrees/:id" element={<ProduitDetails />} />
          <Route path="/admin/controlgourment/:id" element={<ProduitGourmetDetails/>} />
          <Route path="/admin/controltraditionnel/:id" element={<ProduitTraditionnelDetail/>} />
           {/* Update produit */}
          <Route path="/admin/controlsucrees/update/:id" element={<UpdateProduit />} />
          <Route path="/admin/controltraditionnel/update/:id" element={<UpdateProduitTraditionnel />} />
          <Route path="/admin/controlgourment/update/:id" element={<UpdateProduitGourmet />} />
          {/* Admin control */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/controlsucrees" element={<ControlSucrees />} />
          <Route path="/admin/controltraditionnel" element={<ControlTraditionnel />} />
          <Route path="/admin/controlgourment" element={<ControlGourment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
