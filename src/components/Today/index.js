import React, { Component } from 'react';
import './style.css';

class Today extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: this.props.today.getMonth()+1,
      day: this.props.today.getDay() === 0 ? 7 : this.props.today.getDay()
    };
  }
  componentWillMount() {
    const monthChinese = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十' ,'十一' ,'十二'];
    const dayChinese = ['一', '二', '三', '四', '五', '六', '日'];
    this.setState({
      monthToShow: monthChinese[this.state.month - 1],
      dayToShow: dayChinese[this.state.day - 1],
      isWeekend: (this.state.day === 6 || this.state.day === 7) ? true : false
    });
  }
  render() {
    let todayStyle = '';
    if (this.state.isWeekend) {
      todayStyle = 'today l-flex weekend';
    } else {
      todayStyle = 'today l-flex';
    }
    return (
      <div className={ todayStyle }>
        <span className="month">{ this.state.monthToShow }月</span>
        <span className="week">星期{ this.state.dayToShow }</span>
        <span className="lunar">农历{ this.props.calendar.lunar_date }</span>
      </div>
    );
  }
}

export default Today;
