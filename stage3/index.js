const { prompt } = require("inquirer");
const db = require("./db");
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
                // view employees
                // view departments
                // view roles
                // add employee
                // add department
                // update an employee role
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
       }
    ]).then(res => {
        let choices = res.choices;
        // call the appropriate function depending on what the user chooses
        
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