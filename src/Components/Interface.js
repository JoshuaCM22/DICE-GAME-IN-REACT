import React, { Fragment } from "react";

export const Interface = (props) => {
  return (
    <Fragment>
      <img
        alt="choose"
        style={{ cursor: "pointer" }}
        onClick={props.startGame}
        src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/perspective-dice-six-faces-random.svg"
      />
      <br />
      <br />
      <br />
      <span onClick={props.clearState}>Reset the game</span>
      <br />
      <br />
      <h2>Game: {props.game}</h2>
    </Fragment>
  );
};
