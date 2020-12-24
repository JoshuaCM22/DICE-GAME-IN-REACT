import React, { Fragment } from "react";
import { Game } from "./Components/Game";
import { Interface } from "./Components/Interface";
import { AIresult } from "./Components/AIresult";
import { YourResult } from "./Components/YourResult";
import { Ranking } from "./Components/Ranking";
import "./App.css";

export default class App extends React.Component {
  draws = [];
  losses = [];
  wins = [];
  state = {
    game: 0,
    yourChoice: "",
    aiChoice: null,
    one:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-one.svg",
    two:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-two.svg",
    three:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-three.svg",
    four:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-four.svg",
    five:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-five.svg",
    six:
      "https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-six.svg",
  };

  clearState = () => {
    this.losses = [];
    this.wins = [];
    this.draws = [];
    this.setState({
      yourChoice: "",
      aiChoice: null,
      game: 0,
    });
  };

  startGame = () => {
    this.setState({ game: this.state.game + 1 });
    this.yourChoice();
    this.aiChoice();
  };

  yourChoice = () => {
    this.setState({
      yourChoice: Math.floor(Math.random() * 6) + 1
    });
  };
  aiChoice = () => {
    this.setState({
      aiChoice: Math.floor(Math.random() * 6) + 1
    });
  };

  render() {
    return (
      <Fragment>
        <Interface
          game={this.state.game}
          clearState={this.clearState}
          startGame={this.startGame}
        />
        <div className="resultContainer">
          <YourResult allstates={this.state} />
          <AIresult allstates={this.state} />
        </div>
        <br />
        <Game results={this.state} />
        <Ranking
          wins={this.wins}
          losses={this.losses}
          draws={this.draws}
          yourChoice={this.state.yourChoice}
          aiChoice={this.state.aiChoice}
        />
      </Fragment>
    );
  }
}
