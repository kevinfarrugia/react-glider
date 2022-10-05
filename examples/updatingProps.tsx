import * as React from "react";

import Glider from "../src";

function UpdatingPropsGlider() {
  const [slidesToShow, setSlidesToShow] = React.useState(1);

  return (
    <div className="container">
      Number of slides:
      <select
        value={slidesToShow}
        onChange={(e) => setSlidesToShow(parseInt(e.target.value, 10))}
      >
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
      </select>
      <Glider
        id="updating-props-glider"
        className="glider-container"
        draggable
        hasDots
        slidesToShow={slidesToShow}
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
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  id="updating-props-glider"
  className="glider-container"
  draggable
  hasDots
  slidesToShow={slidesToShow}
  scrollLock
>`}</code>
        </pre>
      </details>
    </div>
  );
}

export default UpdatingPropsGlider;
