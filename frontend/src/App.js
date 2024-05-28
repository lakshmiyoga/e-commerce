
import './App.css';
import Footer from './components/Layouts/Footer';
import Header from './components/Layouts/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './components/Product/ProductDetail';
import ProductSearch from './components/Product/ProductSearch';
import Login from './components/user/Login';
import Register from './components/user/Register';
import { useEffect } from 'react';
import store from './store';
import { loadUser } from './actions/userActions';
import Dashboard from './components/admin/Dashboard';
import ProtectedRoute from './components/route/ProtectedRoute';
import ProductList from './components/admin/ProductList';
import NewProduct from './components/admin/NewProduct';
import UpdateProduct from './components/admin/UpdateProduct';
import Product from './components/Product/Product';
import LandingPage from './components/LandingPage';
import Vegetables from './components/Vegetables';
import Fruits from './components/Fruits';
import Profile from './components/user/Profile';
import UpdateProfile from './components/user/UpdateProfile';
import UpdatePassword from './components/user/UpdatePassword';
import ForgotPassword from './components/user/ForgotPassword';
import ResetPassword from './components/user/ResetPassword';
import Cart from './components/cart/Cart';
import Shipping from './components/cart/Shipping';
import ConfirmOrder from './components/cart/ConfirmOrder';

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    <Router>
      <div className="App">
        <HelmetProvider>
          <Header />
          <div className="container container-fluid">
            <ToastContainer theme="dark" />
            <Routes>
              <Route path='/' element={<LandingPage />}></Route>
              <Route path='/allProducts' element={<Home />} ></Route>
              <Route path='/vegetables' element={<Vegetables />} ></Route>
              <Route path='/fruits' element={<Fruits />} ></Route>
               {/* <Route path='/' element={<Home />} ></Route> */}
              <Route path='/search/:keyword' element={<ProductSearch />}></Route>
              <Route path='/product/:id' element={<ProductDetail />}></Route>
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/myProfile' element={<ProtectedRoute><Profile/></ProtectedRoute>}></Route>
              <Route path='/myProfile/update' element={<ProtectedRoute><UpdateProfile /></ProtectedRoute>}></Route>
              <Route path='/myProfile/update/password' element={<ProtectedRoute><UpdatePassword /></ProtectedRoute>}></Route>
              <Route path='/password/forgot' element={<ForgotPassword />}></Route>
              <Route path='/password/reset/:token' element={<ResetPassword />}></Route>
              <Route path='/cart' element={<Cart />}></Route>
              <Route path='/shipping' element={<ProtectedRoute><Shipping/></ProtectedRoute>}></Route>
              <Route path='/order/confirm' element={<ProtectedRoute><ConfirmOrder/></ProtectedRoute>}></Route>
            </Routes>
          </div>

          {/* Admin Routes */}
          <Routes>
          <Route path='/admin/dashboard' element={ <ProtectedRoute isAdmin={true}><Dashboard/></ProtectedRoute> } />
          <Route path='/admin/products' element={ <ProtectedRoute isAdmin={true}><ProductList/></ProtectedRoute> } />
          <Route path='/admin/products/create' element={ <ProtectedRoute isAdmin={true}><NewProduct/></ProtectedRoute> } />
          <Route path='/admin/product/:id' element={ <ProtectedRoute isAdmin={true}><UpdateProduct/></ProtectedRoute> } />
          </Routes>

          <Footer />
        </HelmetProvider>
      </div>
    </Router>
  );
}

export default App;
