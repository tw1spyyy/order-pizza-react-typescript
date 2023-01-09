import axios from "axios";
import React from "react";

import { Categories } from "../Components/Categories";
import { Pagination } from "../Components/Pagination/Pagination";
import { PizzaBlock } from "../Components/PizzaBlock/PizzaBlock";
import { Sort } from "../Components/Sort";

import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../redux/slisec/filterSlice";
import { RootState } from "../redux/store";
import { PizzaSkeleton } from "../Components/PizzaBlock/PizzaSkeleton";

export type pizzaType = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number | undefined;
};

export const HomeContext = React.createContext<any>("");

export const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<any>(true);

  const dispatch = useDispatch();
  const { currentPage, categoryItem, activeSort, searchValue } = useSelector(
    (state: RootState) => state.filter
  );
  const cart = useSelector((state: RootState) => state.cart.cart);

  React.useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const onChangePage = (num: number) => {
    dispatch(setCurrentPage(num));
  };

  const fetchPizzas = async () => {
    setIsLoading(true);
    const filter = `?page=${currentPage}&limit=4&${
      Number(categoryItem) > 0 ? `category=${categoryItem}` : ""
    }&sortBy=${activeSort.value}&order=desc&search=${searchValue}`;
    const { data } = await axios.get(
      `https://63a88da5f4962215b584afa5.mockapi.io/items${filter}`
    );
    setPizzas(data);
    setIsLoading(false);
  };

  React.useEffect(() => {
    fetchPizzas();
  }, [currentPage, categoryItem, activeSort, searchValue]);

  return (
    <div className="container">
      <HomeContext.Provider value={{ currentPage, onChangePage }}>
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <ContentTitle />
        <div className="content__items">
          {isLoading
            ? [...Array(4)].map((el, index) => <PizzaSkeleton key={index} />)
            : pizzas.map((item: pizzaType) => (
                <PizzaBlock key={item.id} {...item} />
              ))}
        </div>
        <Pagination />
      </HomeContext.Provider>
    </div>
  );
};

const ContentTitle = () => {
  return <h2 className="content__title">Все пиццы</h2>;
};
