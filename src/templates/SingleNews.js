import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";




class AllNews extends React.Component {
  

  render() {

    const news = this.props.api.map((filters, index) =>
      <div key={index}>
        <Link  to={{pathname: `/news/${index + 1}`}}>
          <ul className="bet-info">
            <li id="match">
              <span>{filters.home_team}</span>
            </li>
          </ul>
        </Link>
      </div>
    );
    return (
      <div className="bet-content">
        {news}
      </div>
    );
  }
}

export default AllNews;


