import mainlogo from "../../assets/images/navbarLogo.svg";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="header-main">
          <nav class="navbar navbar-expand-lg navbar-light ">
            <a class="navbar-brand" href="#">
              <img src={mainlogo} />
            </a>
            <button
              class="navbar-toggler bg-white"
              type="button"
              data-toggle="collapse"
              data-target="#navbarTogglerDemo01"
              aria-controls="navbarTogglerDemo01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarTogglerDemo01"
            >
              <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active text-white">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Testimonials
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link btn btn-primary" href="#">
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
