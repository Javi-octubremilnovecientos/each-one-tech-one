import React from "react";
import cuadro from "../assets/img/cuadro.png";
export const OtherNewsCard = () => {
  return (
    <>
      <div className="card card-second p-1  border-top border-white-50 border-3 " style={{backgroundColor:"transparent", border:"none"}}>
      <div className="col-6 ms-1 pt-2" style={{ fontFamily: "Neue-Light" }}>
          <a
            href="#"
            className="btn btn-sm border border-primary text-primary rounded-pill me-2 "
          >
            Interviwes
          </a>
          <a
            href="#"
            className="btn btn-sm border border-primary  text-primary rounded-pill "
          >
            artist
          </a>
        </div>
        <div className="card-body p-1">
        <h5
            className="card-title h6 "
            style={{ fontFamily: "Neue-Medium" }}
          >
            Exclusive Interview With HollyWood Actor Winning Award, Jean Luc
            Godard and his wife
          </h5>
          <p
            className="card-subtitle"
            style={{ fontFamily: "Neue-Light" }}
          >
            July 04.2023
          </p>
        </div>
        <img className="card-img" src={cuadro} alt="" />
      </div>
    </>
  );
};
