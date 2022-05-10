import React from "react";

const Navbar = () => {
  return (
    <div className="">
      <div
        className="
          container
          bg-secondary
          mt-5
          d-flex
          justify-content-between
        "
      >
        <div className="textColorGray">
          <h1>Quiz App</h1>
        </div>
        <div className="textColorGray">
          <h1>
            <span id="questionNumber"></span>/10
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
