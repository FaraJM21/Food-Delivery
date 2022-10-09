import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
