import React from "react";
import Category from "./Category";

const Menu = (props) => {
  const { menu } = props;

  return (
    <>
      <div className="menus">
        {menu.map((el) => {
          return <Category key={el.id} {...el}></Category>;
        })}
      </div>
    </>
  );
};

export default Menu;
