import React from "react";
import { SearchIcon } from "../Components/Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid ">
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-2 mb-2 mb-lg-0 bg-secondary rounded-pill p-1 ">
            <li className="nav-item">
              <a className="nav-link text-primary " aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                App's & Software
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                Smartphones
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Gadgets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " aria-current="page" href="#">
                A.I.
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Politices & Regulation
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Tech Rapshody
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               Newsletter
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
               Contact
              </a>
            </li>
          </ul>
         
          <form className="d-flex  bg-secondary rounded-pill mt-lg-2  " role="search">
            <button className="btn text-primary" type="submit">
              <SearchIcon/>
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
