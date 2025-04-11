import React from "react";
import { SearchIcon } from "../Components/Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container-fluid mt-4" id="header">
        <div className="row mt-3 px-2 flex-column flex-lg-row ">
          <div className="col-12 col-lg-10 d-flex justify-content-around bg-secondary rounded-pill p-2 m-2 m-lg-0 ">
            <div className="row w-50  justify-content-around  ">
              <div className="col-1 text-primary text-center"><Link to={"/"} style={{textDecoration:"none"}}>Home</Link></div>
              <div className="col-3 text-primary text-nowrap text-center"><Link to={"/topic"} style={{textDecoration:"none"}}>App´s & Software</Link></div>
              <div className="col-2 text-primary text-end"><Link to={"/topic"} style={{textDecoration:"none"}}>Smartphones</Link></div>
              <div className="col-2 text-primary text-end"><Link to={"/topic"}  style={{textDecoration:"none"}}>Gadgets</Link></div>
            </div>
            <div className="row w-50  justify-content-around">
              <div className="col-1 text-primary text-start"><Link to={"/topic"}  style={{textDecoration:"none"}}>A.I.</Link></div>
              <div className="col-3 text-primary text-nowrap text-center">
              <Link style={{textDecoration:"none"}}>Politics & Regulation</Link>
              </div>
              <div className="col-3 text-primary text-nowrap text-end"><Link to={"/Rapshody"}  style={{textDecoration:"none"}}>Tech Rapshody</Link></div>
              <div className="col-2 text-primary text-end"><Link to={"/subscribe"} style={{textDecoration:"none"}}>Subscribe</Link></div>
              <div className="col-2 text-primary text-end"><Link  to={"/Contact"} style={{textDecoration:"none"}}>Contact</Link></div>
            </div>
          </div>
          <div className="col-12 col-md-2 bg-secondary rounded-pill ms-2 ms-lg-0 p-1">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="container-fluid mt-3 " id="mob">
        <div className="col-2   d-flex flex-column justify-content-center align-items-start  ms-2">
          <div className="w-50 border-top border-primary border-5 mt-3"></div>
          <div className="w-100 border-top border-primary border-5 mt-2"></div>
          <div className="w-50 border-top border-primary border-5 mt-2"></div>
          <div className="w-100 border-top border-primary border-5 mt-2"></div>
        </div>
      </div>
    </>
  );
};
