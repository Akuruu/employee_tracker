const { prompt } = require("inquirer");
const db = require("../db");
require("console.table");

// Inquirer
function mainMenu() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "what would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add an Employee",
                    value: "ADD_EMPLOYEES"
                },
                {
                    name: "Add a Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
       }
    ]).then(res => {
        let choices = res.choices;
        // call the appropriate function depending on what the user chooses
        // if or case switches
    })
}

// conditional statement here - call corresponding function

// async function viewEmployees() {
    // Let employees = await db.findAllEmployees();
    // console.table(employess);
// }

function viewEmployees() {
    db.findAllEmployees()
    .then(([rows]) => {
        let employees = rows;
        console.log("\n");
        console.table(employees)
    })
    .then(() => mainMenu());
}

function quit() {
    console.log("Goodbye...");
    process.exit();
};