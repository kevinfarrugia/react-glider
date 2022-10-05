import GliderType from "glider-js";
import * as React from "react";

import Glider from "../src";

function AutoplayGlider() {
  const INTERVAL = 5000;
  const MAX = 11;

  const intervalRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const callbackRef = React.useCallback((glider: GliderType) => {
    if (glider) {
      if (!intervalRef.current) {
        intervalRef.current = setInterval(() => {
          let index = glider.page;
          if (index < MAX) {
            index += 1;
          } else {
            index = 0;
          }
          glider.scrollItem(index, false);
        }, INTERVAL);
      }
    }
  }, []);

  React.useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    },
    []
  );

  return (
    <div className="container">
      <Glider
        id="autoplay-glider"
        className="glider-container"
        draggable
        hasDots
        slidesToShow={1}
        scrollLock
        ref={callbackRef}
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
          <code>{`const intervalRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

const callbackRef = React.useCallback((glider: GliderType) => {
  if (glider) {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        let index = glider.page;
        if (index < MAX) {
          index += 1;
        } else {
          index = 0;
        }
        glider.scrollItem(index, false);
      }, INTERVAL);
    }
  }
}, []);

React.useEffect(
  () => () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  },
  []
);

return (
  <Glider
    id="autoplay-glider"
    className="glider-container"
    draggable
    hasDots
    slidesToShow={1}
    scrollLock
    ref={callbackRef}
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

export default AutoplayGlider;
