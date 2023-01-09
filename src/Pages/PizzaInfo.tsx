import axios from "axios";
import React from "react";
import { NavLink, useParams } from "react-router-dom";

export const PizzaInfo = () => {
  const { id } = useParams();
  console.log(id);

  type PizzaInfo = {
    title: string;
    price: number;
    imageUrl: string;
  };

  const [pizza, setPizza] = React.useState<PizzaInfo>();

  React.useEffect(() => {
    const fetchPizza = async () => {
      const { data } = await axios.get(
        `https://63a88da5f4962215b584afa5.mockapi.io/items/${id}`
      );
      setPizza(data);
    };
    fetchPizza();
  }, []);

  return (
    <div className="container fullPizza__container">
      <img className="" src={pizza?.imageUrl} alt="" />
      <h2>{pizza?.title}</h2>
      <p>
        Пи́цца — традиционное итальянское блюдо в виде круглой дрожжевой лепёшки,
        выпекаемой с уложенной сверху начинкой из томатного соуса, сыра и
        зачастую других ингредиентов, таких как мясо, овощи, грибы и других
        продуктов. Небольшую пиццу иногда называют пиццеттой.
      </p>
      <h4>{pizza?.price} грн</h4>
      <NavLink to="/">
        <button className="fullPizza-btn button button--outline button--add">
          Назад
        </button>
      </NavLink>
    </div>
  );
};
