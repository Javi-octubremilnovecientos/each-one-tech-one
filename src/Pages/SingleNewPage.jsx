import React from "react";
import { Facebook, Share, Tweeter } from "../assets/Icons"
import useSearchStore from "../Store/useSearchStore";
// import  TopHeadlines from "../Mocks/TopHeadlines.json"
export const SingleNewPage = () => {
  
  const {singleNew} = useSearchStore()

  // const [single, setsingle] = useState(TopHeadlines.articles[0])



  return (
    <div>
      <div className="container-fluid m-0 pb-0  bg-secondary ">
        <div className="row  ps-1 ps-md-4 pt-5 pb-0 m-0  gy-0 gy-lg-5 flex-column flex-md-row justify-content-between ">
          <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start  ps-0 ps-md-2 pb-0  mb-0 ">
            
          </div>
          <div className="col-6 col-md-4 d-flex justify-content-md-evenly align-items-center pb-4">
            <Facebook />
            <Share />
            <Tweeter />
          </div>
          <div className=" col-12 p-0 p-md-3  ">
            <h1
              className="h1  text-warp">
             { singleNew?  singleNew.titulo : ""

             }
            </h1>
          </div>
        </div>
      </div>
   
      <section className="container-fluid p-0  p-lg-4 bg-secondary">
        <div className="row justify-content-start ">
          <div className="col-12 col-md-6 d-flex flex-column flex-md-row pt-3 ">
         
            <div className="d-flex flex-md-column justify-content-around m-md-3 p-0 text-primary ">
              <p className="fs-6 fs-md-3">iuyui</p>
              <p>Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="row g-0 g-md-5">
          <div className="col-12 pt-2 col-md-6 border d-flex align-self-start justify-content-center p-5">
            <img src={singleNew.img}
             alt="" className="img-fluid w-100 rounded" />
          </div>
        
          <div className="col-12 col-md-6 px-3 px-md-3 pt-3 d-flex justify-content-center align-items-stretch border">
            <p className=""> 
              {singleNew? singleNew.cont : ""}
            
             </p>

          </div>
          <div className="col-12 d-flex justify-content-center py-4 px-3">
            <h4 className="alt-font text-primary fw-bold " >{singleNew?.desc}</h4>
          </div>
          <div className="col-12 col-lg-6 p-2">
            <div className="w-100 px-4 border d-flex flex-wrap justify-content-around  ">
          
     
          </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <p  className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, modi iure. Aliquam ipsa sunt quis harum doloribus veritatis, commodi deleniti. Debitis nam ut, iure mollitia expedita pariatur est cupiditate dignissimos, aut praesentium recusandae, molestiae dolorum possimus facere illo eum quis? Harum voluptas odit dolore quod, assumenda id reiciendis voluptatum ratione. Labore fugit quae officia voluptatum veniam est odio eveniet corporis amet maxime? Doloribus tenetur ducimus tempore nam laudantium voluptate possimus maxime odio, veniam nulla voluptates assumenda! Voluptas quo recusandae obcaecati repellat ab doloremque consectetur magni. Sed deleniti odit eius, consequatur mollitia maiores iste totam, laboriosam consectetur sapiente omnis voluptatem sint cumque praesentium. Laboriosam rerum voluptates quidem nisi facere voluptatem ad rem incidunt architecto, voluptatum delectus alias velit enim, magni commodi. Hic nam soluta suscipit eaque, fugiat eos blanditiis sunt beatae delectus veritatis distinctio ex, assumenda aliquam dolores eligendi perferendis quisquam ad, expedita ipsam? Dolorem illum veniam expedita officia facere voluptatibus inventore enim alias cupiditate, earum est nostrum laboriosam magni reiciendis nisi vitae exercitationem doloribus debitis nulla magnam nihil ab. Asperiores magnam, eum laborum quas pariatur animi! Ipsa ipsum, reprehenderit iure mollitia distinctio modi voluptatem cupiditate illo maiores eos sed nostrum, blanditiis laboriosam magnam deleniti dolor consectetur iusto tempore! Suscipit, doloremque?</p>
          </div>

        </div>
      </section>
    </div>
  );
};
