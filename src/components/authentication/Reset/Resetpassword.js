import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Resetpassword() {
  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title">
            <h3>Reset Password</h3>
          </div>
          <form>
            <div className="Input-section">
              <div className="field">
                <p className="description">Password req 1</p>
                <p className="description">Password req 1</p>
                <p className="description">Password req 1</p>
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="field">
                <label>Confirm Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                />
              </div>
              <div className="field">
                <button type="submit" class="btn btn-primary ">
                  Reset Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Resetpassword;
