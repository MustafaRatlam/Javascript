var display = document.getElementById("display");

function calculate(number) {
  display.value += number;
}
function result() {
  display.value = eval(display.value);
}
function clr() {
  display.value = "";
}
