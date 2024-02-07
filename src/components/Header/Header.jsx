import mainlogo from "../../assets/images/navbarLogo.svg";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="header-main">
          <nav className="navbar navbar-expand-lg navbar-light ">
            <a className="navbar-brand" href="#">
              <img src={mainlogo} />
            </a>
            <button
              className="navbar-toggler bg-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo01"
            >
              <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active text-white">
                  <a className="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Testimonials
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link btn btn-primary" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Header;
