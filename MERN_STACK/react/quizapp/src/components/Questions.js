import React from "react";

const Questions = ({
  handleAnswer,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className="container mt-5  d-flex flex-column  ">
      <div className="h1 p-5 w-100 rounded-pill border border-secondary bg-light text-info  justify-content-center d-flex ">
        <p className="px-5" dangerouslySetInnerHTML={{ __html: question }} />
      </div>
      <div className=" row row-cols-3 d-flex justify-content-center">
        {answers.map((answers, idx) => {
          return (
            <button
              dangerouslySetInnerHTML={{ __html: answers }}
              className="btn btn-primary mt-5 mx-5 col rounded-pill"
              onClick={() => handleAnswer(answers)}
            />
              
            
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
