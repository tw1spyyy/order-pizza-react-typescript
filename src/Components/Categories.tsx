import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCategoryItem } from "../redux/slisec/filterSlice";
import { RootState } from "../redux/store";

type categoryType = {
  id: string;
  value: string;
};

const categoriesArray: categoryType[] = [
  { id: "0", value: "Все" },
  { id: "1", value: "Мясные" },
  { id: "2", value: "Вегетарианская" },
  { id: "3", value: "Гриль" },
  { id: "4", value: "Острые" },
  { id: "5", value: "Закрытые" },
];

export const Categories: React.FC = () => {
  const dispatch = useDispatch();
  const categoryItem = useSelector(
    (state: RootState) => state.filter.categoryItem
  );

  const onClickCategories = (num: string) => {
    dispatch(setCategoryItem(num));
  };

  return (
    <div className="categories">
      <ul>
        {categoriesArray.map((el: categoryType) => (
          <li
            onClick={() => onClickCategories(el.id)}
            className={categoryItem == el.id ? "active" : ""}
            key={el.id}
          >
            {el.value}
          </li>
        ))}
      </ul>
    </div>
  );
};
