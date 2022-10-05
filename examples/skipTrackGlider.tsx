import * as React from "react";

import Glider from "../src";

function SkipTrackGlider() {
  return (
    <div className="container">
      <Glider
        id="skip-track-glider"
        className="glider-container"
        draggable
        hasDots
        slidesToShow={3}
        skipTrack
      >
        <div className="custom-track">
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
        </div>
      </Glider>
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  id="skip-track-glider"
  className="glider-container"
  draggable
  hasDots
  slidesToShow={3}
  skipTrack
>
  <div className="custom-track">
    <div>
<span>1</span>
    </div>
  </div>
</Glider>`}</code>
        </pre>
      </details>
    </div>
  );
}

export default SkipTrackGlider;
