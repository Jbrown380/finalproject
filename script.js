     let todo = [];
document.getElementById('button').addEventListener('click', function(event) {
event.preventDefault();
      var theList = document.getElementById('myTodo');
 theList.innerHTML = ''; 
      var todoD = document.getElementById('todoField').value;
    todo.push(todoD)  

    
       for (var i = 0; i < todo.length; i++) {
        var liEl = document.createElement("li");
  liEl.appendChild(document.createTextNode(todo[i]));
  theList.append(liEl);
   
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "X";
  deleteButton.addEventListener("click", function deleteTodo(event) {
     event.preventDefault();
    liEl.remove(todo[i] + deleteButton);
});
     var checkBox = document.createElement("input");
  checkBox.type = 'checkbox';
  
  theList.appendChild(checkBox);
  theList.appendChild(deleteButton);
}
});