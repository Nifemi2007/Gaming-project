import React from "react";

function Card(props) {
  return (
    <div className="card-container">
      <img src={props.img}></img>
      <div className="img-text">
        <h2>{props.number}</h2>
        <h3>{props.title}</h3>
        <p>{props.words}</p>
      </div>
    </div>
  );
}
export default Card;
