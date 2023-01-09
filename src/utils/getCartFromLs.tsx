import React from "react";

export const getCartFromLs = () => {
  const data = localStorage.getItem("cart");
  let cart = data ? JSON.parse(data) : [];
  let totalPrice = 0;
  cart.forEach((el: any) => (totalPrice += el.price * el.count));

  return { cart, totalPrice };
};
