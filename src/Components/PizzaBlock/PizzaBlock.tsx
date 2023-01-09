import React from "react";
import { pizzaType } from "../../Pages/Home";

import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../../redux/slisec/cartSlice";
import { NavLink } from "react-router-dom";
import { RootState } from "../../redux/store";

export const PizzaBlock = ({
  id,
  price,
  title,
  imageUrl,
  sizes,
  types,
}: pizzaType) => {
  const typeNames = ["тонкое", "традиционное"];

  const [activeType, setActiveType] = React.useState(0);
  const [activeSize, setActiveSize] = React.useState(0);

  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.cart);

  const pizza = cart.find((el) => el.id == id);

  const onAddToCart = () => {
    dispatch(
      setCart({
        id,
        price,
        title,
        imageUrl,
        size: sizes[activeSize],
        type: typeNames[activeType],
        count: 1,
      })
    );
  };

  const calculatePizzaPrice = (): number | undefined => {
    if (price) {
      let newPrice = price;
      if (sizes[activeSize] == 26) {
        return newPrice;
      } else if (sizes[activeSize] == 30) {
        newPrice = newPrice * 1.1;
        return Math.round(newPrice);
      } else if (sizes[activeSize] == 40) {
        newPrice = newPrice * 1.2;
        return Math.round(newPrice);
      }
    }
  };

  price = calculatePizzaPrice();

  return (
    <div className="pizza-block">
      <NavLink to={`/pizza/${id}`}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{title}</h4>
      </NavLink>
      <div className="pizza-block__selector">
        <ul>
          {types.map((el, index) => {
            return (
              <li
                onClick={() => setActiveType(index)}
                className={activeType == index ? "active" : ""}
                key={index}
              >
                {typeNames[el]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((el, index) => (
            <li
              onClick={() => setActiveSize(index)}
              className={activeSize == index ? "active" : ""}
              key={index}
            >
              {el} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">
          {price} ₽{" "}
          {(sizes[activeSize] == 30 && <span>+10%</span>) ||
            (sizes[activeSize] == 40 && <span>+20%</span>)}
        </div>
        <div
          onClick={onAddToCart}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          {pizza?.count && <i>{pizza?.count}</i>}
        </div>
      </div>
    </div>
  );
};
