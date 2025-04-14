import React from "react";

import { Link } from "react-router-dom";
export const LatestNewsCard = ({ noticia }) => {
  console.log(noticia);
  return (
    <article className="">
      <Link to={"/single"}>
        <div className="card card-first bg-primary text-secondary rounded-4 d-flex  p-2">
          <div className="col-6 mt-3 mb-0 ms-3 ">
            <a className="text-secondary" href="#"></a>
            <a className="text-secondary" href="#"></a>
          </div>
          <div className="card-body ">
            <h3 className="card-title truncate-after-second-line mb-2 text-secondary">
              {noticia.title}
            </h3>
            <p className="lead card-subtitle mb-4">{noticia.publishedAt}</p>
            <div className="ratio ratio-21x9">
              <img
                className="img-fluid object-fit-cover rounded-4"
                src={noticia.image}
                alt=""
                
              />
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
};
