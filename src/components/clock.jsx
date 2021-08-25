import React from "react";
import "../clock.css";

// Help and References: https://medium.com/@guyrashko/how-to-create-an-analog-clock-using-react-2e2e382367c3
class Clock extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date();
    this.state = {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    };
  }

  componentDidMount() {
    this.intervalid = setInterval(() => this.updateClock(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalid);
  }

  updateClock = () => {
    const date = new Date();
    this.setState({
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds()
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state;
    const secondsStyle = {
      transform: `rotate(${seconds * 6}deg)`
    };
    const minutesStyle = {
      transform: `rotate(${minutes * 6}deg)`
    };
    const hoursStyle = {
      transform: `rotate(${hours * 30}deg)`
    };
    return (
      <div>
        DIGITAL CLOCK
        <div className="time">{`${hours}:${minutes}:${seconds}`}</div>
        <div className="analogClock">
          <div className="dial hourToolTip" style={hoursStyle}></div>
          <div className="dial minuteToolTip" style={minutesStyle}></div>
          <div className="dial secondToolTip" style={secondsStyle}></div>
        </div>
      </div>
    );
  }
}

export default Clock;
