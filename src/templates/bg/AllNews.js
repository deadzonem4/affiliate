import React from "react";
import {Link} from "react-router-dom";
import '../styles/main.css';

class AllNews extends React.Component {
  
  constructor() {
    super();
    this.state = {
      currentPage: 1,
      ImgPerPage: 4
    };
    this.handleClick = this.handleClick.bind(this);
    this.myRef = React.createRef()
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id)
    });
    window.scrollTo({
      top:this.myRef.current.offsetTop
    });
    sessionStorage.setItem('curPage', Number(event.target.id));
  }
  componentWillMount(){
    sessionStorage.getItem('curPage') && this.setState({
      currentPage: sessionStorage.getItem('curPage')
    });
  }
  componentDidMount() {
    window.scrollTo(0, 0);
    this.timer = setTimeout(() =>   
      window.scrollTo({
        top:this.myRef.current.offsetTop, 
        behavior: "smooth"
      }),300,
    );
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {

    const news = this.props.api.map((filters, index) =>
      <div className="news-box-content" key={index}>
        <Link className="all-news-img" to={{pathname: `/bg/news${index + 1}`}}>
          <img src={"https://dev.winbet-bg.com/uploads/images/news/" + filters.image_name} alt="winbet news"/>
        </Link>
        <div className="all-news-content">
          <div className="all-news-date">
            <span>{filters.date}</span>
          </div>
          <div className="all-news-title">
            <h4>{filters.title_bg}</h4>
          </div>
          <div className="all-news-text">
            <p>{filters.short_description_bg}</p>
          </div>
          <Link className="all-news-link"  to={{pathname: `/bg/news${index + 1}`}}>
          {this.props.read}
          </Link>
        </div>
      </div>
    );
    const {currentPage, ImgPerPage } = this.state;

    // Logic for displaying news
    const indexOfLastImg = currentPage * ImgPerPage;
    const indexOfFirstImg = indexOfLastImg - ImgPerPage;
    const currentImg = news.slice(indexOfFirstImg, indexOfLastImg);

    const renderImg = currentImg.map((news, index) => {
      return <div className="news-box" key={index}>{news}</div>;
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(news.length / ImgPerPage); i++) {
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
      <div className="all-news-page" ref={this.myRef}>
        <h2 className="dark-title">{this.props.title}</h2>
        <div className="title-red-line"></div>
        <div className="all-news">
          {renderImg}
        </div>
        <ul id="page-numbers">
          {renderPageNumbers}
        </ul>
      </div>
    );
  }
}

export default AllNews;



