import React, { Fragment } from 'react'
import MetaData from '../Layouts/MetaData'
import { validateShipping } from './Shipping';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import StepsCheckOut from './StepsCheckOut';

const ConfirmOrder = () => {
    const { shippingInfo, items: cartItems } = useSelector(state => state.cartState);
    const { user } = useSelector(state => state.authState);
    const navigate = useNavigate();

console.log(shippingInfo)
    const shippingCharge = 30.0;

    // Calculate the subtotal
    const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.productWeight, 0).toFixed(2);

    // Calculate the total
    const total = (parseFloat(subtotal) + shippingCharge).toFixed(2);

    const processPayment = () => {
        const data = {
            subtotal,
            shippingCharge,
            total
        }
        sessionStorage.setItem('orderInfo', JSON.stringify(data))
        navigate('/payment')
    }

    useEffect(() => {
        if(shippingInfo){
            validateShipping(shippingInfo, navigate)
        }
       
    }, [shippingInfo])


    return (
        <Fragment>
            <MetaData title={'confirm order'} />
            <StepsCheckOut shipping confirmOrder/>
            <div className="row d-flex justify-content-between">
                <div className="col-12 col-lg-8 mt-5 order-confirm">

                    <h4 className="mb-3">Shipping Info</h4>
                    <p><b>Name:</b>  {user.name}</p>
                    <p><b>Phone:</b> {shippingInfo.phoneNo}</p>
                    <p className="mb-4"><b>Address:</b> {shippingInfo.address}, {shippingInfo.city}, {shippingInfo.postalCode}, {shippingInfo.state}, {shippingInfo.country}</p>

                    <hr />
                    <h4 className="mt-4">Your Cart Items:</h4>

                    <hr />
                    {cartItems.map(item => (
                        <Fragment>
                            <div className="cart-item my-1">
                        <div className="row">
                            <div className="col-4 col-lg-2">
                                <img src={item.image} alt={item.name}  height="45" width="65" />
                            </div>

                            <div className="col-5 col-lg-6">
                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                            </div>


                            <div className="col-4 col-lg-4 mt-4 mt-lg-0">
                                <p>{item.productWeight} x ${item.price} = <b>${item.productWeight * item.price}</b></p>
                            </div>

                        </div>
                    </div>
                    <hr />
                        </Fragment>
                    ))}
                    

                </div>

                <div className="col-12 col-lg-3 my-4">
                    <div id="order_summary">
                        <h4>Order Summary</h4>
                        <hr />
                        <p>Subtotal:  <span className="order-summary-values">Rs.{subtotal}</span></p>
                        <p>Shipping: <span className="order-summary-values">Rs.{shippingCharge.toFixed(2)}</span></p>
                       

                        <hr />

                        <p>Total: <span className="order-summary-values">Rs.{total}</span></p>

                        <hr />
                        <button id="checkout_btn" className="btn btn-primary btn-block" onClick={processPayment}>Proceed to Payment</button>
                    </div>
                </div>


            </div>
        </Fragment>
    )
}

export default ConfirmOrder
