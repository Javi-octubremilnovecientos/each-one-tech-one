import React from "react";
import { SearchIcon } from "../assets/Icons";
import { Link } from "react-router-dom";


export const Header = () => {

 return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded=""
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-column flex-xxl-row align-items-start"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-2 mb-2 mb-lg-0 bg-secondary border border-primary border-2 rounded-pill p-1 ">
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/"}>Home</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/App's & Software"}>App's & Software</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/Smartphones"}>Smartphones</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/Gadgets"}>Gadgets</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/A.I."}>A.I.</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link " aria-current="page" href="#">
                  <Link to={"/Politics & Regulation"}>Politics & Regulation</Link>
                </div>
              </li>
       
       
              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/Rapshody"}>Tech Rapshody</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/subscribe"}>Newsletter</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/Contact"}>contact</Link>
                </div>
              </li>
            </ul>

            <form
              className="d-flex  bg-secondary rounded-pill mt-lg-2 py-1 border border-primary border-2"
              role="search"
            >
              <button className="btn text-primary" type="submit">
                <Link to={"/search"}>
                  {" "}
                  <SearchIcon />
                </Link>
              </button>
              <input
                className="form-control "
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
