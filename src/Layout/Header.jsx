import React from "react";
import {SearchIcon} from "../Components/Icons";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <div className="container-fluid mt-3" id="header">
        <div className="row  p-3  ">
          <div className="col-12 col-sm-10 border border-primary border-2 d-flex  rounded-pill me-4 bg-secondary p-2 text-primary">
            <div className="col-6 d-flex justify-content-around">
              <div className="col-12 col-sm-2 text-center"><Link style={{textDecoration:"none"}} to="/">Home</Link></div>
              <div className="col-12 col-sm-2 text-center text-nowrap">
                <Link style={{textDecoration:"none"}} to={"/Topic"}>   App´s  &  Software</Link>
             
              </div>
              <div className="col-12 col-sm-2 text-center"><Link style={{textDecoration:"none"}} to="/Topic">Smartphone</Link></div>
              <div className="col-12 col-sm-2 text-center"><Link style={{textDecoration:"none"}} to={"/Topic"}>Gadegets</Link></div>
            </div>
            <div className="col-6 d-flex justify-content-around">
              <div className="col-12 col-sm-2 text-center text-nowrap">
                <Link style={{textDecoration:"none"}} to={"/Topic"}> Polities and regulation</Link>
               
              </div>
              <div className="col-12 col-sm-2 text-center"><Link style={{textDecoration:"none"}} to={"/Rapshody"}>TechRapshody</Link></div>
              <div className="col-12 col-sm-2 text-center">subscribe</div>
              <div className="col-12 col-sm-2 text-center">Contact</div>
            </div>
          </div>
          <div className="col-12 col-sm-1 border border-primary border-2 rounded-pill bg-secondary position-relative">
           <SearchIcon  className="position-absolute end-0 bottom-0 text-primary" />
          </div>
        </div>
      </div>
    </>
  );
};
