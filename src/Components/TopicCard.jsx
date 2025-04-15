import React from "react";
import { Link } from "react-router-dom";
import jeanLuc from "../assets/img/jeanLuc.jpg";

export const TopicCard = () => {
  return (
    <article>
      <div
        className="card position-relative rounded "
        style={{ minHeight: "500px" }}
      >
        <img
          src={jeanLuc}
          className="img-fluid position-absolute h-100 object-fit-cover rounded "
          alt=""
        />
        <div
          className="card-img-overlay  d-flex flex-column justify-content-end rounded "
          style={{
            background: "linear-gradient(to top, #0A287E 2%, transparent)",
          }}
        >
          <div className="col-6 d-flex pb-2">
            <button className="btn btn-sm btn-outline-secondary text-secondary ms-2">
              ijhuihui
            </button>
            <button className="btn btn-sm btn-outline-secondary text-secondary ms-2">
              ijhuihui
            </button>
          </div>

          <h4 className="h4 card-title fw-bold text-secondary ">SMATPHOBES</h4>

          <p className="card-subtitle  text-secondary ">
            Last updated 3 mins ago
          </p>
        </div>
      </div>
    </article>
  );
};
