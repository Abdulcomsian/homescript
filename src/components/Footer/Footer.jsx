import { Link } from "react-router-dom";
import insta from "../../assets/images/insta.svg";
import tweter from "../../assets/images/twitter.svg";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="footer-Grid">
          <div className="section">
            <div className="section-title">
              <h3>About us</h3>
            </div>
            <div className="section-description">
              <p>
                We are dedicated to making the lives of real estate agents
                easier by providing affordable times that save time and money.
              </p>
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <h3>Contact</h3>
            </div>
            <div className="section-description">
              <ul>
                <li>
                  <Link to="/dashboard/all-listing">Contact Us</Link>
                </li>
                <li className="">
                  <Link to="/dashboard/newlisting">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <h3>Account</h3>
            </div>
            <div className="section-description">
              <ul>
                <li>
                  <Link to="/signup">Create Account</Link>
                </li>
                <li className="">
                  <Link to="/">Login</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="section">
            <div className="section-title">
              <h3>Legal</h3>
            </div>
            <div className="section-description">
              <ul>
                <li>
                  <Link to="/privacypolicy">Privacy Policy</Link>
                </li>
                <li className="">
                  <Link to="/termscondition">Terms Of Service</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <div>
            <h4>© 2024 HomeScript. All rights reserved.</h4>
          </div>
          <div className="d-flex align-items-center gap-4">
            <a href="#">
              <img src={insta} />
            </a>
            <a href="#">
              <img src={tweter} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
