import React, { Component } from 'react';
import './style.css';

class Star extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingStyle: 'bigstar' + Math.ceil(this.props.rating)
    }
  }
  render() {
    const starStyle = 'star ' + this.state.ratingStyle;
    return (
      <div className={ starStyle }></div>
    )
  }
}

export default Star;
