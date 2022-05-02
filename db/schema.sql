DROP DATABASE IF EXISTS employees;
CREATE DATABASE employees;

USE employees;

CREATE TABLE department (

    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(250) UNIQUE NOT NULL
);

CREATE TABLE role (

    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (250) UNIQUE NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(department_id)
    REFERENCES department(id)
);

CREATE TABLE employee (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(250) UNIQUE NOT NULL,
    last_name VARCHAR(250) UNIQUE NOT NULL,
    role_id INT UNSIGNED NOT NULL,
    manager_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(role_id)
    REFERENCES role(id)
);