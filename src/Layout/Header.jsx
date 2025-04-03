import React from "react";

export const Header = () => {
  return (
    <>
      <div className="container-fluid ">
        <div className="row  p-3  ">
          <div className="col-12 col-sm-10 border border-primary border-2 d-flex  rounded-pill me-4 bg-secondary p-3">
            <div className="col-6 d-flex justify-content-around">
              <div className="col-12 col-sm-2 text-center">Home</div>
              <div className="col-12 col-sm-2 text-center text-nowrap">
                App´s  &  Software
              </div>
              <div className="col-12 col-sm-2 text-center">Smartphone</div>
              <div className="col-12 col-sm-2 text-center">Gadegets</div>
            </div>
            <div className="col-6 d-flex justify-content-around">
              <div className="col-12 col-sm-2 text-center text-nowrap">
                Polities and regulation
              </div>
              <div className="col-12 col-sm-2 text-center">TechRapshody</div>
              <div className="col-12 col-sm-2 text-center">subscribe</div>
              <div className="col-12 col-sm-2 text-center">Contact</div>
            </div>
          </div>
          <div className="col-12 col-sm-1 border rounded-pill bg-secondary"></div>
        </div>
      </div>
    </>
  );
};
