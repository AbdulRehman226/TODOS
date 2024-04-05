import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
  let addTask = await inquirer.prompt([
    {
      name: "todos",
      type: "input",
      message: "What you want to add in your todos? ", 
    },
    {
      name: "addMore",         
      type: "confirm",
      message: "Do you want to add more in your todos ?",
      default: "true",
    },
  ]);
  todos.push(addTask.todos);
  condition = addTask.addMore;
  console.log(todos);
}
