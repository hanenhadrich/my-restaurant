import "../../css/styles.css";
import "../../store/index";
function ServicesHome() {

    return (
            <>
              <section className="page-section" id="services">
                <div className="container">
                  <div className="text-center">
                    <h2 className="section-heading text-uppercase">Nos Services</h2>
                    <h3 className="section-subheading text-muted">Nous offrons une variété de services pour satisfaire vos besoins gastronomiques.</h3>
                  </div>
                  <div className="row text-center">
                    <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-utensils fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="my-3">Repas à Emporter</h4>
                      <p className="text-muted">Profitez de nos délicieux repas à emporter. Facile et rapide, idéal pour ceux qui sont pressés.</p>
                    </div>
                    <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-cocktail fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="my-3">Service de Bar</h4>
                      <p className="text-muted">Savourez une grande variété de cocktails et de boissons rafraîchissantes, disponibles toute la journée.</p>
                    </div>
                    <div className="col-md-4">
                      <span className="fa-stack fa-4x">
                        <i className="fas fa-circle fa-stack-2x text-primary"></i>
                        <i className="fas fa-concierge-bell fa-stack-1x fa-inverse"></i>
                      </span>
                      <h4 className="my-3">Service de Traiteur</h4>
                      <p className="text-muted">Nous proposons des services de traiteur pour vos événements spéciaux, avec des plats sur mesure pour chaque occasion.</p>
                    </div>
                  </div>
                </div>
              </section>
            </>
          );
}

export default ServicesHome;