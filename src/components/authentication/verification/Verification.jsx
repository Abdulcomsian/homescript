import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Verification() {
  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title mb-2">
            <h3>Enter Verification Code</h3>
          </div>
          <form>
            <div className="Input-section">
              <div className="field">
                <p className="description ">This code is good for 1 minute.</p>
              </div>

              <div className="field">
                <p className="description text-dark">
                  We sent the code to user@email.com
                </p>
              </div>
              <div className="field">
                <div className="row">
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9"
                    />
                  </div>
                  <div className="col-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="9"
                    />
                  </div>
                </div>
              </div>
              <div className="field">
                <button type="submit" className="btn btn-primary ">
                  Continue
                </button>
              </div>
              <div className="Resend-section">
                <h3>
                  Did not receive the email? Check your spam filter, or resend
                  code.
                </h3>
                <a>Resend code</a>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Verification;
