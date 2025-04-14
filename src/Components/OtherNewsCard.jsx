import React from "react";

import { Link } from "react-router-dom";
export const OtherNewsCard = ({noticia}) => {
  return (
    <article>
      <Link to={"/single"} className="text-decoration-none">
        <div className="card card-second p-1 border border-secondary bg-secondary ">
          <div className="col-6 d-flex ms-1 pt-2">
            <a href="#" className="btn ">
              Interviwes
            </a>
            <a href="#" className="btn ">
              artist
            </a>
          </div>
          <div className="card-body ">
            <h4 className="card-title  truncate-after-second-line ">
            {noticia.title}
            </h4>
            <p className="card-subtitle lead text-primary">{noticia.publishedAt}</p>
          </div>
         <div className="ratio ratio-4x3">
          <img className="card-img object-fit-cover rounded-4" alt="" src={noticia.image}
           />
          </div>
        </div>
      </Link>
    </article>
  );
};
