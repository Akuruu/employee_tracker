const { prompt } = require("inquirer");
const inquirer = require('inquirer');
// const db = require('./db');
const { table } = require('table');
const mysql = require('mysql2');

function intro() {
    const message = [
        ['EMPLOYEE MANAGEMENT SYSTEM']
    ]; console.log(table(message));
    mainMenu();
};

// Inquirer
function mainMenu() {
    inquirer
        prompt([
            {
                type: "list",
                name: "choices",
                message: "Where do you want to go?",
                choices: [
                    'View all Roles',
                    'View all Departments',
                    'View all Employees',
                    'Add a Department',
                    'Add an Employee',
                    'Add a role',
                    'Quit'
                ]
            }
        ]).then(res => {
            let choices = res.choices;
            console.log(res.choices);
            // Switch cases for each choice
            switch (res.choices) {
                case "View all Roles":
                    // viewRoles();
                    break;

                case "View all Departments":
                    // viewDepartments();
                    break;

                case "View all Employees":
                     viewEmployees();
                    break;

                case "Add Department":
                    // addDepartments();
                    break;

                case "Add Employee":
                    // addEmployees();
                    break;

                case "Add a Role":
                    // addRoles();
                    break;

                case "Quit":
                    connection.end();
                    break;
            }
        })
};


// async function viewEmployees() {
// Let employees = await db.findAllEmployees();
// console.table(employees);
// }

function viewEmployees() {
    db.findAllEmployees()
        .then(([rows]) => {
            let employees = rows;
            console.log("\n");
            console.table(employees)
        })
        .then(() => mainMenu());
        viewEmployees();
}

// function quit() {
//     console.log("Goodbye...");
//     process.exit();
// };

intro();