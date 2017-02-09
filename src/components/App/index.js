import React, { Component } from 'react';
import axios from 'axios';
import './style.css';
import config from '../../config';
import Today from '../Today';
import Detailed from '../Detailed';
import Person from '../Person';
import Movie from '../Movie';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      today: config.APP_DATA.today,
      calendar: {}
    };
    this.fetchData = this.fetchData.bind(this);
  }
  fetchData() {
    axios.get(config.APP_DATA.api, {
      params: {
        year: this.state.today.getFullYear(),
        month: this.state.today.getMonth() + 1,
        date: this.state.today.getDate()
      }
    })
    .then(function (response) {
      if (response.data !== undefined && response.data.date !== undefined) {
        this.setState({
          loaded: true,
          calendar: response.data
        }); 
      }
    }.bind(this))
    .catch(function (error) {
      alert('抱歉发生错误');
      console.error(error);
    });
  }
  componentWillMount() {
    this.fetchData();
  }
  render() {
    let calendar = null;
    if (this.state.loaded) {
      calendar = <header className="header">
                  <Today calendar={this.state.calendar} today={this.state.today}></Today>
                  <Detailed calendar={this.state.calendar} today={this.state.today}></Detailed>
                  <Person calendar={this.state.calendar}></Person>
                  <Movie calendar={this.state.calendar}></Movie>
                </header>;
    } else {
      calendar = <div></div>
    }
    return (
      <div className="app">
        {calendar}
      </div>
    );
  }
}

export default App;
