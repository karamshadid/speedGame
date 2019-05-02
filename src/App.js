import React, { Component } from 'react';
import './App.css';
import Header from "./Header/Header";
import Circle from "./Circle/Circle";
import Footer from "./Footer/Footer";
import Score from "./Score/Score";
import GameOver from "./GameOver/GameOver";

function getRandomInt(min,max) {
return Math.floor(Math.random() * (max-min +1))+min;
}

class App extends Component {

state={         //current and score are officail states//
current: 0,
score: 0,
showGameOver : false
};

pace= 1500; //pace is not a state so has to be declared outside class//
timer = undefined;


pickNext = () => {

  let nextActive = undefined;
do{
   nextActive = getRandomInt(1,5);

} while(nextActive === this.state.current);
this.setState({
  current:nextActive
});
this.pace*=0.95;
this.timer = setTimeout(this.pickNext.bind(this),this.pace);
}

startGameHandler = () => {
this.pickNext();

}

  clickHandler = (btnId) => {
    console.log("clicked!" , btnId);
    if (this.state.current !==btnId){
      this.gameOverHandler();
      return;
    }
this.setState(prevState =>{
  return{
    score:prevState.score + 1
  };
});

};

gameOverHandler = ()=> {
  clearTimeout(this.timer);
this.setState({
  showGameOver:true
});

}

  render() {
    return (
      <div className="App">
        <Header />
        <Score score={this.state.score} />

        <Circle
        active={this.state.current === 1}
        click={() => this.clickHandler(1)} />
        <Circle
        active={this.state.current === 2}
         click={() => this.clickHandler(2)} />
        <Circle
        active={this.state.current === 3}
        click={() => this.clickHandler(3)} />
        <Circle
        active={this.state.current ===4}
        click={() => this.clickHandler(4)} />
        <Circle
        active={this.state.current ===5}
        click={() => this.clickHandler(5)} />

        <div className="bothbuttons">
<button onClick={this.startGameHandler}>start </button>
<button onClick={this.gameOverHandler}>End </button>

        </div>

{this.state.showGameOver && <GameOver score={this.state.score} />}

      <div>

      </div>
      </div>
    );
  }
}

export default App;
