import React, {Component} from "react";

import "./Footer.css";

class Footer extends Component {

  render() {
    return (
      <div className = "Footer" >
<button type="button" className="first" name="button" onclick="pickNext()">Start Game</button>
<button type="button" className="second" name="button" onclick="end()">End Game</button>


    </div>



    );
  }
}

export default Footer;
