import React, {Component} from "react";
import "./GameOver.css";

class GameOver extends Component{

  closeHandler =() =>{
window.location.reload();

  }


render(){

return(
  <div id="result">
  <div className="gameoverbox">
<p id="gameover"> Game Over! your final score was: {this.props.score}</p>
<button id="close" onClick={this.closeHandler}>Close</button>
   </div>
  </div>

  );
 }
}
export default GameOver;
