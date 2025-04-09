import "../../css/styles.css";
import "../../store/index";
function MastheadHome() {

    return (
        <>
        <header className="masthead">
            <div className="container-fluid p-0 m-0">
            <div className="row"> 
            <div className="masthead-subheading" style={{ color: "#dc3545" }}>
                Welcome To Our Restaurant!
            </div>

            <div className="masthead-heading text-uppercase" style={{ color: "#dc3545" }}>
                It's Nice To Meet You
            </div>

                <div className="text-center">
                    <a className="btn btn-primary btn-xl text-uppercase" href="#services">Tell Me More</a>
                </div>
            </div>
            </div>
        </header>
        
        </>
  );
}

export default MastheadHome;