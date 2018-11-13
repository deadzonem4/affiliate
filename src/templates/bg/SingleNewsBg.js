import React from "react";


class SingleNewsBg extends React.Component {
  

  render() {

    return (
      <div className="bet-content">
        <h4>{this.props.match.params.index}</h4>
      </div>
    );
  }
}

export default SingleNewsBg;



