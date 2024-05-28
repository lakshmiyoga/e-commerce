import { createAsyncThunk } from '@reduxjs/toolkit';
import {addCartItemRequest, addCartItemSuccess} from '../slices/cartSlice';
import axios from 'axios'

export const addCartItem = createAsyncThunk('post/orderItem', async({id, quantity},{dispatch}) => {
    try {
        dispatch(addCartItemRequest())
        const {data } = await axios.get(`/api/v1/product/${id}`)
        // console.log(data);
        dispatch(addCartItemSuccess({
            product: data.product._id,
            name: data.product.name,
            price: data.product.price,
            image: data.product.images[0].image,
            quantity
        }))
    } catch (error) {
        
    }
})