import "./styles.css";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
const types = ['square', 'circle'];
const colors = ["red", "gray", "blue", "cyan", "yellow", "orange"];
const NavBar = () => {
  const params = useParams();
  return (
    <div>
      <div className="type">
        {types.map((item) => {
          return (
            <Link
              className="type-btn"
              key={item}
              to={`/figure/${item}/${params.color ? params.color : "red"}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
      <div className="color">
        {colors.map((item) => {
          return (
            <Link
              className="color-btn"
              key={item}
              to={`/figure/${params.type ? params.type : "square"}/${item}`}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default NavBar;
