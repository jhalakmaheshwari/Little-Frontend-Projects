import React from "react";

class Rating extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRating: 0
    };
  }

  hoverHandler = (event) => {
    const elems = document.getElementsByClassName("star");
    const hoverRating = event.target.dataset.value;
    Array.from(elems).forEach((star) => {
      star.style.color = hoverRating >= star.dataset.value ? "yellow" : "gray";
    });
  };

  starClickHandler = (event) => {
    this.setState({
      currentRating: event.target.dataset.value
    });
  };

  setRating = () => {
    const elems = document.getElementsByClassName("star");
    Array.from(elems).forEach((star) => {
      star.style.color =
        this.state.currentRating >= star.dataset.value ? "yellow" : "gray";
    });
  };

  render() {
    const numberOfStars = 5;
    return (
      <div onMouseOut={this.setRating}>
        {[...Array(+numberOfStars).keys()].map((n) => (
          <span
            key={n + 1}
            data-value={n + 1}
            className="star"
            onMouseOver={this.hoverHandler}
            onClick={this.starClickHandler}
          >
            &#9733;
          </span>
        ))}
      </div>
    );
  }
}

export default Rating;
