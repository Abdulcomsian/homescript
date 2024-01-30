import { useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import Topbar from "../Topbar/Topbar";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");

  const checkPasswordStrength = () => {
    // Define your password strength criteria here
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length >= minLength) {
      if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
        return "Good";
      } else if (hasUpperCase && hasLowerCase && hasNumbers) {
        return "Medium";
      } else {
        return "week";
      }
    } else {
      return "poor";
    }
  };

  const checkPasswordColor = () => {
    const color = checkPasswordStrength();
    switch (color) {
      case "Good":
        return "green";

      case "Medium":
        return "orange";

      case "week":
        return "red";
      default:
        return "";
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
  };

  const SubmitRegistration = () => {
    navigate("/mail");
  };

  return (
    <>
      <Topbar />
      <div className="card-section">
        <div className="card">
          <div className="Card-Title">
            <h3>Sign Up</h3>
            <a href="/">Already have an account?</a>
          </div>
          <form onSubmit={SubmitRegistration}>
            <div className="Input-section">
              <div className="field">
                <label>Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your Name"
                />
              </div>
              <div className="field">
                <label>Email </label>
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="field">
                <label>Website </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="sally.com"
                />
              </div>
              <div className="field">
                <label>Password</label>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handlePasswordChange}
                  autoComplete="new-password"
                />

                {
                  <div className="strength">
                    <span
                      style={{
                        backgroundColor: checkPasswordColor(),
                      }}
                    ></span>
                    <span
                      style={{
                        backgroundColor: checkPasswordColor(),
                      }}
                    ></span>
                    <span
                      style={{
                        backgroundColor: checkPasswordColor(),
                      }}
                    ></span>
                    {checkPasswordStrength()}
                  </div>
                }
              </div>
              <div className="field d-flex align-items-center gap-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label m-0 text-dark">
                  Agree with Terms & Conditions
                </label>
              </div>
              <div className="field">
                <button type="submit" class="btn btn-primary ">
                  Sign Up
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

export default Signup;
