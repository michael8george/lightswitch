import React from "react";

// nodejs library to set properties for components
import PropTypes from "prop-types";
import ceilingLight from "../assets/img/iu-2.png";

export default function CeilingLight(props) {
  return <img src={ceilingLight} alt="Ceiling Light" style={{ height: props.height }} />;
}

CeilingLight.defaultProps = {
  height: "125px",
  position: "absolute"
};

CeilingLight.propTypes = {
  height: PropTypes.string,
  position: PropTypes.string
};
