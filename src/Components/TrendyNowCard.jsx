import React from "react";
import { Link } from "react-router-dom";

export const TrendyNowCard = () => {
  return (
    <article>
    <Link to={"/single"} >
    <div className="row card-trendy w-100 rounded-4">
      <div className="col-12 col-md-2 p-3">
        <p className="fs-6 text-primary" >May, 13 2023</p>
      </div>
      <div className="col-12 col-md-10 p-3">
      <p className="fs-2  text-primary " >Madev Wdj0af vivhr9u8 rhibetuibhtebuih</p>
      </div>
      
    </div>
    </Link>
    </article>
    
  );
};
