import React from "react";
import cl from "./Pagination.module.scss";
import ReactPaginate from "react-paginate";
import { HomeContext } from "../../Pages/Home";

export const Pagination: React.FC = () => {
  const { currentPage, onChangePage } = React.useContext(HomeContext);

  return (
    <div className={cl.pagination}>
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage(e.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
      />
    </div>
  );
};
