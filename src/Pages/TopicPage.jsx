import React, { useState } from "react";
import { LatestNewsCard } from "../Components/LatestNewsCard";
import { OtherNewsCard } from "../Components/OtherNewsCard";
import TopHeadlines from "../Mocks/TopHeadlines.json";
export const TopicPage = () => {
  const [tops, settops] = useState(TopHeadlines.articles);

  console.log(tops[0]);
  return (
    <>
      <div className="container-fluid m-0 pb-0  bg-secondary ">
        <div className="row  ps-4 pt-5 pb-0 m-0 gy-2 ">
          <div className="col-12 p-3  ">
            <h1 className="h1 display-2">Politics & Regulation</h1>
          </div>
          <div className="col-12 d-flex ps-2 pt-3 pb-0  mb-0">
          <a className="btn btn-primary d-none d-sm-inline text-secondary ms-2" >ygyg</a>
            <a className="btn btn-primary d-none d-sm-inline text-secondary ms-2" >ygyg</a>
            <a className="btn btn-outline-primary d-none d-sm-inline text-primary ms-2" >ygyg</a>
            <a className="btn btn-primary btn-sm d-inline d-sm-none text-secondary ms-2" >gyuuygyg</a>
            <a className="btn btn-outline-primary btn-sm d-inline d-sm-none text-primary ms-2" >gyuuygyg</a>
            <a className="btn btn-primary btn-sm d-inline d-sm-none text-secondary ms-2" >gyuuygyg</a>
          </div>
        </div>
      </div>
   
      <section className="container-fluid  pt-3  px-5 d-flex flex-column justify-content-end bg-secondary">
        <div className="row p-2 py-4  gy-0  border-top border-primary border-2 align-items-end ">
          <div className="col-12 col-md-6 py-3 ">
            <LatestNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3"></div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
          <div className="col-12 col-md-3 mb-2  p-3">
            <OtherNewsCard noticia={tops[0]} />
          </div>
        </div>
        <button className="btn btn-lg border border-primary border-2 rounded-pill align-self-end m-4">
          see all
        </button>
        <div className="separador"></div>
      </section>
    </>
  );
};
