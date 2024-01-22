import React, { useState } from "react";
import "./slider.css";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";

const Slider = ({ data }) => {
  const [count, setCount] = useState(0);

  function onDecramentHandler() {
    if (count <= 0) {
      setCount(data.length - 1);
    } else {
      setCount((prev) => prev - 1);
    }
  }

  function onInceramentHandler() {
    if (count === data.length - 1) {
      setCount(0);
    } else {
      setCount((prev) => prev + 1);
    }
  }

  return (
    <>
      <div className="slider_container">
        <div>
          <MdSkipPrevious
            onClick={onDecramentHandler}
            className="previous_btn"
          />
        </div>

        <div className="slider">
          <img src={data[count]} alt="" />
        </div>

        <div>
          <MdSkipNext onClick={onInceramentHandler} className="next_btn" />
        </div>
      </div>
    </>
  );
};

export default Slider;
