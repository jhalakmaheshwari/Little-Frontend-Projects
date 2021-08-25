import React from "react";
import image1 from "../images/mountain1.jpeg";
import image2 from "../images/mountain2.jpeg";
import image3 from "../images/mountain3.jpeg";
import image4 from "../images/mountain4.jpeg";
import "../carousel.css";

const images = [image1, image2, image3, image4];
export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePointer: 0,
      images
    };
  }

  onClick = (direction) => {
    console.log(direction);
    this.setState({
      imagePointer:
        direction === "left"
          ? this.state.imagePointer - 1
          : this.state.imagePointer + 1
    });
  };

  render() {
    console.log(this.state.imagePointer);
    return (
      <div className="carousel">
        <button
          className="left"
          disabled={this.state.imagePointer === 0}
          onClick={(e) => this.onClick("left")}
        >
          &#10094;
        </button>
        <img
          alt=""
          src={this.state.images && this.state.images[this.state.imagePointer]}
        />

        <button
          className="right"
          disabled={this.state.imagePointer === this.state.images.length - 1}
          onClick={(e) => this.onClick("right")}
        >
          &#10095;
        </button>
      </div>
    );
  }
}
