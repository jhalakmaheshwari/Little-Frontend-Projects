import React from "react";

let timer;
class TypeAhead extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: timer,
      searchData: [
        "The sun",
        "The sun and the moon",
        "The moon",
        "The moon shines with sun",
        "The stars",
        "In night the moon and the stars"
      ],
      searchResults: []
    };
  }

  componentDidMount() {
    this.setState({
      throttle: this.newThrottling1(this.debouncedCalledFn, 1000)
    });
  }

  debouncedCalledFn = (typedVal) => {
    console.log("Typed Val", typedVal);
    const results = this.state.searchData.filter((searchResult) =>
      searchResult.includes(typedVal)
    );
    this.setState({
      searchResults: results
    });
  };

  throttlingFn = (fn, delay) => {
    let lastTime = 0;
    console.log("in throttling fn");
    return function (...args) {
      const present = new Date();
      if (present - lastTime > delay) {
        console.log("calling......");
        fn(...args);
        lastTime = present;
      }
    };
  };

  newThrottling = (event, fn, delay) => {
    console.log("timer", this.state.timer);
    if (!this.state.timer) {
      console.log("LINE 48");
      fn.apply(this, [event.target.value]);
      this.setState({
        timer: setTimeout(() => this.setState({ timer: undefined }), delay)
      });
    }
  };

  // Using closure in throttling
  newThrottling1 = (fn, delay) => {
    let flag = true;
    return function (event) {
      const context = this;
      const args = arguments;
      console.log("LINE 48", flag);
      if (flag) {
        fn.apply(this, [event.target.value]);
        flag = false;
        setTimeout(() => {
          flag = true;
        }, delay);
      }
    };
  };

  onKeyUpFn = (event, fn, delay) => {
    clearTimeout(this.state.timer);
    let context = this;
    this.setState({
      timer: setTimeout(() => {
        context.debouncedCalledFn.apply(context, [event.target.value]);
      }, delay)
    });
  };

  render() {
    return (
      <div>
        <input type="text" onKeyUp={(e) => this.state.throttle(e)} />
        <ul>
          {this.state.searchResults.map((searchRes) => (
            <li style={{ "list-style-type": "none", background: "yellow" }}>
              {searchRes}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TypeAhead;
