import React, { useState } from "react";
import Menu from "./Menu";
import Navigation from "./Navigation";
import data from "./data.json";

const getCategory = () => {
  const cate = new Set(data.map((el) => el.category));
  const fullCate = ["all", ...cate];

  return fullCate;
};

// console.log(getCategory());

const App = () => {
  const [getCate, setCate] = useState(data);

  const filterCategory = (cateName) => {
    // setCate(data);
    // setCate((pre) => pre.filter((el) => el.category === cateName));
    if (cateName === "all") {
      setCate(data);
      return;
    }

    const newItem = data.filter((el) => el.category === cateName);
    setCate(newItem);
  };

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading__primary">Our Menu</h1>
        <Navigation
          fullCates={getCategory}
          cateContainer={filterCategory}
        ></Navigation>
        <Menu menu={getCate}></Menu>
      </div>
    </div>
  );
};

export default App;
