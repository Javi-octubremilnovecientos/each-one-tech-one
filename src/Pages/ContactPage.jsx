import React from 'react'
import { Facebook, Share, Tweeter} from '../assets/Icons'
import fondoFinal  from "../assets/img/fondoFinal.webp"

export const ContactPage = () => {
  return (
    <>
    <section className='container-fluid py-3 ' id='hero'>
      <div className="row justify-content-center">
      <div className="col-12 p-2 mt-3 ps-3 ms-5">
        <h1 className='h1 display-1 fw-bolder text-primary'>Contact Us</h1>
        </div>
      <div className="col-12 m-4 p-5 ">
        <img  className="img-fluid  rounded-4" src={fondoFinal} alt="" style={{aspectRatio:"3/1", objectFit:"cover"}}/>
      </div>
      <div className="col-6"></div>
      <div className="col-12 col-md-6 d-flex flex-column align-items-center">
        <p className='text fs-4'>
          eachonetechone@gmail.com
        </p>
        <p>Denver, CO</p>
        <strong>Follow us: </strong>
        <div className='d-flex justify-content-around w-25 mt-4'>
          <Tweeter/>
          <Facebook/>
          <Share/>
        </div>
      </div>
      </div>
    
    </section>
    </>
  )
}
