import React, { Component } from 'react';
import './style.css';

class Detailed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.today.getDate(),
      isWeekend: (this.props.today.getDay() === 0 || this.props.today.getDay() === 6) ? true : false 
    };
  }
  render() {
    const dateStyle = this.state.isWeekend ? 'date weekend' : 'date';
    const suggestion = <div>
                          { !this.props.calendar.detailed_date && <p>{ this.props.calendar.holiday }</p> }
                          <p>{ this.props.calendar.related_information }</p>
                          { this.props.calendar.detailed_date && <p>{ this.props.calendar.detailed_date }</p>}
                        </div>;
    const common = <div>
                      <p>{ this.props.calendar.related_information }</p>
                      <p class="line">（ { this.props.calendar.detailed_date } ）</p>
                   </div>;
    const sideStyle = this.state.isWeekend ? 'sloar weekend' : 'sloar';
    const side = <div className={ sideStyle }>
                  { this.props.calendar.sloar_term }
                </div>
    return (
      <div className="date-section">
        <p className={dateStyle}>
          { this.state.date }
        </p>
        <div className="related">
          { this.props.calendar.suggestion ? suggestion : common }
        </div>
        { this.props.calendar.sloar_term && side }
      </div>
    )
  }
}

export default Detailed
