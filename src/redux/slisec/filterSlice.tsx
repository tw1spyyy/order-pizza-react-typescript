import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export type SortArrayType = {
  id: string;
  text: string;
  value: string;
};

interface filterSliceInt {
  hideSort: boolean;
  activeSort: SortArrayType;
  categoryItem: string;
  currentPage: number;
  searchValue: string;
}

const initialState: filterSliceInt = {
  hideSort: false,
  activeSort: { id: "0", text: "популярности", value: "rating" },
  categoryItem: "0",
  currentPage: 1,
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setHideSort(state, action) {
      state.hideSort = action.payload;
    },
    setActiveSort(state, action) {
      state.activeSort = action.payload;
    },
    setCategoryItem(state, action) {
      state.categoryItem = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
  },
});

export const {
  setHideSort,
  setActiveSort,
  setCategoryItem,
  setCurrentPage,
  setSearchValue,
} = filterSlice.actions;

export default filterSlice.reducer;
