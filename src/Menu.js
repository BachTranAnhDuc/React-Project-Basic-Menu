import React, { useState } from "react";
import data from "./data.json";
import Category from "./Category";

const Menu = () => {
  const [getCate, setCate] = useState(data);
  return (
    <>
      {getCate.map((el) => {
        return <Category key={el.id} {...el}></Category>;
      })}
    </>
  );
};

export default Menu;
