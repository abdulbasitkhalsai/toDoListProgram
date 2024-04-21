#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"

let todos = []
let condition = true;

while (condition) {    
        let addTask = await inquirer.prompt(
            [
                {
                    name: "add",
                    message: chalk.red("What do you want to add in your to do list?"),
                    type: "input",
            },       
            {
                    name: "confirm",
                    message: `Do you want to add more?`,
                    type: "confirm",
                    default: "false",
            }
                        ]
        );

todos.push(addTask.add); 
condition= addTask.confirm;
console.log(chalk.blue(todos));
}