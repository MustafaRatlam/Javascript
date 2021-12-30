var todoInp = document.getElementById("todoInp");
var showList = document.getElementById("showList");

function addTodo() {
  var todoText = todoInp.value;
  var todoTextNode = document.createTextNode(todoText);
  var todoLi = document.createElement("li");
  todoLi.appendChild(todoTextNode);
  showList.appendChild(todoLi);

  var deleteBtn = document.createElement("button");
  deleteBtn.setAttribute("onclick", "deleteTodo(this)");
  var deleteTextNode = document.createTextNode("Delete");
  deleteBtn.appendChild(deleteTextNode);
  todoLi.appendChild(deleteBtn);

  var editBtn = document.createElement("button");
  editBtn.setAttribute("onclick", "editTodo(this)");
  var editTextNode = document.createTextNode("Edit");
  editBtn.appendChild(editTextNode);
  todoLi.appendChild(editBtn);

  todoInp.value = "";
}

function deleteTodo(element) {
  element.parentNode.remove();
}

function editTodo(element) {
  element.parentNode.firstChild.nodeValue = prompt(
    "Edit your text",
    element.parentNode.firstChild.nodeValue
  );
}

function delTodo() {
  showList.innerHTML = "";
}
