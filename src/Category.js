import React from "react";

const Category = (props) => {
  const { title, price, img, desc } = props;
  return (
    <>
      <div className="menus">
        <figure className="category">
          <img src="./images/item-1.jpeg" alt="" className="category__img" />
          <figcaption className="category__detail">
            <h4 className="category__name">{title}</h4>
            <p className="category__price">{price}</p>
            <p className="category__info">{desc}</p>
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default Category;
