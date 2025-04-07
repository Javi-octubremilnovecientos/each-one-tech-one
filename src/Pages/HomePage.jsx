import React from "react";
import { LatestNewsCard } from "../Components/LatestNewsCard";
import { OtherNewsCard } from "../Components/OtherNewsCard";
import { TopicCard } from "../Components/TopicCard";
import { TrendyNowCard } from "../Components/TrendyNowCard";

export const HomePage = () => {
  return (
    <>
      <section className="container-fluid d-flex flex-column justify-content-center align-items-center ">
        <h1 className="text-start text-primary display-1">
          <span style={{ fontFamily: "Eiko" }}>Each </span> One <br />
          Tech<span style={{ fontFamily: "Eiko" }}> One</span>
        </h1>
        <h3
          className="text-primary text-center"
          style={{ fontFamily: "Neue-Medium" }}
        >
            Tech knowledge<br />
          Hub
        </h3>
      </section>
      <span className="separador"></span>
      <section>
        <div className="container-fluid pb-4 px-4">
          <div className="row ps-4 pt-3 display-5 ">
            <h4
              className="h3 mb-4 text-primary"
              style={{ fontFamily: "Neue-Bold" }}
            >
              LATEST NEWS
            </h4>
          </div>
          <div className="row p-4  gy-4 px-6 ">
            <div className="col-12 col-md-6 ">
              <LatestNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
            <div className="col-12 col-md-3 mb-2  p-2">
              <OtherNewsCard />
            </div>
          </div>
        </div>
      </section>
      <span className="separador"></span>
      <section className="container-fluid p-4 mt-4">
        <div className="row ps-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
            LATEST NEWS
          </h4>
        </div>
        <div className="row p-4 flex-wrap ">
          <div className="col-12 col-md-3 pb-3 ">
            <TopicCard />
          </div>
          <div className="col-12 col-md-3 pb-3 ">
            <TopicCard />
          </div>
          <div className="col-12 col-md-3 pb-3">
            <TopicCard />
          </div>
          <div className="col-12 col-md-3 pb-3">
            <TopicCard />
          </div>
        </div>
      </section>
      <span className="separador"></span>
      <section className="conteiner p-4 pb-4" > 
      <div className="row ps-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
            LATEST NEWS
          </h4>
        </div>
        <div className="row p-4">
          <div className="col-12 mb-4">
            <TrendyNowCard/>
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard/>
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard/>
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard/>
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard/>
          </div>
        
 
        </div>
      </section>
      <span className="separador"></span>
     <section className="container-fluid p-4">
     <div className="row ps-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
            LATEST NEWS
          </h4>
        </div>
      <div className="row  w-100  m-2 p-2">
        <div className="col-12 col-md-8 d-flex flex-column align-items-end ">
        <div className="row mb-3 me-0 justify-content-around align-items-end" >    
        <div className="col-12 col-md-6 p-3"><TopicCard/></div>
         <div className="col-12 col-md-4 p-3"><TopicCard/></div>
         <div className="col-12 col-md-2 p-3"><TopicCard/></div>
       </div>
         <div className="row mb-3 me-0 justify-content-between align-items-end" >    
        <div className="col-12 col-md-4 p-3"><TopicCard/></div>
      
        <div className="col-12 col-md-8 p-3"><TopicCard/></div>
      
       </div>
       
    
       </div>
       <div className="col-12 col-md-4 m-0 p-0 d-flex ">
        <TopicCard/>
       </div>
      </div>

     </section>
    </>
  );
};
