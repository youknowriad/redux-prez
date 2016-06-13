import React from "react";

import { Text } from "spectacle";

const style = {
  position: "absolute",
  bottom: "20px",
  right: "0",
  cursor: "pointer"
};

const Play = ({ run, toggle }) => (
  <Text textColor="primary" style={style}>
    <span onClick={toggle}>{run ? "Run" : "Stop"}</span>
  </Text>
);

export default Play;
