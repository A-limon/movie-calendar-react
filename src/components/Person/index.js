import React, { Component } from 'react';
import './style.css';

class Person extends Component {
  render () {
    return (
      <div className="person chinese l-flex">
        <p className="content">
          { !this.props.calendar.contributor && <span>“</span> }
          { this.props.calendar.content }
          { !this.props.calendar.contributor && <span>”</span> }
          { this.props.calendar.contributor &&  <span className="contributor">—— ID：{ this.props.calendar.contributor }</span> }
        </p>
      </div>
    );
  }
}

export default Person;
