import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './Layouts/MetaData'
import { getProducts } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Layouts/Loader'
import Product from './Product/Product'
import { toast } from 'react-toastify';


const Home = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsState)
   
    const categories = [
        'All category',
        'Vegetables',
        'Fruits'
    ];

    const [category, setCategory] = useState('All category');

    console.log(category);


    console.log(categories)

    useEffect(() => {
        if (error) {
            toast.error(error, { position: "bottom-center" });
        }
        if (category === 'All category') {
            dispatch(getProducts({})); // Fetch all products
        } else {
            dispatch(getProducts({ category })); // Fetch products by category
        }
    }, [error, dispatch, category]);


    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />


                    {/* <h1 id="products_heading">All Products</h1> */}

                    {/* Category Filter */}


                    <div className=" mt-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <h4 className="mb-3">Shop By Categories</h4>
                                <select
                                    onChange={(e)=>setCategory(e.target.value)}
                                    className="dropdown_control"
                                    value={category}
                                >
                                    {categories.map((item, index) => (
                                        <option key={index} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    {
                        categories === 'category' && (  <section id="products" className=" mt-5">
                        <div className="row">
                            {products && products.map(product => (

                                <Product key={product._id} product={product} />

                            ))}

                        </div>
                    </section>

                        )
                    }
                    <section id="products" className=" mt-5">
                        <div className="row">
                            {products && products.map(product => (

                                <Product key={product._id} product={product} />

                            ))}

                        </div>
                    </section>
                </Fragment>
            }
        </Fragment>
    )
}

export default Home
