import React from "react";
import Menu from "./Menu";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading__primary">Our Menu</h1>
        <ul className="nav">
          <li className="nav__item">
            <button className="nav__btn">All</button>
          </li>
          <li className="nav__item">
            <button className="nav__btn">Breakfast</button>
          </li>
          <li className="nav__item">
            <button className="nav__btn">Lunch</button>
          </li>
          <li className="nav__item">
            <button className="nav__btn">Shakes</button>
          </li>
        </ul>

        <Menu></Menu>
      </div>
    </div>
  );
}

export default App;
