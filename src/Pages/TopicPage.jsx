import React from 'react'
import { LatestNewsCard } from '../Components/LatestNewsCard'
import { OtherNewsCard } from '../Components/OtherNewsCard'

export const TopicPage = () => {
  return (
    <>
    <div className="container-fluid m-0 pb-0  ">
      <div className="row  ps-4 pt-5 pb-0 m-0 gy-1 border"> 
        <div className="col-12 p-3  ">
          <h1 className='h1 display-2'>Arts</h1>
        </div>
        <div className="col-12 d-flex ps-2 pb-0 border  mb-0">
          <button className='btn m-1 btn-md border border-2 border-primary rounded-pill text-primary'>Geofa</button>
          <button className='btn m-1 btn-md border border-2 border-primary rounded-pill text-primary'>Geofklñklña</button>
          <button className='btn m-1 btn-md border border-2 border-primary rounded-pill text-primary'>Geofalñkñlk</button>
          <button className='btn m-1 btn-md border border-2 border-primary rounded-pill text-primary'>Gea</button>
 
        </div>
      </div>
     
    </div>
    <span className='separador'></span>
    <section className='container-fluid mt-2 pt-4 px-3 d-flex flex-column justify-content-end'>
        <div className="row p-4  gy-4  ">
                  <div className="col-12 col-md-6 p-3 ">
                    <LatestNewsCard />
                  </div>
                  <div className="col-12 col-md-3 mb-2  p-3">
                    <OtherNewsCard />
                  </div>
                  <div className="col-12 col-md-3 mb-2  p-3">
                    <OtherNewsCard />
                  </div>
                  <div className="col-12 col-md-3 mb-2  p-3">
                   
                  </div>
                  <div className="col-12 col-md-3 mb-2  p-3">
                    <OtherNewsCard />
                  </div>
                  <div className="col-12 col-md-3 mb-2  p-3">
                    <OtherNewsCard />
                  </div>
                 
                  <div className="col-12 col-md-3 mb-2  p-3">
                    <OtherNewsCard />
                  </div>
                
      </div>
      <button className='btn btn-lg border border-primary border-2 rounded-pill align-self-end m-4'>see all</button>
      <div className="separador"></div>
    

    </section>
    </>
  )
}
