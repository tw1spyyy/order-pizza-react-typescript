import React from "react";
import debounce from "lodash.debounce";

import cl from "./Search.module.scss";

import { useDispatch, useSelector } from "react-redux";
import { setSearchValue } from "../../redux/slisec/filterSlice";
import { RootState } from "../../redux/store";

export const Search: React.FC = () => {
  const dispatch = useDispatch();

  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState("");

  const testDebounce = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    []
  );

  const onValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    testDebounce(event.target.value);
  };

  const clearInput = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <div className={cl.form}>
      <img className={cl.search} src="img/search.png" alt="" />
      <input
        ref={inputRef}
        value={value}
        onChange={(event) => onValueChange(event)}
        placeholder="Поиск пиццы.."
        className={cl.input}
        type="text"
      />
      {value ? (
        <img
          onClick={clearInput}
          className={cl.reject}
          src="img/reject.png"
          alt=""
        />
      ) : (
        ""
      )}
    </div>
  );
};
