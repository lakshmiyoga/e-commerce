import React, { Fragment, useEffect, useState } from 'react'
import MetaData from './Layouts/MetaData'
import { getProducts } from '../actions/productsActions'
import { useDispatch, useSelector } from 'react-redux'
import Loader from './Layouts/Loader'
import Product from './Product/Product'
import { toast } from 'react-toastify';




const Vegetables = () => {

    const dispatch = useDispatch();
    const { products, loading, error } = useSelector((state) => state.productsState);
    
   console.log(products);

    useEffect(() => {
        if (error) {
            return toast.error(error, { position: "bottom-center" });
        }
        dispatch(getProducts());

    }, [error, dispatch])
   

    const vegetable = products ? products.filter((product) => product.category === 'Vegetables') : [];

    return (
        <Fragment>
            {loading ? <Loader /> :
                <Fragment>
                    <MetaData title={'Buy Best Products'} />
                    <h1 id="products_heading">Vegetables</h1>
                    {
                        vegetable.length === 0 ? (
                            <h2 style={{textAlign:'center'}}>Product not found</h2>
                        ) : (
                            <section id="products" className="container mt-5">
                                <div className="row">
                                    {/* {vegetable && vegetable.map(product => (

                                        <Product key={product._id} product={product} />

                                    ))} */}
                                    <Product products={products} />

                                </div>
                            </section>
                        )
                    }

                </Fragment>
            }
        </Fragment>
    )
}

export default Vegetables
