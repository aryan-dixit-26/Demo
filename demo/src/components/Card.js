import "../styles/card.css";
import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <div className="inner-card">
        {props.name}
      </div>
    </div>
  );
};

export default Card;
