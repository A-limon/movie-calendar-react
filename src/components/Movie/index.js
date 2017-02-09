import React, { Component } from 'react';
import './style.css';
import Star from '../Star';

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pic: this.props.calendar.pic ? this.props.calendar.pic.match(/^(.+)(\?imageView)/)[1] : ''
    };
    this.handleJumpToDouban = this.handleJumpToDouban.bind(this);
  }
  handleJumpToDouban (e) {
    if (this.props.calendar.url) {
      setTimeout(function () {
        window.location.href = 'https://movie.douban.com/subject/' + this.props.calendar.url.replace(/(douban:\/\/douban.com\/movie\/)/,'');
      }.bind(this), 2000);
      window.location = this.props.calendar.url;
    }
  }
  render() {
    return (
      <div className="movie l-flex" onClick={this.handleJumpToDouban}>
       <div className="info">
         <p className="movie-title chinese">《{ this.props.calendar.suggestion }》</p>
         <div className="rate l-flex">
          <div className="rating">{ this.props.calendar.rating }</div>
          <div className="rating-poing">
            <Star rating={ +this.props.calendar.rating }></Star>
            <p className="comments">{ this.props.calendar.number_of_comments }人在豆瓣评价</p>
          </div>
         </div>
       </div>
       <div className="pic">
        <img src={ this.state.pic } alt={ this.props.calendar.suggestion } />
       </div>
      </div>
    )
  }
}

export default Movie;
