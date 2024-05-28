import React from 'react'
import { Link, useParams } from 'react-router-dom';
import AddCart from './AddCart';



const Product = ({ products }) => {
    // console.log("product", products)
    const {id} = useParams();

  
    // return (

    //     <div className="col-sm-12 col-md-6 col-lg-3 my-3">
    //         {product &&
    //             <div className="card p-3 rounded mx-auto">
    //                 {product && product.images[0] && product.images[0].image &&
    //                     <img
    //                         className=" img-fluid card-img-top mx-auto"
    //                         src={product.images[0].image}
    //                         alt={product.name}
    //                     />}
    //                 <div className="card-body d-flex flex-column">
    //                     <h5 className="card-title">
    //                         <Link to={`/product/${product._id}`}>{product.name}</Link>
    //                     </h5>
    //                     <div className="ratings mt-auto">
    //                         <div className="rating-outer">
    //                             <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
    //                         </div>
    //                         <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
    //                     </div>
    //                     <p className="card-text">${product.price} (per kg)</p>
    //                     {/* <a href="#" id="view_btn" className="btn btn-block">View Details</a> */}
    //                     <AddCart productId={product._id}  />
                        
                        

    //                 </div>
    //             </div>

    //         }

    //     </div>
    // )

    return (
        <div className="container mt-5">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Ratings</th>
                        <th>Reviews</th>
                        <th>Price</th>
                        <th>Add to Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {products && products.map(product => (
                        <tr key={product._id}>
                            <td>
                                {product.images[0] && product.images[0].image && (
                                    <img
                                        className="img-fluid"
                                        src={product.images[0].image}
                                        alt={product.name}
                                        style={{ width: '100px' }}
                                    />
                                )}
                            </td>
                            <td>
                                <Link to={`/product/${product._id}`}>{product.name}</Link>
                            </td>
                            <td>
                                <div className="rating-outer">
                                    <div className="rating-inner" style={{ width: `${product.ratings / 5 * 100}%` }}></div>
                                </div>
                            </td>
                            <td>{product.numOfReviews}</td>
                            <td>${product.price} (per kg)</td>
                            <td>
                                <AddCart productId={product._id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Product
