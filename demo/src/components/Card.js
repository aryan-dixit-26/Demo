import "../styles/card.css";
import React from "react";

const Card = (props) => {

  const handleClick = () => {
    props.changeColor((color)=>(props.name));
  }


  return (
    <div className="card">
      <div className="inner-card" onClick={handleClick}>
        {props.name.toUpperCase()}
      </div>
    </div>
  );
};

export default Card;
