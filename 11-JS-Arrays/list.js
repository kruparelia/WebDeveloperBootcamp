var todos = [];
var input = prompt("What would you like to do?");
while (input !== "quit") {
    if (input === "list") {
        console.log(todos);
    }
    else if (input === "new") {
        var newTodo = prompt("ENter new Todo");
        todos.push(newTodo);
    }
    //ask input again
    var input = prompt("What would you like to do?");
}
console.log("APP QUIT");
