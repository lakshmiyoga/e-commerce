import React,{useState, Fragment} from 'react'
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
    // console.log("product", product)

  
    return (

        <div className="col-sm-12 col-md-6 col-lg-3 my-3">
            {product &&
                <div className="card p-3 rounded mx-auto">
                    {product && product.images[0] && product.images[0].image &&
                        <img
                            className=" img-fluid card-img-top mx-auto"
                            src={product.images[0].image}
                            alt={product.name}
                        />}
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">
                            <Link to={`/product/${product._id}`}>{product.name}</Link>
                        </h5>
                        <div className="ratings mt-auto">
                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                            </div>
                            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
                        </div>
                        <p className="card-text">${product.price} (per kg)</p>
                        {/* <a href="#" id="view_btn" className="btn btn-block">View Details</a> */}
                        

                    </div>
                </div>

            }

        </div>
    )
}

export default Product
