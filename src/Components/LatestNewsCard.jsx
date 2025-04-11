import React from "react";

import { Link } from "react-router-dom";
export const LatestNewsCard = ({title,date,img}) => {
 

  
  return (
    <article>
      <Link to={"/single"}>
      <div className="card card-first bg-primary text-secondary rounded-4 d-flex  p-2">
        <div className="col-6 mt-3 mb-0 ms-3 " style={{ fontFamily: "Neue-Light" }}>
          <a
            href="#"
            className="btn btn-sm border border-secondary text-secondary rounded-pill me-2 "
          >
            Interviwes
          </a>
          <a
            href="#"
            className="btn btn-sm border border-secondary  text-secondary rounded-pill "
          >
            artist
          </a>
        </div>
        <div className="card-body ">
          <h5
            className="card-title mb-2"
            style={{ fontFamily: "Neue-Medium" }}
          >
           {title}
          </h5>
          <h6
            className="card-subtitle mb-4"
            style={{ fontFamily: "Neue-Light" }}
          >
          {date}
          </h6>

          <img
            className="img-fluid rounded-4 mt-2 pb-3"
            src={img}
            alt=""
            style={{ aspectRatio: "3/1", objectFit: "cover" }}
          />
        </div>
      </div>
      </Link>
    </article>
  );
};
