import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import "./ColorBox.scss";

function getRandomColor() {
  const COLORLIST = ["deeppink", "blue", "green", "yellow", "black"];
  const randomIndex = Math.trunc(Math.random() * 5);
  return COLORLIST[randomIndex];
}

function ColorBox() {
  const [color, setColor] = useState(() => {
    const initColor = localStorage.getItem("box-color") || "deeppink";
    return initColor;
  });
  function handleBoxClick() {
    const newColor = getRandomColor();
    setColor(newColor);

    localStorage.setItem("box-color", newColor);
  }

  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={handleBoxClick}
    >
      {" "}
      hoapham
    </div>
  );
}

ColorBox.propTypes = {};

export default ColorBox;
