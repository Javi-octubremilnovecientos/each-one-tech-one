
import { useState } from "react";
import { LatestNewsCard } from "../Components/LatestNewsCard";
import { OtherNewsCard } from "../Components/OtherNewsCard";
import { TopicCard } from "../Components/TopicCard";
import { TrendyNowCard } from "../Components/TrendyNowCard";
import  TopHeadlines from "../Mocks/TopHeadlines.json"

export const HomePage = () => {

 const [tops, settops] = useState(TopHeadlines.articles)

return (
    <>
      <section></section>
      <span className="separador"></span>
      <section className="container-fluid pb-4 p-1 p-sm-4">
        <div className="row ps-4 pt-3 display-5 ">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
            LATEST NEWS
          </h4>
        </div>
        <div className="row p-4  g-2 px-6 align-items-end ">
         
          {
            tops && tops.map((article) => (
              article === tops[0]? (<div className="col-12 col-md-10 col-lg-6 d-flex align-content-end" 
              key={article.title}>
                <LatestNewsCard
                 title={article.title}
                  date={article.publishedAt} 
                  img={article.image} />
              </div>) : ( 
               <div className="col-12 col-md-6 col-lg-3 mb-2 gx-0 p-2">
            <OtherNewsCard 
              key={article.title}
              title={article.title}
              date={article.publishedAt}
              img={article.image}/>
             </div>)
              
            ))
          }
         
         
        </div>
      </section>
      <span className="separador"></span>
      <section className="container-fluid p-1 p-sm-4 mt-4">
        <div className="row ps-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
           TOPICS
          </h4>
        </div>
        <div className="row p-4 flex-wrap ">
          <div className="col-12 col-md-6 col-lg-3 pb-3">
            <TopicCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-3 ">
            <TopicCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-3">
            <TopicCard />
          </div>
          <div className="col-12 col-md-6 col-lg-3 pb-3">
            <TopicCard />
          </div>
        </div>
      </section>
      <span className="separador"></span>
      <section className="conteiner p-1 p-sm-4 pb-4">
        <div className="row ps-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
            TRENDY NOW
          </h4>
        </div>
        <div className="row p-4">
          <div className="col-12 mb-4">
            <TrendyNowCard />
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard />
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard />
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard />
          </div>
          <div className="col-12 mb-4">
            <TrendyNowCard />
          </div>
        </div>
      </section>
      <span className="separador"></span>
      <section className="container-fluid p-2 p-sm-4">
        <div className="row ps-1 p-sm-4 pt-3 display-5">
          <h4
            className="h3 mb-4 text-primary"
            style={{ fontFamily: "Neue-Bold" }}
          >
           RAPSHODY
          </h4>
        </div>
        <div className="row w-100  m-2 px-1 px-sm-3 g-2 gx-md-4">
          <div className="col-12 col-md-12 col-lg-8 ">
            <div className="row  mb-2">
              <div className="col-12  col-md-4 col-lg-3 my-4"><TopicCard/></div>
              <div className="col-12  col-md-4 col-lg-4 my-4"><TopicCard/></div>
              <div className="col-12  col-md-4 col-lg-5  my-4 "><TopicCard/></div>
            </div>
            <div className="row pb-2 mb-2 align-items-end  ">
              <div className="col-12  col-md-4 col-lg-6 my-4"><TopicCard/></div>
              <div className="col-12  col-md-4 col-lg-3 my-4"> <TopicCard/></div>
              <div className="col-12  col-md-4 col-lg-3 my-4"> <TopicCard/></div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 pb-3 my-4 ps-4  d-flex justify-content-center"><TopicCard/></div>
        </div>
      </section>
    </>
  );
};
