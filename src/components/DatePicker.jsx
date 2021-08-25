import React from "react";
import "../datepicker.css";

const daysMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const monthMap = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    const date = new Date(2021, 8);
    this.state = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate()
    };
  }

  createGrid = () => {
    const totalDays =
      40 - new Date(this.state.year, this.state.month, 40).getDate();
    // console.log("total days", totalDays);
    let calendarArr = [];
    // console.log("calendar array", calendarArr);
    const startDay = new Date(this.state.year, this.state.month).getDay();
    // console.log(startDay);
    let k = 0,
      j = 0;
    for (let i = startDay; i < totalDays + startDay; i++) {
      const day = daysMap[i % 7];
      j = Math.floor(i / 7);
      // console.log(j, i % 7, i);
      if (!calendarArr[j]) {
        calendarArr[j] = new Array(7).fill(undefined);
      }
      calendarArr[j][i % 7] = {
        day,
        date: i - startDay
      };
    }
    // console.log("here", calendarArr);
    return (
      <table>
        <thead>
          <tr>
            {daysMap.map((day) => (
              <th>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendarArr.map((week) => (
            <tr>
              {week.map((dateObj) => (
                <td> {dateObj && dateObj.date + 1} </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  getMonthStr = (month) => monthMap[month];
  render() {
    // console.log(new Date(2021, 7).getDay());
    const { year, month, day } = this.state;
    return (
      <div className="DatePicker">
        <div className="mdp-input">
          <input type="date" />
        </div>
        <div className="mdp-container">
          <div className="mdpch-container">
            <div className="mdpchc-year">{year}</div>
            <div className="mdpchc-month">{this.getMonthStr(month)}</div>
            {this.createGrid()}
          </div>
        </div>
      </div>
    );
  }
}

export default DatePicker;
