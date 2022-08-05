import React from "react";

const Category = (props) => {
  const { title, price, img, desc } = props;
  return (
    <>
      <figure className="category">
        <div className="category__img-container">
          <img src={img} alt="" className="category__img" />
        </div>
        <figcaption className="category__detail">
          <h4 className="category__name">{title}</h4>
          <p className="category__price">${price}</p>
          <div className="line"></div>
          <p className="category__info">{desc}</p>
        </figcaption>
      </figure>
    </>
  );
};

export default Category;
