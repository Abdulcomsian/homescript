import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Checkmail() {
  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title mb-1">
            <h3>Hi, Check Your Email</h3>
          </div>
          <div className="Input-section">
            <div className="field">
              <p className="description">
                We have sent a password recover instructions to your email.
              </p>
            </div>
            <div className="field">
              <button type="button" className="btn btn-primary ">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Checkmail;
