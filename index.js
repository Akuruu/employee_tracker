const { prompt } = require("inquirer");
const inquirer = require('inquirer');
const connection = require('./db/connection');
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
                // addEmployees();
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
    connection.query("SELECT first_name AS 'First Name', last_name AS 'Last Name' FROM employee", function (err, results) {
        if (err) throw err;
        console.log(results);
        mainMenu();
    });
}

// Views all Departments
function viewDepartments() {
    connection.query("SELECT name AS 'Department', id AS 'Department ID' FROM department", function (err, results) {
        if (err) throw err;
        console.log(results);
        mainMenu();
    });
}


// View all Roles
function viewRoles() {
    connection.query("SELECT title AS 'Title', salary AS 'Salary', id AS 'ID' FROM role", function (err, results) {
        if (err) throw err;
        console.log(results);
        mainMenu();
    });
}

// Quits the app
function quit() {
    console.log("Leaving Employee Management System...");
    process.exit();
};

intro();
