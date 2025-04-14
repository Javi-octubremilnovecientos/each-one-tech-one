import React from "react";
import { SearchIcon } from "../Components/Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
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
          <ul className="navbar-nav m-2 mb-2 mb-lg-0 bg-secondary rounded-pill p-1 ">
            <li className="nav-item">
              <a
                className="nav-link "
                aria-current="page"
                href="#"
              >
                <Link to={"/"}>Home</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/Topic"}>App's & Software</Link>
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                <Link to={"/Topic"}>Smartphones</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/Topic"}> Gadgets </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                <Link to={"/Topic"}> A.I. </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/Topic"}> Politics & Regulation</Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/Rapshody"}> Tech Rapshody </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/subscribe"}> Newsletter </Link>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <Link to={"/Contact"}> Contact </Link>
              </a>
            </li>
          </ul>

          <form
            className="d-flex  bg-secondary rounded-pill mt-lg-2 py-1  "
            role="search"
          >
            <button className="btn text-primary" type="submit">
              <SearchIcon />
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
  );
};
