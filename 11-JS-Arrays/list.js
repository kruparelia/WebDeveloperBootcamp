var todos = [];
var input = prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "list") {
        listTodos();
    }
    else if (input === "new") {
        addTodo();
    }
    else if (input === "delete") {
        deleteTodo();
    }
    //ask input again
    var input = prompt("What would you like to do?");
}
console.log("APP QUIT");

function listTodos() {
    console.log("**********")
    todos.forEach(function (todo, index) {
        console.log(index + ": " + todo);
    });
    console.log("**********")
};

function addTodo() {
    var newTodo = prompt("ENter new Todo");
    todos.push(newTodo);
    console.log("Added todo");
}

function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    //use splice to delete
    todos.splice(index, 1);
    console.log("deleted Todo");
}

