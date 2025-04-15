import React from "react";

import { Link } from "react-router-dom";
export const OtherNewsCard = ({noticia}) => {
  return (
    <article>
      <Link to={"/single"} className="text-decoration-none">
        <div className=" card p-2  bg-secondary border border-secondary ">
          <div className="col-12 border border-dark mb-3"></div>
          <div className="col-6 d-flex ms-1 ">
            <a className="btn btn-sm btn-primary">
              Interviwes
            </a>
            <a className="btn btn-sm btn-outline-primary ms-1">
              artist
            </a>
          </div>
          <div className="card-body pt-1 ">
            <h4 className="card-title  truncate-after-second-line pt-1">
            {noticia.title}
            </h4>
            <p className="card-subtitle lead text-primary mb-3 ">
              {noticia.publishedAt}
            </p>
          </div>
         <div className="ratio ratio-4x3">
          <img className="card-img object-fit-cover " alt="" 
          src={noticia.image}
           />
          </div>
        </div>
      </Link>
    </article>
  );
};
