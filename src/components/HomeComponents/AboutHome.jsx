import "../../css/styles.css";
import "../../store/index";

function AboutHome() {
  return (
    <>
      <section className="page-section" id="about">
        <div className="container">
          <div className="text-center">
            <h2 className="section-heading text-uppercase">À propos de nous</h2>
            <h3 className="section-subheading text-muted">
              Une histoire de passion et de saveurs authentiques.
            </h3>
          </div>
          <ul className="timeline">
            
            
            <li>
              <div className="timeline-image">
                <img   className="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="Ouverture du restaurant" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2009</h4>
                  <h4 className="subheading">L'ouverture du restaurant</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Tout a commencé dans une petite cuisine familiale, où nous avons décidé de partager notre amour pour la gastronomie française avec le monde.
                  </p>
                </div>
              </div>
            </li>

            
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="Nouveau menu" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2011</h4>
                  <h4 className="subheading">Un menu réinventé</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Inspirés par nos voyages, nous avons introduit de nouvelles saveurs méditerranéennes, mélangeant tradition et modernité.
                  </p>
                </div>
              </div>
            </li>

            
            <li>
              <div className="timeline-image">
                <img  style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "50%" }} className="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="Récompense culinaire" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2015</h4>
                  <h4 className="subheading">Notre première étoile</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Grâce à notre engagement envers la qualité et l'innovation, notre restaurant a été récompensé par une étoile Michelin.
                  </p>
                </div>
              </div>
            </li>

            
            <li className="timeline-inverted">
              <div className="timeline-image">
                <img className="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="Nouveau restaurant" />
              </div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <h4>2020</h4>
                  <h4 className="subheading">Un deuxième restaurant voit le jour</h4>
                </div>
                <div className="timeline-body">
                  <p className="text-muted">
                    Suite à notre succès grandissant, nous avons ouvert un deuxième établissement, offrant une expérience encore plus raffinée et conviviale.
                  </p>
                </div>
              </div>
            </li>

           
            <li className="timeline-inverted">
              <div className="timeline-image">
                <h4>
                  Rejoignez
                  <br />
                  Notre
                  <br />
                  Histoire !
                </h4>
              </div>
            </li>

          </ul>
        </div>
      </section>
    </>
  );
}

export default AboutHome;
