// Constructor

// var arr = [];

// function createStudent(name, age) {
//   (this.name = name), (this.age = age);
// }

// createStudent.prototype.inst="LUMS"

// function createStdob(name, age){
//     var student1 = new createStudent(name, age);
//     arr.push(student1)
//     console.log(arr)
// };

// Stop Watch

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var inputValueHrs = document.getElementById("inputValueHr");
var inputValueMins = document.getElementById("inputValueMin");
var inputValueSecs = document.getElementById("inputValueSec");
var hrs = inputValueHrs;
var mins = inputValueMins;
var secs = inputValueSecs;
var interval;

function play() {
  hours.innerHTML = hrs.value;
  minutes.innerHTML = mins.value;
  seconds.innerHTML = secs.value;

  interval = setInterval(function () {
    if (hrs.value == 0 && mins.value == 0 && secs.value == 0) {
      hrs.value = 0;
      mins.value = 0;
      secs.value = 0;
    }
    if (secs.value != 0) {
      secs.value--;
    }
    if (mins.value != 0 && secs.value == 0) {
      secs.value = 59;
      mins.value--;
    }
    if(hrs.value !=0 && mins == 0){
      mins.value = 60
      hrs.value--
    }

    hours.innerHTML = hrs.value;
    minutes.innerHTML = mins.value;
    seconds.innerHTML = secs.value;
  }, 1000);
}

function stop() {
  clearInterval(interval);

  seconds.innerHTML = 0;
  minutes.innerHTML = 0;
  hours.innerHTML = 0;
}
