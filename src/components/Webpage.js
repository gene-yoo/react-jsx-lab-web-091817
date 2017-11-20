import React from "react";
import FillerText from "./FillerText";

export default class Webpage extends React.Component {
  render() {
    return React.createElement(
      "div",
      {},
      React.createElement("h1", {}, "The world's coolest webpage"),
      <FillerText />,
      <FillerText />
    );
  }
}
