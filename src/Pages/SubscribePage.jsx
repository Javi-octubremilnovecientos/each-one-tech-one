import React from "react";

export const SubscribePage = () => {
  return (
    <main >
      <section className="container-fluid px-0 px-sm-4" id="hero" >
        <div className="row  p-1 p-sm-4 gy-4 ">
          <div className="col-12 p-2 p-sm-3 d-flex justify-content-center">
            <h1 className="h1 display-2 d-flex flex-column  align-items-start p-2">
              Subscribe <br />
              now to
              <span className="alt-font">Newsletter</span>
            </h1>
          </div>
          <div className="col-12 text-primary ">
            <p className="fs-6 fs-sm-2 p-3">    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
            reiciendis ut. Commodi, nobis iste! Sit aut commodi, delectus
            sapiente voluptatibus corrupti officia sint et debitis eveniet
            dignissimos veniam quia nulla, cum magnam accusamus perferendis non
            voluptatum, ipsam iure reprehenderit aperiam veritatis! Impedit
            possimus corporis voluptatibus autem.</p>
        
          </div>
       
          <div className="col-12 col-md-4"></div>

          <div className="col-12 col-md-8 p-4 text-primary  ">
            <h4 className="mb-3">Fill this Form</h4>
            <form
              action=""
              className="d-flex flex-column justify-content-around align-items-start"
            >
              <label className="label">e-mail</label>
              <div className="input-group mb-3 bg-secondary border border-primary border-2 rounded-5">
                <input
                  type="text"
                  className="form-control bg-secondary rounded-5"
                  aria-label="Text input with checkbox"
                />
              </div>
              <label className="label">
                Wich topics you prefer to stay tunned?
              </label>
              <select
                className="form-select bg-secondary border border-primary border-2 rounded-5"
                aria-label="Default select example"
              >
                <option selected>All</option>
                <option value="1">Smartphones</option>
                <option value="2">App</option>
                <option value="3">Gadgets</option>
                <option value="4">A.I.</option>
                <option value="5">Polities & Reg</option>
              </select>
              <label className="mt-4">Frecuency</label>
              <select
                className="form-select bg-secondary border border-primary border-2 rounded-5"
                aria-label="Default select example"
              >
                <option selected>Daily</option>
                <option value="1">Weekly</option>

                <option value="3">Monthly</option>
              </select>
              <div className="form-check mt-4 ms-2">
                <input
                  className="form-check-input rounded-circle border border-2 border-primary"
                  type="checkbox"
                  value=""
                  id="checkDefault"
                />
                <label className="form-check-label" for="checkDefault">
                  Pravacy Policiy
                </label>
              </div>
              <button className="m-4  btn btn-lg border border-2 border-primary rounded-pill text-primary">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};
