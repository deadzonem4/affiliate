import React from "react";
import {Link} from "react-router-dom";

class AllNews extends React.Component {
  
  constructor() {
    super();
    this.state = {
      todos: ['a','b','c','d','e','f','g','h','i','j','k'],
      currentPage: 1,
      todosPerPage: 4
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
      this.setState({
        currentPage: Number(event.target.id)
      });
    }

  componentDidMount() {
    window.scrollTo(0, 0)
  }
  
  render() {
    const news = this.props.api.map((filters, index) =>
      <div className="news-box-content" key={index}>
        <Link  to={{pathname: `/article${index + 1}`}}>
          <span>{filters.title_bg}</span>
        </Link>
      </div>
    );
    const {currentPage, todosPerPage } = this.state;

    // Logic for displaying todos
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = news.slice(indexOfFirstTodo, indexOfLastTodo);

    const renderTodos = currentTodos.map((news, index) => {
      return <div className="news-box" key={index}>{news}</div>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          id={number}
          onClick={this.handleClick}
        >
          {number}
        </li>
      );
    });

    return (
      <div>
        <div className="news-box-content">
          {renderTodos}
        </div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default AllNews;



