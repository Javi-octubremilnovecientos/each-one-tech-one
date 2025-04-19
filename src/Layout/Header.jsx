import React, { useEffect, useReducer } from "react";
import { SearchIcon } from "../assets/Icons";
import { Link } from "react-router-dom";
import { categories } from "../Config/apiConfig";
import { categoryReducer, initialState } from "../Services/categoryReducer";
import useSearchStore from "../Store/useSearchStore";


export const Header = () => {
 const {SearchHeadlines}  = useSearchStore()
 const [state, dispatch] =  useReducer(categoryReducer, initialState)

 const handleDispatch = (key)=>{
    dispatch({type:key})
 }


useEffect(() => {

  
 console.log(state)
 
  SearchHeadlines(state.query)

}, [state])

  return (
    <header>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid  ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded=""
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse flex-column flex-xxl-row align-items-start"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-2 mb-2 mb-lg-0 bg-secondary border border-primary border-2 rounded-pill p-1 ">
              {categories &&
                categories.map((topic,i) => (
                  <li key={i} className="nav-item">
                    <div className="nav-link " aria-current="page" href="#" onClick={()=>handleDispatch(i)}>
                      <Link to={topic}>{i===0? "Home": topic}</Link>
                    </div>
                  </li>
                ))}

              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/Rapshody"}>Tech Rapshody</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/subscribe"}>Newsletter</Link>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-link" href="#">
                  <Link to={"/Contact"}>contact</Link>
                </div>
              </li>
            </ul>

            <form
              className="d-flex  bg-secondary rounded-pill mt-lg-2 py-1 border border-primary border-2"
              role="search"
            >
              <button className="btn text-primary" type="submit">
                <Link to={"/search"}>
                  {" "}
                  <SearchIcon />
                </Link>
              </button>
              <input
                className="form-control "
                type="search"
                placeholder=""
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
};
