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

var hrs = 0;
var mins = 0;
var secs = 0;
var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var interval;

function play() {
  interval = setInterval(function () {
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
        hrs++;
      }
    }
    seconds.innerHTML = secs;
    minutes.innerHTML = mins;
    hours.innerHTML = hrs;
  }, 1000);
}
function pause() {
  clearInterval(interval);
}
function stop() {
  clearInterval(interval);
  hrs = 0;
  mins = 0;
  secs = 0;
  seconds.innerHTML = secs;
  minutes.innerHTML = mins;
  hours.innerHTML = hrs;
}
