import MastheadHome from '../components/HomeComponents/MastheadHome';
import ServicesHome from '../components/HomeComponents/ServicesHome';
import PortfolioHome from '../components/HomeComponents/PortfolioHome';
import ContactHome from '../components/HomeComponents/ContactHome';
import AboutHome from '../components/HomeComponents/AboutHome';
import FooterHome from '../components/HomeComponents/FooterHome';
import "../css/styles.css";

function Home() {
  return (
    <div className="container-fluid home-container p-0">
      <MastheadHome />
      <ServicesHome />
      <PortfolioHome />
      <AboutHome />
     
      <FooterHome />
    </div>
  );
}

export default Home;
