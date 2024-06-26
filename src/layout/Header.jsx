import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";

const Header = () => {
  const menuItem = [
    { item: "Home" },
    { item: "Course" },
    { item: "Free Test" },
    { item: "Placement" },
    { item: "About Us" },
    { item: "Photo" },
    { item: "Career" },
    { item: "Online Class" },
    { item: "Contact Us" },
  ];
  return (
    <>
      <nav
        className="navbar navbar-expand-sm sticky-top bg-white main_nav_sec"
        style={{
          padding: "0.5rem 1rem",
          height: "60px",
        }}
      >
        <div className="container-fluid" style={{ marginTop: "0.3rem" }}>
          <a className="navbar-brand">
            <img src={logo} alt="" width="100" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#socialNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end  menu_nav"
            id="mynavbar"
          >
            <ul className="navbar-nav gap-2">
              {menuItem.map((item, index) => {
                return (
                  <li key={index} className="nav-item">
                    <Link className="nav-link">{item.item}</Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className="collapse navbar-collapse justify-content-end "
            id="utilityNavbar"
          >
            <ul className="navbar-nav gap-4">
              <li className="nav-item">
                <div className="d-flex gap-2">
                  <button className="btn btn-primary rounded border-0">
                    <i className="bi bi-credit-card-2-back"></i> Payment Online
                  </button>
                  <button className="btn btn-primary border-0">
                    <i className="bi bi-box-arrow-in-right"></i> Login
                  </button>
                  <button className="btn btn-primary border-0">
                    <i className="bi bi-door-open"></i> Admission/Registration
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
