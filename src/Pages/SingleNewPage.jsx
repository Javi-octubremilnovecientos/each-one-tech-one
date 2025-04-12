import React, { useState } from "react";
import { Facebook, Share, Tweeter } from "../Components/Icons"
import  TopHeadlines from "../Mocks/TopHeadlines.json"
export const SingleNewPage = () => {


  const [single, setsingle] = useState(TopHeadlines.articles[0])

  return (
    <div>
      <div className="container-fluid m-0 pb-0  ">
        <div className="row  ps-4 pt-5 pb-0 m-0 gy-5 flex-column flex-md-row justify-content-between ">
          <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start  ps-0 ps-md-2 pb-0  mb-0 ">
            <button className="btn m-1 btn-sm btn-primary rounded-pill text-secondary">
              Geofa
            </button>
            <button className="btn m-1 btn-sm btn-primary rounded-pill text-secondary">
              Geofklñklña
            </button>
            <button className="btn m-1 btn-sm btn-primary rounded-pill text-secondary">
              Geofalñkñlk
            </button>
            <button className="btn m-1 btn-sm btn-primary rounded-pill text-secondary">
              Gea
            </button>
          </div>
          <div className="col-12 col-md-4 d-flex justify-content-evenly align-items-center">
            <Facebook />
            <Share />
            <Tweeter />
          </div>
          <div className="col-12 p-0 p-md-3  ">
            <h1
              className="display-4 text-primary fw-light"
            
            >
            {single.title}
            </h1>
          </div>
        </div>
      </div>
      <span className="separador"></span>
      <section className="container-fluid container-lg p-3">
        <div className="row justify-content-start">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row">
            <div className="d-flex flex-md-column justify-content-around m-3 p-0 text-primary">
              <p className="m-0">{single.source.name}</p>
              <h5>Lorem, ipsum.</h5>
            </div>
            <div className="d-flex flex-md-column justify-content-around m-3 p-0 text-primary">
              <p className="m-0">{single.source.name}</p>
              <h5>Lorem, ipsum.</h5>
            </div>
          </div>
        </div>
        <div className="row g-0 g-md-5">
          <div className="col-12 pt-2 col-md-6 border d-flex align-self-start justify-content-center p-5">
            <img src={single.image}
             alt="" className="img-fluid w-100 rounded-3" />
          </div>
        
          <div className="col-12 col-md-6 pt-3 d-flex justify-content-center align-items-stretch border">
            <p className="fs-5 text-primary p-4 p-md-0"> 
              {single.content}
              {single.content}
              {single.content}
              

            </p>

          </div>
          <div className="col-12 d-flex justify-content-center py-4">
            <h4 className="h4 text-primary fw-bold " style={{fontFamily:"Eiko"}}  >{single.description}</h4>
          </div>
          <div className="col-12 col-lg-6 p-2">
            <div className="w-100 border d-flex flex-wrap justify-content-around  ">
            <img src={single.image}
             alt="" className="img-fluid" />
     
          </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <p  className="fs-5 text-primary p-4 p-md-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, modi iure. Aliquam ipsa sunt quis harum doloribus veritatis, commodi deleniti. Debitis nam ut, iure mollitia expedita pariatur est cupiditate dignissimos, aut praesentium recusandae, molestiae dolorum possimus facere illo eum quis? Harum voluptas odit dolore quod, assumenda id reiciendis voluptatum ratione. Labore fugit quae officia voluptatum veniam est odio eveniet corporis amet maxime? Doloribus tenetur ducimus tempore nam laudantium voluptate possimus maxime odio, veniam nulla voluptates assumenda! Voluptas quo recusandae obcaecati repellat ab doloremque consectetur magni. Sed deleniti odit eius, consequatur mollitia maiores iste totam, laboriosam consectetur sapiente omnis voluptatem sint cumque praesentium. Laboriosam rerum voluptates quidem nisi facere voluptatem ad rem incidunt architecto, voluptatum delectus alias velit enim, magni commodi. Hic nam soluta suscipit eaque, fugiat eos blanditiis sunt beatae delectus veritatis distinctio ex, assumenda aliquam dolores eligendi perferendis quisquam ad, expedita ipsam? Dolorem illum veniam expedita officia facere voluptatibus inventore enim alias cupiditate, earum est nostrum laboriosam magni reiciendis nisi vitae exercitationem doloribus debitis nulla magnam nihil ab. Asperiores magnam, eum laborum quas pariatur animi! Ipsa ipsum, reprehenderit iure mollitia distinctio modi voluptatem cupiditate illo maiores eos sed nostrum, blanditiis laboriosam magnam deleniti dolor consectetur iusto tempore! Suscipit, doloremque?</p>
          </div>

        </div>
      </section>
    </div>
  );
};
