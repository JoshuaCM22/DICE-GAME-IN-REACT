import React from "react";

export const AIresult = (props) => {
  const { one, two, three, four, five, six, aiChoice } = props.allstates;
  if (aiChoice === 1) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={one} />
      </div>
    );
  } else if (aiChoice === 2) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={two} />
      </div>
    );
  } else if (aiChoice === 3) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={three} />
      </div>
    );
  } else if (aiChoice === 4) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={four} />
      </div>
    );
  } else if (aiChoice === 5) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={five} />
      </div>
    );
  } else if (aiChoice === 6) {
    return (
      <div className="result">
        <div>AI:</div> <img alt="dice" width="50%" src={six} />
      </div>
    );
  } else {
    return null;
  }
};
