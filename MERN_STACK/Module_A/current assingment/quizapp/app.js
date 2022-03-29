displayQuestion = document.getElementById("questionDisplay");
questionNumber = document.getElementById("questionNumber");
answerParent = document.getElementById("answerParent");

// Questions to be displayed
var question1 = {
  question: "what is the full form of CSS?",
  option1: "Cascading Style Sheets",
  option2: "CSS",
  option3: "Central Ship Source",
  option4: "Comma Space Space",
};
var question2 = {
  question: "what is the full form of HTML ?",
  option1: "Hyper Text Markup Language",
  option2: "HTML",
  option3: "Hyper Tower Metro Lounge",
  option4: "Hyper Text Market Language",
};
var question3 = {
  question: "what is the full form of JS ?",
  option1: "JavaScript",
  option2: "JavaSource",
  option3: "JarvisSound",
  option4: "JackSokelling",
};
var question4 = {
  q: "what is the full form of RAM ?",
  a: "Random Access Memory",
};
var question5 = {
  q: "what is the full form of ROM ?",
  a: "Read Only Memory",
};
var question6 = {
  q: "what is the full form of CPU ?",
  a: "Central Processing Unit",
};
var question7 = {
  q: "what is the full form of CPU ?",
  a: "Central Processing Unit",
};
var question6 = {
  q: "what is the full form of IBM ?",
  a: "International Business Machine",
};
var question8 = {
  q: "what is VAR ?",
  a: "Variable",
};
var question9 = {
  q: "What is the name of the First Prime Minister of Pakistan ?",
  a: "Liaquat Ali Khan",
};
var question10 = {
  q: "Who is the father of Computers ?",
  a: "Charles Babbage",
};








displayQuestion.innerHTML = question1.question



answerParent.innerHTML = `<div class="col-md-6">
          <button class="btn rounded shadow btn-light p-3 my-3 mx-auto w-100">
            ${question1.option1}
          </button>
        </div>
        <div class="col-md-6">
          <button class="btn rounded shadow btn-light p-3 my-3 mx-auto w-100">
            ${question1.option2}
          </button>
        </div>
        <div class="col-md-6">
          <button class="btn rounded shadow btn-light p-3 my-3 mx-auto w-100">
            ${question1.option3}
          </button>
        </div>
        <div class="col-md-6">
          <button class="btn rounded shadow btn-light p-3 my-3 mx-auto w-100">
            ${question1.option3}
          </button>
        </div>`;