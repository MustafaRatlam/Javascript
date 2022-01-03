var student1 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};
var student2 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};
var student3 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};
var student4 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};
var student5 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};
var student6 = {
  name: "Mustafa",
  fatherName: "Fakhruddin",
  age: 16,
  contact: "03370366926",
  isClearInAllSubjects: true,
};

//edit
student2.fatherName = "Hussain";

//add
student1.motherName = "Zainab";
student2.motherName = "Zainab";
student3.motherName = "Zainab";
student4.motherName = "Zainab";
student5.motherName = "Zainab";
student6.motherName = "Zainab";

//saving student data in an array
var studentList = [student1, student2, student3, student4, student5, student6];

//for roll number
for (var i = 0; i < studentList.length; i++) {
  studentList[i].rollNumber = i + 1;
}

//for data showing
var studentData = document.getElementById("studentData");

for (var i = 0; i < studentList.length; i++) {
  var obj = studentList[i];
  console.log(obj);

  studentData.innerHTML +=
    "<tr><td>" +
    obj.rollNumber +
    "</td><td>" +
    obj.name +
    "</td><td>" +
    obj.fatherName +
    "</td><td>" +
    obj.motherName +
    "</td><td>" +
    obj.contact +
    "</td><td>" +
    obj.isClearInAllSubjects +
    "</td></tr>";
}

function searchStd() {
  var inpVal = document.getElementById("inpVal");
  var showRollNumber = document.getElementById("showRollNumber");
  var showName = document.getElementById("showName");
  var showFatherName = document.getElementById("showFatherName");
  var showMotherName = document.getElementById("showMotherName");
  var showContact = document.getElementById("showContact");
  var showResult = document.getElementById("showResult");

  for (var i = 0; i < studentList.length; i++) {
    var std = studentList[i];

    if (inpVal.value == std.rollNumber) {
      showRollNumber.innerHTML = std.rollNumber;
      showName.innerHTML = std.name;
      showFatherName.innerHTML = std.fatherName;
      showMotherName.innerHTML = std.motherName;
      showContact.innerHTML = std.contact;
      showResult.innerHTML = std.isClearInAllSubjects;
    }
  }
}
