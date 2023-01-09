import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container container--cart">
      <div className="cart cart--empty">
        <h2>This page is not found 😕</h2>
        <p>
          Probably there is some problam on our webSite
          <br />
          Please try some later
        </p>
        <img
          src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg?w=2000"
          alt="Empty cart"
        />
        <NavLink to="/" className="button button--black">
          <span>Вернуться назад</span>
        </NavLink>
      </div>
    </div>
  );
};
