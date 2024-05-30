import React, { useEffect } from 'react';
import { Link } from "react-router-dom"
import { getProducts } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import Loader from './Layouts/Loader';
import Search from './Layouts/Search';

const LandingPage = () => {
  // const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.productsState);
  

  // //  console.log(products);

  //   useEffect(() => {
  //       if (error) {
  //           return toast.error(error, { position: "bottom-center" });
  //       }
  //       dispatch(getProducts());

  //   }, [error, dispatch])
  return (
    <div>
      
      <div className="products_heading">Home</div>
      

      <div className="container " style={{ marginTop: '60px' }}>

        {
          loading ? <Loader /> : (
            <div className="row d-flex justify-content-center">
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
                      <h2>Keerai</h2>
                    </h5>
                  </div>
                </div>
              </div>

            </div>
          )
        }

      </div>
    </div>
  );
};

export default LandingPage;
