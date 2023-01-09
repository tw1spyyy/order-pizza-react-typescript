import React from "react";
import { Header } from "./Components/Header";
import { Cart } from "./Pages/Cart";
import { Home } from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import "./scss/app.scss";
import { NotFound } from "./Pages/NotFound";
import { PizzaInfo } from "./Pages/PizzaInfo";
import { PayPage } from "./Pages/PayPage";

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaInfo />} />
          <Route path="/payPage" element={<PayPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
