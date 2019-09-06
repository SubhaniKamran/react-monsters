import React from "react";
import Card from "../card/Card";
import "./card-list.styles.css";
const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster}></Card>
    ))}
  </div>
);

export default CardList;
