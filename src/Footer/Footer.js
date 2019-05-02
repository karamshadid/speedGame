import React, {Component} from "react";

import "./Footer.css";

class Footer extends Component {

  render() {
    return (
      <div className = "Footer" >
<button >Start Game</button>
<button  onClick={this.props.mybutton}>End Game</button>


    </div>



    );
  }
}

export default Footer;
