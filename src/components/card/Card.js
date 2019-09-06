import React from "react";
import "./card.styles.css";
const Card = ({ monster }) => (
  <div className="card-container">
    <img
      alt={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h4>{monster.name}</h4>
    <p>{monster.email}</p>
  </div>
);

export default Card;
