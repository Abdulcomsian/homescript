import Logo from "../../assets/images/Logo.svg";
import { NavLink } from "react-router-dom";
import { MdAvTimer } from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { CiHeadphones } from "react-icons/ci";
import { FaRocket } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import HowWork from "../../assets/images/howwork.png";
import Topbar from "../Topbar/Topbar";

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
              <MdAvTimer size={25} color="gray" />
            </div>
            <div className="label">Listings</div>
          </NavLink>
          <NavLink className="Navbar-item">
            <div className="icons">
              <BsChatDots size={20} color="gray" />
            </div>
            <div className="label">My Account</div>
          </NavLink>
          <NavLink className="Navbar-item">
            <div className="icons">
              <CiHeadphones size={20} color="gray" />
            </div>
            <div className="label">Membership</div>
          </NavLink>
          <NavLink className="Navbar-item">
            <div className="label">Support</div>
          </NavLink>

          <NavLink className="Navbar-item">
            <div className="icons">
              <FaRocket size={20} color="gray" />
            </div>
            <div className="label">Start a Chat</div>
          </NavLink>
          <NavLink className="Navbar-item">
            <div className="icons">
              <MdOutlinePhoneEnabled size={20} color="gray" />
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
              <button type="button" class="btn btn-primary ">
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
