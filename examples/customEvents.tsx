/* eslint-disable no-console */
import * as React from "react";

import Glider from "../src";

function CustomEventsGlider() {
  return (
    <div className="container">
      <Glider
        className="glider-container"
        passiveListeners
        draggable
        hasDots
        slidesToShow={3}
        onSlideVisible={(e) => {
          console.log("Slide Visible", e.detail.slide);
        }}
        onSlideHidden={(e) => {
          console.log("Slide Hidden", e.detail.slide);
        }}
        onRefresh={() => {
          console.log("Refresh");
        }}
        onLoad={(e) => {
          console.log("Loaded", e.detail);
        }}
      >
        <div className="slide">
          <span>1</span>
        </div>
        <div className="slide">
          <span>2</span>
        </div>
        <div className="slide">
          <span>3</span>
        </div>
        <div className="slide">
          <span>4</span>
        </div>
        <div className="slide">
          <span>5</span>
        </div>
        <div className="slide">
          <span>6</span>
        </div>
        <div className="slide">
          <span>7</span>
        </div>
        <div className="slide">
          <span>8</span>
        </div>
        <div className="slide">
          <span>9</span>
        </div>
        <div className="slide">
          <span>10</span>
        </div>
        <div className="slide">
          <span>11</span>
        </div>
        <div className="slide">
          <span>12</span>
        </div>
      </Glider>
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  className="glider-container"
  draggable
  hasDots
  slidesToShow={3}
  onSlideVisible={(e) => {
    console.log("Slide Visible", e.detail.slide);
  }}
  onSlideHidden={(e) => {
    console.log("Slide Hidden", e.detail.slide);
  }}
  onRefresh={() => {
    console.log("Refresh");
  }}
  onLoad={(e) => {
    console.log("Loaded", e.detail);
  }}
>`}</code>
        </pre>
      </details>
    </div>
  );
}

export default CustomEventsGlider;
