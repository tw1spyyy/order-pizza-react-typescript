import React from "react";

import { CartBottom } from "../Components/CartComponents/CartBottom";
import { CartItem } from "../Components/CartComponents/CartItem";
import { CartTop } from "../Components/CartComponents/CartTop";

import { useSelector } from "react-redux";
import { CartType } from "../redux/slisec/cartSlice";
import { RootState } from "../redux/store";
import { CartEmpty } from "../Components/CartComponents/CartEmpty";

export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.cart);

  return (
    <div className="content">
      <div className="container container--cart">
        {cart.length == 0 ? (
          <CartEmpty />
        ) : (
          <div className="cart">
            <CartTop />
            <div className="content__items">
              {cart.map((item: CartType, index: number) => (
                <CartItem key={index} {...item} />
              ))}
            </div>
            <CartBottom />
          </div>
        )}
      </div>
    </div>
  );
};
