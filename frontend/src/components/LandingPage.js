import React from 'react';
import {Link} from "react-router-dom"

const LandingPage = () => {
  return (
    <div className="container" style={{marginTop:'100px'}}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
          <Link to="/allProducts">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="card-img-top mx-auto"
              src="../images/all.jpg"
              alt="all"
            />
            </div>
            </Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title" >
                <h2>All</h2>
              </h5>
            </div>
          </div>
        </div>
        
        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
          <Link to="/vegetables">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="card-img-top mx-auto"
              src="../images/vegetables.jpg"
              alt="Vegetables"
            />
            </div>
            </Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <h2>Vegetables</h2>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
          <Link to="/fruits">
          <div className="d-flex justify-content-center align-items-center">
            <img
              className="card-img-top mx-auto"
              src="../images/fruits.jpg"
              alt="fruits"
            />
            </div>
            </Link>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <h2>Fruits</h2>
              </h5>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
          <div className="card p-3 rounded">
            <img
              className="card-img-top mx-auto"
              src="../images/celeries.jpg"
              alt="celeries"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">
                <h2>Celeries</h2>
              </h5>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
