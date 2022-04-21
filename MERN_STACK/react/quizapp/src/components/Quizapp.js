import React from "react";

const Quizapp = () => {
  return (
    <div className="container d-flex bg-primary ">
      <div
        className="
          container
          bg-success
          p-3
          my-3
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

export default Quizapp;
