import { useCallback, useEffect, useRef } from "react";
import GliderType from "glider-js";

import Glider from "../src";

function AutoplayGlider() {
  const INTERVAL = 5000;
  const MAX = 11;

  const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const callbackRef = useCallback((glider: GliderType) => {
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

  useEffect(
    () => () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    },
    []
  );

  return (
    <div className="container">
      <Glider
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
          <code>{`const intervalRef = useRef<ReturnType<typeof setTimeout> | null>(null);

const callbackRef = useCallback((glider: GliderType) => {
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

useEffect(
  () => () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  },
  []
);

return (
  <Glider
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
