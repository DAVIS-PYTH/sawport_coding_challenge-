import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ height = "50px", width = "50px" }) => {
  return (
    <Spinner
      role="status"
      animation="grow"
      style={{
        height: { height },
        width: { width },
        backgroundColor: "rgb(50, 5, 77)",
        margin: "5px auto",
        display: "block",
      }}
    ></Spinner>
  );
};

export default Loader;
