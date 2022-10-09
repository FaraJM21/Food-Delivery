import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./routes/Layout";
// import Home from "./routes/Home";
// import Restaurants from "./routes/Restaurants";
// import Cart from "./routes/Cart";
// import Profile from "./routes/Profile";
// import Burgers from "./routes/Burgers";
// import Pizza from "./routes/Pizza";
// import Soup from "./routes/Soup";
// import Chicken from "./routes/Chicken";
// import Cakes from "./routes/Cakes";
// import Cocktails from "./routes/Cocktails";
// import Registr from "./routes/Registr";
// import ProtectedRoutes from "./routes/ProtectedRoutes";
// import Payment from "./routes/Payment";

import {
  Layout,
  Home,
  Restaurants,
  Cart,
  Profile,
  Burgers,
  Pizza,
  Soup,
  Chicken,
  Cakes,
  Cocktails,
  Registr,
  ProtectedRoutes,
  Payment,
  ErrorPage,
} from "./routes/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="*" element={<ErrorPage />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route element={<ProtectedRoutes />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="register" element={<Registr />}></Route>
            <Route path="restaurant" element={<Restaurants />}></Route>
            <Route path="burgers" element={<Burgers />}></Route>
            <Route path="pizza" element={<Pizza />}></Route>
            <Route path="soups" element={<Soup />}></Route>
            <Route path="chickens" element={<Chicken />}></Route>
            <Route path="cakes" element={<Cakes />}></Route>
            <Route path="cocktails" element={<Cocktails />}></Route>
            <Route path="cart" element={<Cart />}></Route>
            <Route path="payment" element={<Payment />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
