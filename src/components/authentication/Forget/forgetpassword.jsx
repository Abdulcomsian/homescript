import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Forgetpassword() {
  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title">
            <h3>Forgot Password?</h3>
            <a href="/">Already have an account?</a>
          </div>
          <div className="Input-section">
            <div className="field">
              <label>Email </label>
              <input
                type="email"
                class="form-control"
                placeholder="sally@tryhomescript.com"
              />
            </div>

            <div className="field">
              <button type="button" class="btn btn-primary ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Forgetpassword;
