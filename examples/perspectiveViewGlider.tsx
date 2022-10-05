import * as React from "react";

import Glider from "../src";

function PerspectiveViewGlider() {
  return (
    <div className="container">
      <Glider
        id="perspective-glider"
        className="glider-perspective"
        draggable
        hasDots
        slidesToShow={5}
        slidesToScroll={1}
      >
        <div className="slide-outer">
          <span>1</span>
        </div>
        <div className="slide-outer">
          <span>2</span>
        </div>
        <div className="slide-outer">
          <span>3</span>
        </div>
        <div className="slide-outer">
          <span>4</span>
        </div>
        <div className="slide-outer">
          <span>5</span>
        </div>
        <div className="slide-outer">
          <span>6</span>
        </div>
        <div className="slide-outer">
          <span>7</span>
        </div>
        <div className="slide-outer">
          <span>8</span>
        </div>
        <div className="slide-outer">
          <span>9</span>
        </div>
        <div className="slide-outer">
          <span>10</span>
        </div>
        <div className="slide-outer">
          <span>11</span>
        </div>
        <div className="slide-outer">
          <span>12</span>
        </div>
      </Glider>
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  id="simple-glider"
  className="glider-container"
  draggable
  hasDots
  slidesToShow={1}
  scrollLock
>
  <div>
    <span>1</span>
  </div>
</Glider>`}</code>
        </pre>
      </details>
    </div>
  );
}

export default PerspectiveViewGlider;
