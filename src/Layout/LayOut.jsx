import React from 'react'

export const Header = ({children}) => {
  return (
    <> 
    <div className="container-fluid">
    <div className="row border p-4 bg-primary">
      <div className="col-12 col-sm-9 border d-flex justify-content-around p-2 rounded-pill me-4 bg-secondary">
        <div className="col-2 text-center">Home</div>
        <div className="col-2 text-center">Gadgets</div>
        <div className="col-2 text-center">Reviews</div>
        <div className="col-2 text-center">Reviews</div>
        <div className="col-2 text-center">Reviews</div>
        </div>
      <div className="col-12 col-sm-2 border rounded-pill bg-secondary"></div>
    </div>
  </div>
  {
    children
  }
<footer className="bg-dark text-white text-center py-3 mt-4">
    <div className="container">
        <p className="mb-0">© 2023 Each-one-Tech-one. All rights reserved.</p>
        <p className="mb-0">
            Follow us on 
            <a href="https://facebook.com" className="text-white mx-2">Facebook</a> | 
            <a href="https://twitter.com" className="text-white mx-2">Twitter</a> | 
            <a href="https://instagram.com" className="text-white mx-2">Instagram</a>
        </p>
    </div>
</footer>
  </>
  )
}
