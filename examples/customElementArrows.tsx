import * as React from "react";

import Glider from "../src";

function CustomElementArrowsGlider() {
  const leftArrowEl = React.useRef<HTMLElement | null>(null);
  const rightArrowEl = React.useRef<HTMLElement | null>(null);
  const [isReady, setIsReady] = React.useState(false);

  const leftArrowCallbackRef = React.useCallback((element) => {
    leftArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

  const rightArrowCallbackRef = React.useCallback((element) => {
    rightArrowEl.current = element;
    setIsReady(Boolean(leftArrowEl.current && rightArrowEl.current));
  }, []);

  return (
    <div className="container">
      {isReady && (
        <Glider
          className="glider-container glider-scroll-lock"
          draggable
          hasDots
          slidesToShow={1}
          hasArrows
          arrows={{
            prev: leftArrowEl.current,
            next: rightArrowEl.current,
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
      )}
      <div>
        <button
          ref={leftArrowCallbackRef}
          type="button"
          aria-label="Previous"
          className="custom-arrow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.075 34.075">
            <path
              fill="#010002"
              d="M24.57 34.075a1.964 1.964 0 0 1-1.396-.577L8.11 18.432a1.972 1.972 0 0 1 0-2.79L23.174.578a1.973 1.973 0 1 1 2.791 2.79l-13.67 13.669 13.67 13.669a1.974 1.974 0 0 1-1.395 3.369z"
            />
          </svg>
        </button>
        <button
          ref={rightArrowCallbackRef}
          type="button"
          aria-label="Next"
          className="custom-arrow"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 185.343 185.343">
            <path
              fill="#010002"
              d="M51.707 185.343a10.692 10.692 0 0 1-7.593-3.149 10.724 10.724 0 0 1 0-15.175l74.352-74.347L44.114 18.32c-4.194-4.194-4.194-10.987 0-15.175 4.194-4.194 10.987-4.194 15.18 0l81.934 81.934c4.194 4.194 4.194 10.987 0 15.175l-81.934 81.939a10.678 10.678 0 0 1-7.587 3.15z"
            />
          </svg>
        </button>
      </div>
      <details>
        <summary>View Source Code</summary>
        <pre>
          <code>{`<Glider
  className="glider-container glider-scroll-lock"
  draggable
  hasDots
  slidesToShow={1}
  hasArrows
  arrows={{
    prev: leftArrowEl.current,
    next: rightArrowEl.current,
  }}
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

export default CustomElementArrowsGlider;
