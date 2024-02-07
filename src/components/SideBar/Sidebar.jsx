import { NavLink } from "react-router-dom";
import HowWork from "../../assets/images/howwork.png";
import navIcon1 from "../../assets/images/icon-wrapper.svg";
import Logo from "../../assets/images/Logo.svg";
import navIcon2 from "../../assets/images/nav-icon2.svg";
import navIcon3 from "../../assets/images/nav-icon3.svg";
import navIcon4 from "../../assets/images/nav-icon4.svg";
import navIcon5 from "../../assets/images/nav-icon5.svg";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="Logo-section">
          <img src={Logo} />
        </div>
        <div className="nav-section">
          <NavLink className="Navbar-item">
            <div className="icons">
              {/* <MdAvTimer size={25} color="gray" /> */}
              <img src={navIcon1} alt="listings nav link item" />
            </div>
            <div className="label w-100">
              <div className="nav-link-main">Listings</div>
              <ul className="nav-sublist">
                <li>All Listings</li>
                <li className="fw-b">New Listing</li>
              </ul>
            </div>
          </NavLink>
          <NavLink className="Navbar-item" to={"/dashboard/myaccount"}>
            <div className="icons">
              {/* <BsChatDots size={20} color="gray" /> */}
              <img src={navIcon2} alt="my account nav link item" />
            </div>
            <div className="label">My Account</div>
          </NavLink>
          <NavLink className="Navbar-item" to={"/dashboard/membership"}>
            <div className="icons">
              {/* <CiHeadphones size={20} color="gray" /> */}
              <img src={navIcon3} alt="" />
            </div>
            <div className="label">Membership</div>
          </NavLink>
          <NavLink className="Navbar-item">
            <div className="label">Support</div>
          </NavLink>

          <NavLink className="Navbar-item">
            <div className="icons">
              {/* <FaRocket size={20} color="gray" /> */}
              <img src={navIcon4} alt="" />
            </div>
            <div className="label">Start a Chat</div>
          </NavLink>
          <NavLink className="Navbar-item" to={"/dashboard/contact"}>
            <div className="icons">
              {/* <MdOutlinePhoneEnabled size={20} color="gray" /> */}
              <img src={navIcon5} alt="" />
            </div>
            <div className="label">Send a Message</div>
          </NavLink>
        </div>

        <div className="MenuCard-section">
          <div className="MenuCard-description">
            <div className="text-center mb-3">
              <img src={HowWork} />
            </div>
            <div className="MenuCard-Title">
              <h3>How It Works</h3>
              <p>Get a look under the hood</p>
            </div>
            <div className="menuBtn">
              <button type="button" className="btn btn-primary ">
                Read Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sidebar;
