import { useState } from "react";
import Glider from "../src";

function DynamicDataGlider() {
  const [data, setData] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div className="container">
      <input
        type="button"
        onClick={() => {
          const newData = [
            ...new Array(Math.floor(Math.random() * 12) + 1),
          ].map((_, index) => index + 1);
          setData(newData);
        }}
        value="Randomize"
      />
      <div className="container">
        <Glider
          className="glider-container glider-scroll-lock"
          slidesToShow={1}
          hasDots
          draggable
        >
          {data.map((n) => (
            <div key={n} className="slide">
              <span>{n}</span>
            </div>
          ))}
        </Glider>
      </div>
    </div>
  );
}

export default DynamicDataGlider;
