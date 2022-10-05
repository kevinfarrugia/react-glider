import * as React from "react";

import Glider from "../src";

function RemountingGlider() {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle
      </button>
      {isVisible ? (
        <Glider
          id="remounting-glider"
          className="glider-container"
          draggable
          hasDots
          slidesToShow={1}
          scrollLock
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
      ) : null}
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  id="perspective-glider"
  className="glider-perspective"
  draggable
  hasDots
  slidesToShow={5}
  slidesToScroll={1}
>`}</code>
        </pre>
      </details>
    </div>
  );
}

export default RemountingGlider;
