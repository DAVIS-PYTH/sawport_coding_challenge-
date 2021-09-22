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
        margin: "40px auto",
        display: "block",
      }}
    >
      <span className="sr-only">Loading...</span>
    </Spinner>
  );
};

export default Loader;
