import React from "react";
import PropTypes from "prop-types";
import lightOn from "../assets/img/lighton.png";

// a separate component is built for both lights on and lights off to allow for 
// maximum customization with images, sizes and actions
export default function LightOn(props) {
  return <img src={lightOn} 
              alt="Light Off" 
              style={{ height: props.height, zindex: props.zindex }} />;
}

LightOn.defaultProps = {
  height: "76px",
  position: "absolute",
  zindex: 200
};

LightOn.propTypes = {
  height: PropTypes.string,
  position: PropTypes.string,
  zindex: PropTypes.number
};
