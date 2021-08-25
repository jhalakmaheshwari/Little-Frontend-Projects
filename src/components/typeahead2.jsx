import React from "react";
import "../typeahead.css";

const searchData = [
  "The sun",
  "The sun and the moon",
  "The moon",
  "The moon shines with sun",
  "The stars",
  "In night the moon and the stars"
];

class TypeAhead2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      timer: undefined
    };
  }

  onKeyUp = (searchString) => {
    const searchFilteredData = searchData.filter((data) =>
      data.includes(searchString)
    );
    console.log(searchFilteredData);
    this.setState({
      searchResults: searchFilteredData
    });
  };

  debouncedFn = (event, fn, time) => {
    const searchString = event.target.value;
    const context = this;
    clearTimeout(this.state.timer);
    if (searchString.length > 1) {
      this.setState({
        timer: setTimeout(() => fn.apply(context, [searchString]), time)
      });
    }
  };

  render() {
    return (
      <div className="typeaheadContainer">
        <input
          type="text"
          className="search"
          onKeyUp={(e) => this.debouncedFn(e, this.onKeyUp, 500)}
        />
        <div>
          <ul>
            {this.state.searchResults &&
              this.state.searchResults.map((res) => (
                <li className="resultList">{res}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default TypeAhead2;
