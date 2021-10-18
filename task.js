let taskManager = `TASK MANAGER\n
What would you like to do (Please enter one of the options below):
"TASKS" - Display All Tasks
"NEW" - Add A New Task
"REMOVE" - Remove A Task
"CLOSE" - Close The Task Manager
`
let userInput;

let tasks = `TASKS`
let add = `NEW`
let remove = `REMOVE`
let close = `CLOSE`

while (true) {
    userInput = prompt(taskManager);
    if (userInput === close) {
        alert(`Thank you for using Task Manager!`);
    }
    if (userInput === add) {
        newTask = prompt(`Please enter the new task:`)
        alert(`"${newTask}" has been added`)
        // break;
    }
    if (userInput === remove) {
        prompt(`I am not prepared for this assignment`);
    }
    if (userInput === tasks) {
        alert(`Charge MacBook\nMaster JavaScript`);
    }
    else if (!userInput === close || !userInput === display) {
        option = prompt(taskManager);
        // break;
    }
}


