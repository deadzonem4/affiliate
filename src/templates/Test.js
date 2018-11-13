import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




class Test extends React.Component {
  

  render() {

    return (
      <div className="bet-content">
        <h4>{this.props.params.id}</h4>
      </div>
    );
  }
}

export default Test;


