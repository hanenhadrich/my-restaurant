import "../../css/styles.css";
import "../../store/index";
import { useNavigate } from "react-router-dom";

function PortfolioHome() {
  const navigate = useNavigate();

  return (
    <>
      <section className="page-section bg-light" id="portfolio">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">Notre Portfolio</h2>
            <h3 className="section-subheading text-muted">
              Découvrez nos créations culinaires et services.
            </h3>
          </div>

          <div className="row">
            
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/portfolio/restaurant-1.jpg" alt="Repas Gourmet" />
                <button className="details-button" onClick={() => navigate("/produitsGourmet")}>
                  Plus de détails
                </button>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Repas Gourmet</div>
                  <div className="portfolio-caption-subheading text-muted">Cuisine Française</div>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/portfolio/restaurant-2.jpg" alt="Plat Traditionnel" />
                <button className="details-button" onClick={() => navigate("/produitsTraditionnel")}>
                  Plus de détails
                </button>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Plat Traditionnel</div>
                  <div className="portfolio-caption-subheading text-muted">Cuisine Méditerranéenne</div>
                </div>
              </div>
            </div>

            
            <div className="col-lg-4 col-sm-6 mb-4">
              <div className="portfolio-item">
                <img className="img-fluid" src="assets/img/portfolio/restaurant-3.jpg" alt="Desserts Sucrés" />
                <button className="details-button" onClick={() => navigate("/produitsdessertsucres")}>
                  Plus de détails
                </button>
                <div className="portfolio-caption">
                  <div className="portfolio-caption-heading">Desserts Sucrés</div>
                  <div className="portfolio-caption-subheading text-muted">Pour Événements</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default PortfolioHome;
