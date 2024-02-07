import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";

function Login() {
  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title">
            <h3>Sign in</h3>
            <a href="/signup">I don't have an account</a>
          </div>
          <div className="Input-section">
            <div className="field">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
              />
            </div>
            <div className="field">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your password"
              />
            </div>
            <div className="field">
              <button type="button" className="btn btn-primary ">
                Sign In
              </button>
            </div>
            <div className="field text-center">
              <a href="/forgot" className="forget-section">
                Forget Password ?
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
