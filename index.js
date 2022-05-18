const { prompt } = require("inquirer");
const inquirer = require('inquirer');
const db = require('./db/connection');
const { table } = require('table');
const ctable = require('console.table');
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
                viewRoles();
                break;

            case "View all Departments":
                viewDepartments();
                break;

            case "View all Employees":
                viewEmployees();
                break;

            case "Add Department":
                // addDepartments();
                break;

            case "Add Employee":
                addEmployee();
                break;

            case "Add a Role":
                // addRoles();
                break;

            case "Quit":
                quit();
                break;
        }
    })
};


// async function viewEmployees() {
// Let employees = await db.findAllEmployees();
// console.table(employees);
// }

// View all Employees
function viewEmployees() {
    db.query("SELECT first_name AS 'First Name', last_name AS 'Last Name', role_id AS 'role ID', title AS 'Title', salary AS 'Salary', name AS 'Department' FROM employee, department, role", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenu();
    });
}

// Views all Departments
function viewDepartments() {
    db.query("SELECT name AS 'Department', id AS 'Department ID' FROM department", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenu();
    });
}


// View all Roles
function viewRoles() {
    db.query("SELECT title AS 'Title', salary AS 'Salary', name AS 'Department' FROM role, department", function (err, results) {
        if (err) throw err;
        console.table(results);
        mainMenu();
    });
}

// Adds an Employee
function addEmployee() {
    db.query("SELECT * FROM employees", function (err, res) {
        inquirer
            .prompt([
                {
                    name: "first_name",
                    type: "input",
                    message: "Please enter the employee's First name"
                },
                {
                    name: "last_name",
                    type: "input",
                    message: "Please enter the employee's Last name"
                },
                {
                    name: "roles",
                    type: "list",
                    message: "Where did you want to put them?",
                    choices: role
                }
            ]).then(answers => {
                const currentRole = res.find(element => {
                    return element.title === answers.roles
                });
                console.log(currentRole.id);
                const newEmployee = {
                    firstName: answers.first_name,
                    lastName: answers.last_name,
                    roleId: currentRole.id
                };
                connection.query("INSERT INTO employee SET ?", newEmployee, (err, success) => {
                    if (err) throw err;
                    console.log(`${newEmployee.firstName} was added successfully`);
                    mainMenu();
                })
            });
    })
};


// Quits the app
function quit() {
    console.log("Leaving Employee Management System...");
    process.exit();
};

intro();
