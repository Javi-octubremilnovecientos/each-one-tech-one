import React from "react";
import { SearchIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
// import useSearchStore from "../Store/useSearchStore";

export const Header = () => {

  // const {setSearchCell} = useSearchStore()

  // const handleSearchApp = async ()=>{
  
  //  await setSearchCell()
  // }

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
              <div
                className="nav-link "
                aria-current="page"
                href="#"
              >
                <Link to={"/"}>Home</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/Topic"}>App's & Software</Link>
              </div>
            </li>

            <li className="nav-item">
              <div className="nav-link " aria-current="page" href="#"  >
                <Link to={"/Topic"}>Smartphones</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/Topic"}> Gadgets </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link " aria-current="page" href="#">
                <Link to={"/Topic"}> A.I. </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/Topic"}> Politics & Regulation</Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/Rapshody"}> Tech Rapshody </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/subscribe"}> Newsletter </Link>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link" href="#">
                <Link to={"/Contact"}> Contact </Link>
              </div>
            </li>
          </ul>

          <form
            className="d-flex  bg-secondary rounded-pill mt-lg-2 py-1 border border-primary border-2"
            role="search"
          >
            <button className="btn text-primary" type="submit">
              <Link to={"/search"}>   <SearchIcon /></Link>
           
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
