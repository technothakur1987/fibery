import React from "react";
import greenlogo from "../assets/greenlogo.png";
import { PopupButton } from "react-calendly";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary px-2"
        id="bg-body-tertiaryy"
      >
        <div className="container-fluid  ">
          <a className="navbar-brand fs-4 fw-bold" href="#" id="navbar-brandd">
            Fibery <img src={greenlogo} id="star" alt="greenlogo"/>
            <span id="ai">ai now</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse   "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mt-2 mb-lg-0  w-100  justify-content-evenly">
              <li className="nav-item dropdown  fw-bolder text-secondary ">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  id="dropdown"
                >
                  Solutions<span id="roundgreen"></span>{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown fw-bolder text-secondary "
                id="dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Products{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className="nav-item dropdown  fw-bolder text-secondary "
                id="dropdown"
              >
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resources{" "}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item  fw-bolder text-secondary ">
                <a className="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item  fw-bolder text-secondary ">
                <a className="nav-link " href="#">
                  ...
                </a>
              </li>
            </ul>
            <div
              className=" d-flex align-items-center w-100 justify-content-end  mt-2 mb-lg-0  "
              id="mqalignCenter"
            >
              <button
                type="button"
                className="nav-link btn fw-bolder text-secondary "
              >
                Log in
              </button>
              <div id="innerdiv">
                <PopupButton
                  url="https://calendly.com/technothakur1987"
                  /*
                   * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                   * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                   */
                  rootElement={document.getElementById("root")}
                  text="Get a demo"
                  className="nav-link btn fw-bolder text-dark  border border-1 border-dark rounded-1 px-3 mx-4 py-2 demobtn"
                />
              </div>

              <button
                type="button"
                className="nav-link btn fw-bolder bg-dark text-light  border border-dark rounded-1 px-3 py-2"
                id="signbtn"
              >
                Sign up
              </button>

              <img src={greenlogo} id="mobileLogo" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
