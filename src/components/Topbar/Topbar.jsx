import { NavLink } from "react-router-dom";
import Hambuger from "../../assets/images/hamburger.svg";

function Topbar(props) {
  return (
    <>
      <div className="topbar-section">
        <div className="items">
          <button
            type="button"
            className="btn "
            onClick={() => {
              props.setSideBar(!props.sideBar);
            }}
          >
            <img src={Hambuger} />
          </button>
          <NavLink className="Logout">LogOut </NavLink>
        </div>
      </div>
    </>
  );
}
export default Topbar;
