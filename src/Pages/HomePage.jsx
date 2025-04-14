import { useState } from "react";
import { LatestNewsCard } from "../Components/LatestNewsCard";
import { OtherNewsCard } from "../Components/OtherNewsCard";
import { TopicCard } from "../Components/TopicCard";
import { TrendyNowCard } from "../Components/TrendyNowCard";
import TopHeadlines from "../Mocks/TopHeadlines.json";

export const HomePage = () => {
  const [tops, settops] = useState(TopHeadlines.articles);

  return (
    <>
      <section className="container-fluid pb-4 p-1 p-sm-4 d-flex justify-content-center align-items-center">
        <div className="row p-2">
          <div className="col-12"></div>
          <h1 className="h1 display-1">Each One Teach One</h1>
        </div>
      </section>
      <h2 className="h2 display-3">LATEST NEWS</h2>
      <section className="container-fluid pb-4 p-1 p-sm-4 ">
        <div className="row align-items-end">
          <div className="col-6">
            <LatestNewsCard noticia={tops[0]}></LatestNewsCard>
          </div>
          <div className="col-3">
            {" "}
            <OtherNewsCard noticia={tops[0]}></OtherNewsCard>
          </div>
          <div className="col-3 ">
            {" "}
            <TopicCard></TopicCard>
          </div>
          <div className="col-12">
            <TrendyNowCard></TrendyNowCard>
          </div>
        </div>
        <div className="row p-4  g-2 px-6 align-items-end "></div>
      </section>

      <section className="container-fluid p-1 p-sm-4 mt-4">
        <div className="row ps-4 pt-3 display-5"></div>
      </section>

      <section className="conteiner p-1 p-sm-4 pb-4">
        <div className="row ps-4 pt-3 display-5"></div>
      </section>

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
              <div className="col-12  col-md-4 col-lg-3 my-4">
                <TopicCard />
              </div>
              <div className="col-12  col-md-4 col-lg-4 my-4">
                <TopicCard />
              </div>
              <div className="col-12  col-md-4 col-lg-5  my-4 ">
                <TopicCard />
              </div>
            </div>
            <div className="row pb-2 mb-2 align-items-end  ">
              <div className="col-12  col-md-4 col-lg-6 my-4">
                <TopicCard />
              </div>
              <div className="col-12  col-md-4 col-lg-3 my-4">
                {" "}
                <TopicCard />
              </div>
              <div className="col-12  col-md-4 col-lg-3 my-4">
                {" "}
                <TopicCard />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 pb-3 my-4 ps-4  d-flex justify-content-center">
            <TopicCard />
          </div>
        </div>
      </section>
    </>
  );
};
