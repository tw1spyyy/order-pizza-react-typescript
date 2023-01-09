import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setHideSort,
  SortArrayType,
  setActiveSort,
} from "../redux/slisec/filterSlice";
import { RootState } from "../redux/store";

type PopupClick = MouseEvent & {
  path: Node[];
};

const sortArray: SortArrayType[] = [
  { id: "0", text: "популярности", value: "rating" },
  { id: "1", text: "цене", value: "price" },
  { id: "2", text: "алфавиту", value: "title" },
];

export const Sort = () => {
  const dispatch = useDispatch();
  const { hideSort, activeSort } = useSelector(
    (state: RootState) => state.filter
  );

  const onCickSort = () => {
    dispatch(setHideSort(!hideSort));
  };

  const onchangeSort = (obj: SortArrayType) => {
    dispatch(setActiveSort(obj));
  };

  React.useEffect(() => {
    const bodyHandler = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (sortRef.current && !_e.path.includes(sortRef.current)) {
        dispatch(setHideSort(false));
      }
    };

    document.body.addEventListener("click", bodyHandler);

    return () => {
      document.body.removeEventListener("click", bodyHandler);
    };
  }, []);

  const sortRef = React.useRef<HTMLDivElement>(null);

  return (
    <div ref={sortRef} className="sort" onClick={onCickSort}>
      <div className="sort__label">
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{activeSort.text}</span>
      </div>
      {hideSort ? (
        <div className="sort__popup">
          <ul>
            {sortArray.map((el: SortArrayType, index: number) => (
              <li
                className={activeSort.id == el.id ? "active" : ""}
                onClick={() => onchangeSort(el)}
                key={index}
              >
                {el.text}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
