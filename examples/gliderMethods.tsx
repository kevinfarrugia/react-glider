import { useRef } from "react";
import Glider from "../src";
import { GliderMethods } from "../src/types";

function RefGlider() {
  const gliderRef = useRef<GliderMethods>(null);
  return (
    <div className="container">
      <button
        type="button"
        onClick={() => {
          const random = Math.floor(Math.random() * 12);
          gliderRef.current?.scrollItem(random);
        }}
      >
        Scroll to random item
      </button>
      <Glider
        className="glider-container"
        draggable
        hasDots
        slidesToShow={1}
        scrollLock
        ref={gliderRef}
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
          <code>{`const gliderRef = useRef<GliderMethods>(null);

return (
  <button
    type="button"
    onClick={() => {
      const random = Math.floor(Math.random() * 12);
      gliderRef.current?.scrollItem(random);
    }}
  >
    Scroll to random item
  </button>
  <Glider
    className="glider-container"
    draggable
    hasDots
    slidesToShow={1}
    scrollLock
    ref={gliderRef}
  >
    <div>
      <span>1</span>
    </div>
  </Glider>
);`}</code>
        </pre>
      </details>
    </div>
  );
}

export default RefGlider;
