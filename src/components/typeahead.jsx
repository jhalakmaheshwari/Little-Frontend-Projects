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

  debouncedCalledFn = (typedVal) => {
    console.log("Searching", typedVal);
    const results = this.state.searchData.filter((searchResult) =>
      searchResult.includes(typedVal)
    );
    this.setState({
      searchResults: results
    });
    console.log("RESUlts", results);
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
        <input
          type="text"
          onKeyUp={(e) => this.onKeyUpFn(e, this.getData, 300)}
        />
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
