import { NavLink } from "react-router-dom";
import Hambuger from "../../assets/images/hamburger.svg";

function Topbar() {
  return (
    <>
      <div className="topbar-section">
        <div className="items">
          <button type="button" class="btn ">
            <img src={Hambuger} />
          </button>
          <NavLink className="Logout">LogOut </NavLink>
        </div>
      </div>
    </>
  );
}
export default Topbar;
