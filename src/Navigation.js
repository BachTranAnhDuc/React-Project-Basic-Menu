import React from "react";

const Navigation = (props) => {
  const { fullCates, cateContainer } = props;

  // console.log(fullCates);

  // return (
  //   <ul className="nav">
  //     {fullCates.map((el, index) => {
  //       return (
  //         <li key={index} className="nav__item">
  //           <button className="nav__btn">{el}</button>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );

  return (
    <ul className="nav">
      {fullCates().map((el, index) => {
        return (
          <li key={index} className="nav__item">
            <button className="nav__btn" onClick={() => cateContainer(el)}>
              {el}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
