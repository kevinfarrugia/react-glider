import * as React from "react";

import Glider from "../src";

function ResponsiveGlider() {
  return (
    <div className="container">
      <Glider
        className="glider-container"
        passiveListeners
        hasArrows
        hasDots
        slidesToShow={1}
        slidesToScroll={1}
        responsive={[
          {
            breakpoint: 775,
            settings: {
              slidesToShow: "auto",
              slidesToScroll: "auto",
              itemWidth: 150,
              duration: 0.25,
            },
          },
        ]}
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
  hasArrows
  hasDots
  slidesToShow={1}
  slidesToScroll={1}
  responsive={[
    {
      breakpoint: 775,
      settings: {
        slidesToShow: "auto",
        slidesToScroll: "auto",
        itemWidth: 150,
        duration: 0.25,
      },
    },
  ]}
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

export default ResponsiveGlider;
