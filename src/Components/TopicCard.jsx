import React from "react";

export const TopicCard = () => {
  return (
    <>
      <div className="card card-topic p-1 border border-secondary rounded-4 ">
        <div className="card-body d-flex flex-column justify-content-end">
          <div
            className="col-6 mb-2 t"
            style={{ fontFamily: "Neue-Light" }}
          >
            <a
              href="#"
              className="btn border border-secondary text-secondary rounded-pill p-1 me-2 "
            >
              Interviwes
            </a>
            <a
              href="#"
              className="btn border border-secondary  text-secondary rounded-pill p-1"
            >
              {" "}
              artist
            </a>
          </div>
          <div
            className="card-title fs-6 text-secondary"
            style={{ fontFamily: "Neue-Medium" }}
          >
            Exclusive Interview With HollyWood Actor Winning Award, Jean Luc
            Godard and his wife
          </div>
          <h6
            class="card-subtitle text-secondary"
            style={{ fontFamily: "Neue-Light" }}
          >
            Juli 23.2023
          </h6>
        </div>
      </div>
    </>
  );
};
