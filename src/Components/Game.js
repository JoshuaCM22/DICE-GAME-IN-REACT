import React, { Fragment } from "react";

export const Game = (props) => {
  const { yourChoice, aiChoice } = props.results;

  if (yourChoice > aiChoice) {
    return <h1 className="won">You Won!</h1>;
  } else if (aiChoice > yourChoice) {
    return <h1 className="lost">You Lost!</h1>;
  } else if (aiChoice === null && yourChoice === "") {
    return (
      <Fragment>
        <h1>Dice Game in React</h1>
        <p>
          Instruction: Click the image dice above to get random dice and start
          the game
        </p>
      </Fragment>
    );
  } else {
    return <h1 className="draw">Draw</h1>;
  }
};
