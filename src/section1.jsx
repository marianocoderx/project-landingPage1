import React from "react";
import CardComp from "../cardComp";
import "../stylesheets/section1.css";

export default function Section1() {
  const cards = [];
  
  for (let i = 0; i < 3; i++) {
    cards.push(<CardComp key={i} />);
  }

  return (
    <div className="mainContainer">
      <div className="titleContainer">
        <h1>Lorem ipsum dolor sit amet consectetur.</h1>
        <h2>Subtitulo de la sección</h2>
      </div>
      <div className="cardsContainer">
        {cards}
      </div>
    </div>
  );
}
