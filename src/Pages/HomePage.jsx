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
      <section
        className="container-fluid d-flex justify-content-center align-items-center bg-md-gradient"
        id="hero"
      >
        <div className="row p-2">
          <div className="col-12">
            <h1 className="h1 display-1">
              <span className="alt-font-thin ">Each</span> One <br />
              Tech
              <span className="alt-font-thin"> One</span>
            </h1>
            <h3 className="text-center">Where tech Meets</h3>
          </div>
        </div>
      </section>
      <section
        className="container-fluid pb-4 p-1 p-sm-4  bg-secondary  pb-4"
        id="latest-news"
      >
        <div className="row p-4 mb-3">
          <div className="col-12 py-2 border-top border-primary border-2">
            <h2 className="h2 display-3">LATEST NEWS</h2>
          </div>
        </div>
        <div className="row align-items-end px-3 gx-2 gy-5">
          {tops &&
            tops.map((noticia, index) =>
              index === 0 ? (
                <div className="col-12 col-lg-6">
                  <LatestNewsCard noticia={noticia}></LatestNewsCard>
                </div>
              ) : (
                <div className="col-12 col-md-4 col-lg-3">
                  <OtherNewsCard noticia={noticia}></OtherNewsCard>
                </div>
              )
            )}
        </div>
        <div className="row p-4  g-2 px-6 align-items-end "></div>
      </section>

      <section
        className="container-fluid p-1 p-sm-4 pb-4 bg-secondary"
        id="topics"
      >
        <div className="row p-4 mb-3">
          <div className="col-12 py-2 border-top border-primary border-2">
            <h2 className="h2 display-3">ALL TOPICS</h2>
          </div>
        </div>
        <div className="row  align-items-end px-3 gx-3 gy-3 gy-md px-4 pb-5">
          <div className="col-12  col-md-6  col-lg-3">
            <TopicCard />
          </div>
          <div className="col-12  col-md-6  col-lg-3">
            <TopicCard />
          </div>
          <div className="col-12  col-md-6  col-lg-3">
            <TopicCard />
          </div>
          <div className="col-12  col-md-6  col-lg-3">
            <TopicCard />
          </div>
        </div>
      </section>

      <section
        className="conteiner-fluid p-1 p-sm-4 pb-4 bg-secondary"
        id="trendy"
      >
        <div className="row p-4 mb-3">
          <div className="col-12 py-2 border-top border-primary border-2">
            <h2 className="h2 display-3">TRENDY NOW</h2>
          </div>
        </div>
        <div className="row p-3 px-md-5">
          <TrendyNowCard />
          <TrendyNowCard />
          <TrendyNowCard />
          <TrendyNowCard />
          <TrendyNowCard />
        </div>
      </section>

      <section
        className="container-fluid p-1 p-sm-4 bg-secondary"
        id="rapshody"
      >
        <div className="row p-4 mb-3">
          <div className="col-12 py-2 border-top border-primary border-2">
            <h2 className="h2 display-3">TECH RAPSODHY</h2>
          </div>
        </div>

        <div className="row  align-items-end px-3">
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
                <TopicCard />
              </div>
              <div className="col-12  col-md-4 col-lg-3 my-4">
                <TopicCard />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 pb-3 ">
            <TopicCard />
          </div>
        </div>
      </section>
    </>
  );
};
