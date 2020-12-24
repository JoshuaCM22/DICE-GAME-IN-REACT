import React from "react";

export const Ranking = (props) => {
  if (props.yourChoice > props.aiChoice) {
    props.wins.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{" "}
        {props.draws.length}
      </h2>
    );
  } else if (props.aiChoice > props.yourChoice) {
    props.losses.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{" "}
        {props.draws.length}
      </h2>
    );
  } else if (props.aiChoice === props.yourChoice) {
    props.draws.push(1);
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{" "}
        {props.draws.length}
      </h2>
    );
  } else if (props.aiChoice === null && props.yourChoice === "") {
    return (
      <h2>
        wins: {props.wins.length} losses: {props.losses.length} draws:{" "}
        {props.draws.length}
      </h2>
    );
  } else {
    return null;
  }
};
