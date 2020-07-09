import React from "react";
import PropTypes from "prop-types";
import lightOff from "../assets/img/lightoff.png";

// a separate component is built for both lights on and lights off to allow for 
// maximum customization with images, sizes and actions
export default function LightOff(props) {
  return <img src={lightOff} 
              alt="Light Off" 
              style={{ height: props.height, zindex: props.zindex }} />;
}

LightOff.defaultProps = {
  height: "76px",
  position: "absolute",
  zindex: 200
};

LightOff.propTypes = {
  height: PropTypes.string,
  position: PropTypes.string,
  zindex: PropTypes.number
};
