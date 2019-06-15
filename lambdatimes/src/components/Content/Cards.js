import React, { Component } from "react";
import Card from "./Card";
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props
Card.propTypes = {
  card: PropTypes.object
};

export default Cards;
