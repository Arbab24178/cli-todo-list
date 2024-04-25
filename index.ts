import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let condition = true;

console.log(chalk.bgGray("\n \t welcome to Khans - Todo-List Application"))

while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: " Input Your New Task : "
        },
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo-list successfully`)


    let addMoreTask = await inquirer.prompt([
        {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "false"
        },
    ]);
    condition = addMoreTask.addMore
}

console.log("Your updated Todo-list:" , todoList);
