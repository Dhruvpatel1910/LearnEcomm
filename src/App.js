import React from "react";
//import { Counter } from './features/counter/Counter';
import "./App.css";
import Home from "./features/pages/Home";
import LoginPage from "./features/pages/LoginPage";
import SignupPage from "./features/pages/SignupPage";
import ProductDetailspage from "./features/pages/ProductDetailspage";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import CartPage from "./features/pages/CartPage";
import Checkout from "./features/pages/Checkout";
import Protected from "./features/component/Protected";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectLoggedInUser } from './features/auth/authSlice';
import { fetchItemsByUserIdAsync } from './features/cart/cartSlice';
import PageNotFound from "./features/pages/404page";
import OrderSuccessPage from "./features/pages/OrderSuccessPage";
import UserOrdersPage from "./features/pages/UserOrdersPage";
//import UserProfile from "./features/user/components/UserProfile";
import UserProfilePage from "./features/pages/UserProfilePage";
import { fetchLoggedInUserAsync } from "./features/user/userSlice";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Protected>
        <Home></Home>
      </Protected>
    ),
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/checkout",
    element: (
      <Protected>
        <Checkout></Checkout>
      </Protected>
    ),
  },
  {
    path: "/ProductDetails/:id",
    element: (
      <Protected>
        <ProductDetailspage></ProductDetailspage>
      </Protected>
    ),
  },
  {
    path: "/cart",
    element: (
      <Protected>
        <CartPage></CartPage>
      </Protected>
    ),
  },
  {
    path: '*',
    element: (
      <PageNotFound></PageNotFound>
    ),
  },
  {
    path: '/OrderSuccessPage/:id',
    element: (
      <OrderSuccessPage></OrderSuccessPage>
    ),
  },
  {
    path: '/orders',
    element: (
      <UserOrdersPage></UserOrdersPage>
      // we will add Page later right now using component directly.
    ),
  },
  {
    path: '/profile',
    element: (
      <UserProfilePage></UserProfilePage>
      // we will add Page later right now using component directly.
    ),
  },  
  
  
      
]);

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(()=>{
    if(user){
      dispatch(fetchItemsByUserIdAsync(user.id))
      dispatch(fetchLoggedInUserAsync(user.id))
    }
  },[dispatch, user])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
