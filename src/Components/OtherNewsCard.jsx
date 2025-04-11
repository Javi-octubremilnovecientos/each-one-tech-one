import React from "react";

import { Link } from "react-router-dom";
export const OtherNewsCard = ({title, date, img}) => {
  return (
    <article>
      <Link to={"/single"} style={{textDecoration:"none"}}>
      <div className="card card-second p-1  border-top border-white-50 border-3 " style={{backgroundColor:"transparent", border:"none"}}>
      <div className="col-6 d-flex ms-1 pt-2" style={{ fontFamily: "Neue-Light" }}>
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
        <div className="card-body ">
        <h5
            className="card-title h6 text-primary "
            style={{ fontFamily: "Neue-Medium", }}
          >
          {title}
          </h5>
          <p
            className="card-subtitle mb-3 text-primary"
            style={{ fontFamily: "Neue-Light" }}
          >
           {date}
          </p>
        </div>
        <img className="card-img rounded-4" src={img} alt="" style={{aspectRatio:"1/1",objectFit:"cover"}}/>
      </div></Link>
    </article>
  );
};
