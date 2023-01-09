import { createSlice } from "@reduxjs/toolkit";
import { getCartFromLs } from "../../utils/getCartFromLs";

export type CartType = {
  id: string;
  imageUrl: string;
  title: string;
  type: string;
  size: number;
  price: number;
  count: number;
};

interface stateType {
  cart: CartType[];
  totalPrice: number;
}

const { cart, totalPrice } = getCartFromLs();

const initialState: stateType = {
  cart,
  totalPrice,
};

const findSamePizza = (state: any, action: any) => {
  return state.cart.find(
    (el: CartType) =>
      el.id == action.payload.id &&
      el.size == action.payload.size &&
      el.type == action.payload.type
  );
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart(state, action) {
      const samePizza = findSamePizza(state, action);
      if (samePizza) {
        samePizza.count++;
      } else {
        state.cart.push(action.payload);
      }
      state.totalPrice += action.payload.price;
    },
    addCartItem(state, action) {
      const samePizza = findSamePizza(state, action);
      if (samePizza) {
        samePizza.count++;
        state.totalPrice += samePizza.price;
      }
    },
    minusCartItem(state, action) {
      const samePizza = findSamePizza(state, action);
      if (samePizza) {
        if (samePizza.count !== 1) {
          samePizza.count--;
          state.totalPrice -= samePizza.price;
        }
      }
    },
    removeItem(state, action) {
      const samePizza = findSamePizza(state, action);
      state.cart = state.cart.filter((el) => el !== samePizza);
      state.totalPrice = 0;
      state.cart.forEach((el) => (state.totalPrice += el.price * el.count));
    },
    clearAllCart(state, action) {
      console.log(action.payload);
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

export const { setCart, addCartItem, minusCartItem, removeItem, clearAllCart } =
  cartSlice.actions;

export default cartSlice.reducer;
