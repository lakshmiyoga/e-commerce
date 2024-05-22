import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { loginFail,
    loginRequest, 
    loginSuccess, 
    clearError,
    registerFail,
    registerRequest,
    registerSuccess,
    loadUserRequest,
    loadUserSuccess,
    loadUserFail, 
    logoutSuccess, 
    logoutFail,
    updateProfileRequest,
    updateProfileSuccess,
    updateProfileFail} from "../slices/authSlice";




export const login = createAsyncThunk('post/login', async ({email,password},{dispatch}) => {
    try {
       
              dispatch(loginRequest());
              const {data} = await axios.post(`/api/v1/login`, {email, password});
              console.log(data);
              dispatch(loginSuccess(data));
        } catch (error) {
              dispatch(loginFail(error.response.data.message));
        }
           
  })

  export const clearAuthError = dispatch =>{
    dispatch(clearError())
  }

  export const register = createAsyncThunk('post/register', async (userData,{dispatch}) => {
    try {
       
              dispatch(registerRequest());

              const config = {
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            }
              const {data} = await axios.post(`/api/v1/register`, userData, config);
              console.log(data);
              dispatch(registerSuccess(data));
        } catch (error) {
              dispatch(registerFail(error.response.data.message));
        }
           
  })

  export const loadUser = createAsyncThunk ('get/loadUser', async (_, { dispatch }) => {

    try {
        dispatch(loadUserRequest())
        const { data }  = await axios.get(`/api/v1/myProfile`);
        console.log(data)
        dispatch(loadUserSuccess(data))
        
    } catch (error) {
        dispatch(loadUserFail(error.response.data.message))
    }

})

export const logout =  async (dispatch) => {

  try {
      await axios.get(`/api/v1/logout`);
      dispatch(logoutSuccess())
  } catch (error) {
      dispatch(logoutFail())
  }

}

export const updateProfile = createAsyncThunk('put/updateProfile', async (userData,{dispatch}) => {
  try {
     
            dispatch(updateProfileRequest());

            const config = {
              headers: {
                  'Content-type': 'multipart/form-data'
              }
          }
            const {data} = await axios.put(`/api/v1/update`, userData, config);
            console.log(data);
            dispatch(updateProfileSuccess(data));
      } catch (error) {
            dispatch(updateProfileFail(error.response.data.message));
      }
         
})
