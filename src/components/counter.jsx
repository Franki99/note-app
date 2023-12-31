import React, { Component } from "react";

class Counter extends Component {
    state = {
        count:0
    };
  render() {
    let classes = "bagde m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }
  formatCount(){
  }
}
export default Counter;
